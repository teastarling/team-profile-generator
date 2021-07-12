const Employee = require ("../lib/Employee");

describe ("Employee", () => {
    
    describe("Initialization", () => {
        it("should return an object containing 'name,' 'id,' and 'email' properties", () => {
            const employee = new Employee("Tyler", "1", "tyler.a.starling@gmail.com");

            expect("name" in employee).toEqual(true);
            expect("id" in employee).toEqual(true);
            expect("email" in employee).toEqual(true);
        });
    });

    describe("getName", () => {
        it("should return 'name' input property", () => {
            const employee = new Employee("Tyler", "1", "tyler.a.starling@gmail.com")

            expect(employee.getName()).toEqual("Tyler");
        });
    });

    describe("getId", () => {
        it("should return 'id' input property", () => {
            const employee = new Employee("Tyler", "1", "tyler.a.starling@gmail.com")

            expect(employee.getId()).toEqual("1");
        });
    });

    describe("getEmail", () => {
        it("should return 'email' input property", () => {
            const employee = new Employee("Tyler", "1", "tyler.a.starling@gmail.com")

            expect(employee.getEmail()).toEqual("tyler.a.starling@gmail.com");
        });
    });

    describe("getRole", () => {
        it("should return 'Employee' role", () => {
            const employee = new Employee("Tyler", "1", "tyler.a.starling@gmail.com")

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});