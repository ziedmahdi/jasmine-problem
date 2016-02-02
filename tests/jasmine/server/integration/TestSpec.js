/* global ExpertTest:true, allo:true, spyOn, expect */

describe("With our IVR", function () {

    it("green test", function () {
        spyOn(ExpertTest, "foo").and.returnValue(50);

        allo();

        expect(ExpertTest.foo).toHaveBeenCalled();

    });

    it('red test', function() {
        spyOn(ExpertTest, "foo").and.returnValue(50);

        var callFirstResult = HTTP.get('http://localhost:8080/call-api/intro');
        
        console.log('The value returned from server in sync call is');
        console.log(callFirstResult.content);

        expect(ExpertTest.foo).toHaveBeenCalled();
    });

});