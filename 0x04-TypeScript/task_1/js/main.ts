interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number; // Optional attribute
	location: string;
	[key: string]: any; // Allow any additional attribute
  }

interface Directors extends Teacher {
	numberOfReports: number;
}

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Assign the printTeacher function to a variable that has the printTeacherFunction type
let myPrintTeacher: printTeacherFunction = printTeacher;

// Define the interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

// Define the interface for the class
interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Define the class
class StudentClassImpl implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Assign the class to a variable that has the StudentConstructor type
let StudentClass: StudentConstructor = StudentClassImpl;

