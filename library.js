(function(llamamall) {

    var nconf = module.parent.require('nconf');

    llamamall.init = function(params, callback) {
        var app = params.router,
            middleware = params.middleware;

        app.use(function(req, res, next) {
            next();
        });

        app.get('/login', middleware.buildHeader, function(req, res) {
            console.log('login');
            // res.redirect('/');
        });

        callback();
    };

    llamamall.authInit = function() {
        nconf.set('relative_path', '/forum');
    };

})(module.exports);