const http = require('http');
const fs = require('fs');
const args = require('process').argv;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      reject(new Error('Cannot load the database'));
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.trim().split('\n');
      const removeHeading = lines.slice(1);

      const studentNo = removeHeading.length;
      const records = {};
      const results = [];

      removeHeading.forEach((val) => {
        const recordArray = val.split(',');
        const field = recordArray[recordArray.length - 1];

        if (!Object.keys(records).includes(field)) {
          records[field] = [recordArray[0]];
        } else {
          records[field].push(recordArray[0]);
        }
      });

      results.push(`Number of students: ${studentNo}`);
      Object.keys(records).forEach((key) => {
        const value = records[key];
        results.push(`Number of students in ${key}: ${
          value.length}. List: ${value.join(', ')}`);
      });
      resolve(results);
    });
  });
}

const app = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  const { url } = request;
  if (url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(args[2])
      .then((result) => {
        response.write(result.join('\n'));
        response.end();
      })
      .catch((error) => {
        response.write(error.toString());
        response.end();
      });
  }
}).listen(1245);

module.exports = app;
