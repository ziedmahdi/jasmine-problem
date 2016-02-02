/* global ExpertTest:true, allo:true, spyOn, expect */

describe("With our IVR", function () {

    beforeEach(function () {
        spyOn(ExpertTest, "foo").and.returnValue(50);
    });

    it("green test", function () {

        allo();

        expect(ExpertTest.foo).toHaveBeenCalled();

    });

    it('red test', function() {

        var callFirstResult = HTTP.get('http://localhost:8080/firstRoute');
        
        console.log('The value returned from server in sync call is');
        console.log(callFirstResult.content);

        expect(ExpertTest.foo).toHaveBeenCalled();
    });
    

    it('another red test', function (done) {
    
        HTTP.get('http://localhost:8080/firstRoute', Meteor.bindEnvironment(function (error, result) {
            
            console.log('The value returned from server in async call is');
            console.log(result.content);
            
            expect(ExpertTest.foo).toHaveBeenCalled();
            
            done();
        }));
    });
    
    it('a third red test', function() {

        var callFirstResult = HTTP.get('http://localhost:8080/secondRoute');
        
        console.log('The value returned from server in sync call is');
        console.log(callFirstResult.content);

        expect(ExpertTest.foo).toHaveBeenCalled();
    });
    

    it('a finally red test', function (done) {
    
        HTTP.get('http://localhost:8080/secondRoute', Meteor.bindEnvironment(function (error, result) {
            
            console.log('The value returned from server in async call is');
            console.log(result.content);
            
            expect(ExpertTest.foo).toHaveBeenCalled();
            
            done();
        }));
    });
    
});