export default function getStudentsByLocation(students, city) {
  // Use filter to get students located in the specified city
  return students.filter((student) => student.location === city);
}
