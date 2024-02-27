const express = require('express');
const fs = require('fs').promises;

function countStudents(path) {
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

      let output = `Number of students: ${students.length}\n`;
      const fields = [...new Set(students.map((student) => student.field))];

      fields.forEach((field) => {
        const studentsInField = students.filter((student) => student.field === field);
        output += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((s) => s.firstname).join(', ')}\n`;
      });

      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((output) => {
      res.end(output);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
