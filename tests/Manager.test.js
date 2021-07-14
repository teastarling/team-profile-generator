const Employee = require ("../lib/Employee");
const Manager = require("../lib/Manager")

// each object in manager subclass verified to be called upon correctly
describe ("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name,' 'id,' 'email', and 'office number' properties", () => {
            const manager = new Manager("Tyler", "1", "tyler.a.starling@gmail.com", "101");

            expect("name" in manager).toEqual(true);
            expect("id" in manager).toEqual(true);
            expect("email" in manager).toEqual(true);
            expect("officeNumber" in manager).toEqual(true)
        });
    });

    describe("getGithub", () => {
        it("should return 'office number' input property", () => {
            const manager = new Manager("Tyler", "1", "tyler.a.starling@gmail.com", "101");

            expect(manager.getOfficeNumber()).toEqual("101");
        });
    });

    describe("getRole", () => {
        it("should return 'Manager' role", () => {
            const manager = new Manager("Tyler", "1", "tyler.a.starling@gmail.com", "101");

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});