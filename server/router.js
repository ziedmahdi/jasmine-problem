/* global ExpertTest:true, allo:true, Router */

ExpertTest = {
    foo: function () {
        return 4;
    }
};


allo = function () {
    ExpertTest.foo();
};

Router.route('/call-api/intro', {
    where: "server",
    name: "Intro",
    action: function () {        
        this.response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        this.response.end(ExpertTest.foo().toString());
    }
});