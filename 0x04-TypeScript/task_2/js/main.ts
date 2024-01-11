interface DirectorInterface {
    workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home'
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break'
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks'
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home'
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break'
	}
	workTeacherTasks(): string {
		return 'Getting to work'
	}
}

function createEmployee(salary: number | string): Director | Teacher {
    let numericSalary: number;
    if (typeof salary === 'string') {
        numericSalary = parseFloat(salary);
    } else {
        numericSalary = salary;
    }
    if (numericSalary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
    throw new Error('Invalid employee type');
}


let Subjects: string = 'Math' || 'History'

function teachClass(todayClass: string){
	if (todayClass === 'Math'){
		return 'Teaching Math'
	} else if(todayClass === 'History'){
		return 'Teaching History'
	}
	throw new Error('invalid todayClass')
}

