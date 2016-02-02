/* global ExpertTest:true, allo:true, Router */

ExpertTest = {
    foo: function () {
        return 4;
    }
};


allo = function () {
    return ExpertTest.foo();
};

Router.route('/firstRoute', {
    where: "server",
    name: "firstRoute",
    action: function () {        
        this.response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        this.response.end(ExpertTest.foo().toString());
    }
});

Router.route('/secondRoute', {
    where: "server",
    name: "secondRoute",
    action: function () {        
        this.response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        this.response.end(allo().toString());
    }
});