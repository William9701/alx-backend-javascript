// Define the printTeacher function
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
// Assign the printTeacher function to a variable that has the printTeacherFunction type
var myPrintTeacher = printTeacher;
// Define the class
var StudentClassImpl = /** @class */ (function () {
    function StudentClassImpl(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClassImpl.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClassImpl.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClassImpl;
}());
// Assign the class to a variable that has the StudentConstructor type
var StudentClass = StudentClassImpl;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    var numericSalary;
    if (typeof salary === 'string') {
        numericSalary = parseFloat(salary);
    }
    else {
        numericSalary = salary;
    }
    if (numericSalary < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
