interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "william",
	lastName: "obi",
	age: 28,
	location: 'Asaba'
}

const student2: Student = {
	firstName: "kelvin",
	lastName: "klien",
	age: 28,
	location: 'germany'
}
let studentslist: Student[] = [student1, student2]

// Create a table
let table = document.createElement('table');

// Create table header
let header = table.createTHead();
let headerRow = header.insertRow(0);
let headerCell1 = headerRow.insertCell(0);
let headerCell2 = headerRow.insertCell(1);
headerCell1.innerHTML = "<b>First Name</b>";
headerCell2.innerHTML = "<b>Location</b>";

// Append rows to the table for each student
for (let student of studentslist) {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
}

// Append the table to the body of the document
document.body.appendChild(table);