/*
  ## Task 2
Create two classes: `Employee` and `Manager`.

The `Employee` class should include:
- a `name` property accessible to everyone,
- a `department` property accessible only within the `Employee` class,
- a `salary` property accessible only within the `Employee` class and its subclasses.

The `Manager` class should be a subclass of `Employee`.

Implement a constructor in the `Manager` class that calls the superclass constructor and increases the `salary` by 10,000.

*/
class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getInfo() {
        return `Employee: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
    }
}
// subclass of Employee
class Manager extends Employee {
    constructor(name, department, salary) {
        super(name, department, salary + 10000);
    }
}
// Usage
const employee = new Employee('Piotr Czech', 'IT', 50000);
console.log(employee.getInfo());
//# sourceMappingURL=2.js.map