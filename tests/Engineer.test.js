const Employee = require ("../lib/Employee");
const Engineer = require("../lib/Engineer")

describe ("Engineer", () => {
    
    describe("Initialization", () => {
        it("should return an object containing 'name,' 'id,' 'email', and 'github' properties", () => {
            const engineer = new Engineer("Tyler", "1", "tyler.a.starling@gmail.com", "teastarling");

            expect("name" in engineer).toEqual(true);
            expect("id" in engineer).toEqual(true);
            expect("email" in engineer).toEqual(true);
            expect("github" in engineer).toEqual(true)
        });
    });

    describe("getGithub", () => {
        it("should return 'github' input property", () => {
            const engineer = new Engineer("Tyler", "1", "tyler.a.starling@gmail.com", "teastarling");

            expect(engineer.getGithub()).toEqual("teastarling");
        });
    });
    
    describe("getRole", () => {
        it("should return 'Engineer' role", () => {
            const engineer = new Engineer("Tyler", "1", "tyler.a.starling@gmail.com", "teastarling");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});