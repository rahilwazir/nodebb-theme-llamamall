(function(w) {
    'use strict';

    var _llamamallForum = w.top.llamamallForum;
    var _llamamallForumHood = w.top.llamamallForumHood;

    if (!_llamamallForumHood) {
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
        _llamamallForum.$lScope.windowHeight = _llamamallForum.height = document.body.clientHeight + 'px';
        _llamamallForum.$lScope.$apply();
    });

})(window);
