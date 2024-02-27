const fs = require('fs').promises;

module.exports = function readDatabase(path) {
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

      const fields = [...new Set(students.map((student) => student.field))];
      const studentsPerField = {};

      fields.forEach((field) => {
        const studentsInField = students.filter((student) => student.field === field);
        studentsPerField[field] = studentsInField.map((s) => s.firstname);
      });

      return studentsPerField;
    })
    .catch((error) => {
      throw new Error(`Cannot load the database: ${error.message}`);
    });
};
