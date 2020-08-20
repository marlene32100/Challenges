 describe(" My whatCanIDrink function", function(){

    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Checks age", function() {

        it("should exist", function(){
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return Toddy when called as whatCanIDrink(13)", function(){
            let result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        it("should return Coke when called as whatCanIDrink(17)", function(){
            let result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        it("should return Beer when called as whatCanIDrink(20)", function(){
            let result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });
        it("should return Whiskey when called as whatCanIDrink(129)", function(){
            let result = whatCanIDrink(129)
            expect(result).toBe("Drink Whiskey");
        });
        it("should be unable to return a drink when called as whatCanIDrink(140)", function(){
            let result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});