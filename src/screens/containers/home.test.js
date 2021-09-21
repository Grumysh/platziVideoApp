const home = require("./home")
// @ponicode
describe("render", () => {
    let inst

    beforeEach(() => {
        inst = new home.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.render()
        }
    
        expect(callFunction).not.toThrow()
    })
})
