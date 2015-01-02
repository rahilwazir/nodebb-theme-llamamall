(function(w) {
    'use strict';

    var _llamamallForum = w.top.llamamallForum;
    var _llamamallForumHood = w.top.llamamallForumHood;

    if (!_llamamallForumHood) {
        if (location.pathname.indexOf(RELATIVE_PATH + '/admin') === -1) {
            location.replace(location.origin + '/#!' + location.pathname);
        }
        return false;
    }

    var popNavi = function (_location) {
        var forumURI = $.trim(_location.url),
            _RELATIVE_PATH = RELATIVE_PATH.replace(/^\/+/g, '');

        if (forumURI !== '' && forumURI.indexOf(_RELATIVE_PATH) < 0) {
            forumURI = _RELATIVE_PATH + '/' + forumURI;
        } else if (forumURI === '') {
            forumURI = RELATIVE_PATH;
        }

        _llamamallForum.$scope.$apply(function () {
            _llamamallForum.$location.path(forumURI);
        });
    };

    $(window).on('action:popstate', function (_action, _location) {
        popNavi(_location, _action);
    });

    $(window).on('action:ajaxify.start', function (_action, _location) {
        popNavi(_location, _action);
    });

    $(window).on('action:ajaxify.end', function () {
        increaseHeight();
    });

    function increaseHeight(ph) {
        ph = document.body.clientHeight + (ph || 0);
        _llamamallForum.$lScope.windowHeight = _llamamallForum.height = ph + 'px';
        _llamamallForum.$lScope.$apply();
    }

    $(document).on('click', '#new_post, .post_reply', function() {
        setTimeout(function() {
            var composer = $('.composer');

            if (composer.length < 1) return;

            increaseHeight(200);
            localStorage.setItem('composer:resizePercentage', 0.8);
        }, 200);
    });

})(window);
