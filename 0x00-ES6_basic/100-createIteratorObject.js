export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.keys(report);

  return {
    next: function () {
      if (currentDepartmentIndex < departments.length) {
        const department = departments[currentDepartmentIndex];
        const employees = report[department];
        const employee = employees[currentEmployeeIndex];

        if (currentEmployeeIndex < employees.length - 1) {
          currentEmployeeIndex++;
        } else {
          currentEmployeeIndex = 0;
          currentDepartmentIndex++;
        }

        return { value: { department, employee }, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

