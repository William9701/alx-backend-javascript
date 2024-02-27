const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Remove empty lines
      const lines = data.split('\n').filter(line => line);

      // Remove the header line
      lines.shift();

      const students = lines.map(line => ({
        firstname: line.split(',')[0],
        field: line.split(',')[3],
      }));

      let output = `Number of students: ${students.length}\n`;
      const fields = [...new Set(students.map(student => student.field))];

      fields.forEach((field) => {
        const studentsInField = students.filter(student => student.field === field);
        output += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map(s => s.firstname).join(', ')}\n`;
      });

      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Page not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
