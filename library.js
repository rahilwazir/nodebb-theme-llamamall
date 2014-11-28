(function(llamamall) {

    var unmount = function (app, path) {
        for (var i = 0, len = app.stack.length; i < len; ++i) {
            if (app.stack[i].route && app.stack[i].route.path == path) {
                app.stack.splice(i, 1);
                return true;
            };
        }
        return false;
    };

    llamamall.init = function(params, callback) {
        var app = params.router,
            middleware = params.middleware;

        // unmount(app, '/login');

        app.use(function(req) {
            console.log(req.headers);
        });

        app.get('/login', middleware.buildHeader, function(req, res) {
            // res.redirect('/');
        });

        callback();
    };

})(module.exports);