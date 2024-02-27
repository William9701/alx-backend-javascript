const fs = require('fs').promises;

module.exports = function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Remove empty lines
      const lines = data.split('\n').filter((line) => line);

      // Remove the header line
      lines.shift();

      const students = lines.map((line) => ({
        firstname: line.split(',')[0],
        field: line.split(',')[3],
      }));

      console.log(`Number of students: ${students.length}`);

      const fields = [...new Set(students.map((student) => student.field))];

      fields.forEach((field) => {
        const studentsInField = students.filter((student) => student.field === field);
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((s) => s.firstname).join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};
