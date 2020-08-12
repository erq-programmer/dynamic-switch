export {}; // if not - error TS2451: Cannot redeclare block-scoped variable 'Switch'.
const Switch = require("./dynamicSwitch");

describe("Switch class under test", () => {

    const checker = new Switch();
    const callback = jest.fn();

    it("isValid return true when all conditions is false", () => {
        checker.add(false, callback);
        checker.add(false, callback);
        expect(checker.isValid()).toBe(true)
    })

    it("isValid return false when any conditions is true", () => {
        checker.add(false, callback);
        checker.add(false, callback);
        checker.add(true, callback);
        expect(checker.isValid()).toBe(false);
    })

    it("clears cases and conditions when isValid is done", () => {
        expect(checker.cases).toHaveLength(0);
        expect(checker.conditions).toHaveLength(0);

    })
    
    it("when add 3 conditions by add method, it must be 3 length array with callbacks", () => {
        checker.add(false, callback);
        checker.add(false, callback);
        checker.add(true, callback);
        expect(checker.conditions).toHaveLength(3);
    }) 
})