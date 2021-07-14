const Employee = require ("../lib/Employee");
const Intern = require("../lib/Intern")

// each object in intern subclass verified to be called upon correctly
describe ("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name,' 'id,' 'email', and 'school' properties", () => {
            const intern = new Intern("Tyler", "1", "tyler.a.starling@gmail.com", "Georgia Tech");

            expect("name" in intern).toEqual(true);
            expect("id" in intern).toEqual(true);
            expect("email" in intern).toEqual(true);
            expect("school" in intern).toEqual(true)
        });
    });

    describe("getGithub", () => {
        it("should return 'school' input property", () => {
            const intern = new Intern("Tyler", "1", "tyler.a.starling@gmail.com", "Georgia Tech");

            expect(intern.getSchool()).toEqual("Georgia Tech");
        });
    });

    describe("getRole", () => {
        it("should return 'Intern' role", () => {
            const intern = new Intern("Tyler", "1", "tyler.a.starling@gmail.com", "Georgia Tech");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});