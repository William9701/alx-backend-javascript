const utils = require('../utils'); // Assuming utils.js is in the same directory

class StudentsController {
    static async getAllStudents(request, response) {
        const filename = '../database.csv';
 
		console.log(filename)
        try {
            const data = await utils.readDatabase(filename);
            console.log(data)
			response.status(200).send(`This is the list of our students\n${data}`);
        } catch (error) {
            response.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(request, response) {
        const { major } = request.params;
		const filename = '../database.csv';
		// Retrieve the filename at execution
        if (!['CS', 'SWE'].includes(major)) {
            return response.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const data = await utils.readDatabase(filename);
            const studentsInMajor = data.filter(student => student.major === major);
            response.status(200).send(`List: ${studentsInMajor.map(student => student.firstName).join(', ')}`);
        } catch (error) {
            response.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;