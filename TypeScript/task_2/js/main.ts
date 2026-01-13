interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => "Working from home";
  getCoffeeBreak = () => "Getting a coffee break";
  workDirectorTasks = () => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
  workFromHome = () => "Cannot work from home";
  getCoffeeBreak = () => "Cannot have a break";
  workTeacherTasks = () => "Getting to work";
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

console.log("--- Task 5 ---");
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('00'));

console.log("--- Task 6 ---");
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log("--- Task 7 ---");
console.log(teachClass('Math'));
console.log(teachClass('History'));
