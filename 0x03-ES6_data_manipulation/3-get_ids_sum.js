export default function getStudentIdsSum(students) {
  // Use reduce to calculate the sum of student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}
