export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.keys(report);

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const department = departments[currentDepartmentIndex];
        const employees = report[department];
        const employee = employees[currentEmployeeIndex];

        if (currentEmployeeIndex < employees.length - 1) {
          currentEmployeeIndex += 1;
        } else {
          currentEmployeeIndex = 0;
          currentDepartmentIndex += 1;
        }

        return { value: { department, employee }, done: false };
      }
      return { done: true };
    },
  };
}

