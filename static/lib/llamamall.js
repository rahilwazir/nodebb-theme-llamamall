(function(w) {
    'use strict';
    function noop() {}
    w.llamamall = {
        ForumHood: noop,
        uri: ''
    };
    var _llamamallForum = w.top.llamamallForum;
    var _llamamallForumHood = w.top.llamamallForumHood;
    if (_llamamallForumHood) {
        var popNavi = function (_location, _action) {
            var forumURI = $.trim(_location.url),
                _RELATIVE_PATH = RELATIVE_PATH.replace(/^\/+/g, ''),
                mainURI = $.trim(_llamamallForumHood.uri);
            if (forumURI !== '' && forumURI.indexOf(_RELATIVE_PATH) < 0) {

                forumURI = _RELATIVE_PATH + '/' + forumURI;
            } else if (forumURI === '') {
                forumURI = RELATIVE_PATH;
            }
            _llamamallForum.$scope.$apply(function () {
                _llamamallForum.$location.path(forumURI, false);
            });
        };
        $(window).on('action:popstate', function (_action, _location) {
            popNavi(_location, _action);
        });
        $(window).on('action:ajaxify.start', function (_action, _location) {
            popNavi(_location, _action);
            console.log(_location.url, _location);
            if(_location.url.indexOf('register') !== -1) {
                _llamamallForum.$location.url('/signup');
                _llamamallForum.$window.top.location.reload();
            } else if(_location.url.indexOf('login') !== -1) {
                _llamamallForum.$location.url('/login');
                _llamamallForum.$window.top.location.reload();
            }

        });
        $(window).on('action:ajaxify.end', function () {
            _llamamallForum.$lScope.windowHeight = _llamamallForum.height = document.body.clientHeight + 'px';
            _llamamallForum.$lScope.$apply();
        });
    }
})(window);