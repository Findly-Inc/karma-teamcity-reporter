describe("When two positive integers are added", function () {

    it("should return the sum of the two operands", function () {

        var calculator = new Calculator();
        expect(calculator.add(1, 2)).toBe(3);
    });
});
