<div align="center"><img src="https://github.com/vtiquet/holbertonschool-resources/blob/main/image/Holberton-Logo.svg" width=40% height=40%/></div>

# Resources

## Table of Contents :

  - [0. Creating an interface for a student](#subparagraph0)
  - [1. Let's build a Teacher interface](#subparagraph1)
  - [2. Extending the Teacher class](#subparagraph2)
  - [3. Printing teachers](#subparagraph3)
  - [4. Writing a class](#subparagraph4)
  - [5. Advanced types Part 1](#subparagraph5)
  - [6. Creating functions specific to employees](#subparagraph6)
  - [7. String literal types](#subparagraph7)
  - [8. Ambient Namespaces](#subparagraph8)
  - [9. Namespace & Declaration merging](#subparagraph9)
  - [10. Brand convention & Nominal typing](#subparagraph10)

## Resources
### Read or watch:
* [TypeScript in 5 minutes](/rltoken/JBobnOShA2LO-xxTJAyKtw)
* [TypeScript documentation](/rltoken/jWy0GemmKgkvZbvp3BoPrw)
* [TypeScript Dom Manipulation](/rltoken/qr9K-gPTaev_T-iNzRJyVg)
* [TypeScript Object Types](/rltoken/KHeDw9pp8j4jiQLU1tP0EA)
* [TSConfig Reference](/rltoken/NJjLYB-m5iBNZCpzkmdYew)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* Basic types in Typescript
* Interfaces, Classes, and functions
* How to work with the DOM and Typescript
* Generic types
* How to use namespaces
* How to merge declarations
* How to use an ambient Namespace to import an external library
* Basic nominal typing with Typescript

## Requirements
### General
* Allowed editors:vi,vim,emacs,Visual Studio Code
* All your files should end with a new line
* All your files will be transpiled on Ubuntu 18.04
* Your TS scripts will be checked withjest(version 24.9.* )
* AREADME.mdfile, at the root of the folder of the project, is mandatory
* Your code should use thetsextension when possible
* The Typescript compiler should not show any warning or error when compiling your code

## Task
### 0. Creating an interface for a student <a name='subparagraph0'></a>

Copy the following configuration files (provided above) into the <code>task_0</code> directory: <code>package.json</code>, <code>.eslintrc.js</code>, <code>tsconfig.json</code>, <code>webpack.config.js</code>

Write your code in the <code>js/main.ts</code> file:

* <p>Write an interface named <code>Student</code> that accepts the following elements: </p>

  * <code>firstName</code>: string
  * <code>lastName</code>: string
  * <code>age</code>: number
  * <code>location</code>: string
* <p>Create 2 students variables called <code>student1</code> and <code>student2</code> and store them into an array named <code>studentsList</code></p>
* <p>Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table</p>
* <p>Each row should contain the first name of the student and the location</p>

<strong>Requirements:</strong>

* <p>When running, Webpack should return <code>No type errors found</code>.</p>
* <p>Every variable should use TypeScript when possible.</p>

---

### 1. Let's build a Teacher interface <a name='subparagraph1'></a>

Create a directory <code>task_1</code> and copy these configuration files into this folder: <code>package.json</code>, <code>tsconfig.json</code>, <code>webpack.config.js</code>

Write your code in the <code>js/main.ts</code> file:

* <p>Write an interface named <code>Teacher</code> that accepts the following elements: </p>

  * <code>firstName</code>: string - can only be set during initialization of an object of this interface
  * <code>lastName</code>: string - can only be set during initialization of an object of this interface
  * <code>fullTimeEmployee</code>: boolean
  * <code>yearsOfExperience</code>: number - optional
  * <code>location</code>: string
  * <p>Add the possibility to add any attribute to the <code>Teacher</code> object like <code>contract(boolean)</code> without specifying the name of the attribute:</p>

    * Property should be a string
    * Type of this property can be anything

<strong>Requirements:</strong>

* <p>When running, Webpack should return No type errors found.</p>
* <p>Every variable should use TypeScript when possible.</p>

<strong>Example:</strong>

```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```

---

### 2. Extending the Teacher class <a name='subparagraph2'></a>

Write an interface named <code>Directors</code> that extends <code>Teacher</code>. It requires an attribute named <code>numberOfReports(number)</code>

Example:

```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

---

### 3. Printing teachers <a name='subparagraph3'></a>

Write a function <code>printTeacher</code>:

* <p>It accepts two arguments <code>firstName</code> and <code>lastName</code></p>
* <p>It returns the first letter of the firstName and the full lastName</p>
* <p>Example: <code>printTeacher("John", "Doe") -&gt; J. Doe</code></p>

Write an interface for the function named <code>printTeacherFunction</code>.

---

### 4. Writing a class <a name='subparagraph4'></a>

Write a Class named <code>StudentClass</code>:

* <p>The constructor accepts <code>firstName(string)</code> and <code>lastName(string)</code> arguments</p>
* <p>The class has a method named <code>workOnHomework</code> that return the string <code>Currently working</code></p>
* <p>The class has a method named <code>displayName</code>. It returns the firstName of the student</p>
* <p>The constructor of the class should be described through an Interface</p>
* <p>The class should be described through an Interface</p>

Requirements:

* <p>You can reuse the Webpack configuration from the previous exercise to compile the code.</p>
* <p>When running <code>npm run build</code>, no TypeScript error should be displayed.</p>
* <p>Every variable should use TypeScript when possible.</p>

---

### 5. Advanced types Part 1 <a name='subparagraph5'></a>

Create the <code>DirectorInterface</code> interface with the 3 expected methods:

* <p><code>workFromHome()</code> returning a string</p>
* <p><code>getCoffeeBreak()</code> returning a string</p>
* <p><code>workDirectorTasks()</code> returning a string</p>

Create the <code>TeacherInterface</code> interface with the 3 expected methods:

* <p><code>workFromHome()</code> returning a string</p>
* <p><code>getCoffeeBreak()</code> returning a string</p>
* <p><code>workTeacherTasks()</code> returning a string</p>

Create a class <code>Director</code> that will implement <code>DirectorInterface</code>

* <p><code>workFromHome</code> should return the string <code>Working from home</code></p>
* <p><code>getCoffeeBreak</code> should return the string <code>Getting a coffee break</code></p>
* <p><code>workDirectorTasks</code> should return the string <code>Getting to director tasks</code></p>

Create a class <code>Teacher</code> that will implement <code>TeacherInterface</code>

* <p><code>workFromHome</code> should return the string <code>Cannot work from home</code></p>
* <p><code>getCoffeeBreak</code> should return the string <code>Cannot have a break</code></p>
* <p><code>workTeacherTasks</code> should return the string <code>Getting to work</code></p>

Create a function <code>createEmployee</code> with the following requirements:

* <p>It can return either a <code>Director</code> or a <code>Teacher</code> instance</p>
* <p>It accepts 1 arguments:</p>

  * <code>salary</code>(either number or string)
* <p>if <code>salary</code> is a number and less than 500 - It should return a new <code>Teacher</code>. Otherwise it should return a <code>Director</code></p>

Expected result:

```
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
```

---

### 6. Creating functions specific to employees <a name='subparagraph6'></a>

Write a function <code>isDirector</code>:

* <p>it accepts <code>employee</code> as an argument</p>
* <p>it will be used as a type predicate and if the employee is a director</p>

Write a function <code>executeWork</code>:

* <p>it accepts <code>employee</code> as an argument</p>
* <p>if the employee is a Director, it will call <code>workDirectorTasks</code></p>
* <p>if the employee is a Teacher, it will call <code>workTeacherTasks</code></p>

Expected result:

```
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
```

---

### 7. String literal types <a name='subparagraph7'></a>

Write a String literal type named <code>Subjects</code> allowing a variable to have the value <code>Math</code> or <code>History</code> only.

Write a function named <code>teachClass</code>:

* <p>it takes <code>todayClass</code> as an argument</p>
* <p>it will return the string <code>Teaching Math</code> if <code>todayClass</code> is <code>Math</code></p>
* <p>it will return the string <code>Teaching History</code> if <code>todayClass</code> is <code>History</code></p>

Expected result:

```
teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
```

---

### 8. Ambient Namespaces <a name='subparagraph8'></a>

Create a directory called <code>task_3</code> and copy these configuration files into it: <code>package.json</code>, <code>webpack.config.js</code>, <code>tsconfig.json</code>.

The first part of will require that you build an <code>interface</code> and a <code>type</code>. Inside a file named <code>interface.ts</code>:

* <p>Create a type <code>RowID</code> and set it equal to <code>number</code></p>
* <p>Create an interface <code>RowElement</code> that contains these 3 fields:</p>

  * <code>firstName</code>: <code>string</code>
  * <code>lastName</code>: <code>string</code>
  * <code>age?</code>: <code>number</code>

You are building the next part of the application architecture. The goal is to save the entities to a database.

Because of time constraints, you can’t write a connector to the database, and you decided to download a library called <code>crud.js</code>. Copy this file into the <code>task_3/js</code> directory.

Here it is

```
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
```

Write an ambient file within <code>task_3/js</code>, named <code>crud.d.ts</code> containing the type declarations for each crud function. At the top of the file import <code>RowID</code> and <code>RowElement</code> from <code>interface.ts</code>.

In <code>main.ts</code>

* <p>At the top of the file create a <a href="/rltoken/GyTOcj0Pv_F78O7YdlvZNQ" target="_blank" title="triple slash directive">triple slash directive</a> that includes all the dependencies from <code>crud.d.ts</code></p>
* <p>Import the <code>rowID</code> type and <code>rowElement</code> from <code>interface.ts</code></p>
* <p>Import everything from <code>crud.js</code> as <code>CRUD</code></p>

Create an object called <code>row</code> with the type <code>RowElement</code> with the fields set to these values:

* <p><code>firstName</code>: <code>Guillaume</code></p>
* <p><code>lastName</code>: <code>Salva</code></p>

Create a <code>const</code> variable named <code>newRowID</code> with the type <code>RowID</code> and assign the value the <code>insertRow</code>  command.

Next, create a <code>const</code> variable named <code>updatedRow</code> with the type <code>RowElement</code> and update <code>row</code> with an age field set to <code>23</code>

Finally, call the <code>updateRow</code> and <code>deleteRow</code> commands.

Expected result:

```
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
```

Requirements:

* <p>When running <code>npm run build</code>, no TypeScript error should be displayed.</p>
* <p>Every variable should use TypeScript when possible.</p>
* <p>The main file and the ambient file should both import the types defined in the interface file.</p>
* <p>You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.</p>

---

### 9. Namespace & Declaration merging <a name='subparagraph9'></a>

Create a new directory <code>task_4</code>:

In <code>task_4/js/subjects</code>:

* <p>Create a file <code>Teacher.ts</code> and write a <code>Teacher</code> interface in a namespace named <code>Subjects</code>.</p>

  * the interface requires <code>firstName</code> and <code>lastName</code> as string
* <p>Create a file <code>Subject.ts</code> and write a <code>Subject</code> class in the same namespace named <code>Subjects</code>.</p>

  * the class has one attribute <code>teacher</code> that implements the <code>Teacher</code> interface
  * the class has one setter method <code>setTeacher</code> that accepts a <code>teacher</code> in argument (and as setter, set the instance attribute <code>teacher</code> with it)
* <p>Create a file <code>Cpp.ts</code> and make the following modifications in the same namespace.</p>

  * Using declaration merging, add a new optional attribute <code>experienceTeachingC</code> (number) to the <code>Teacher</code> interface
  * Create a class <code>Cpp</code> extending from <code>Subject</code>
  * Write a method named <code>getRequirements</code> that will return a string <code>Here is the list of requirements for Cpp</code>
  * Write a method named <code>getAvailableTeacher</code> that will return a string <code>Available Teacher: &lt;first name of teacher&gt;</code>
  * If the teacher doesn’t have any experience in teaching C, then the method should return a string <code>No available teacher</code>
* <p>Create a file <code>React.ts</code> and write a <code>React Class</code> in the same namespace.</p>

  * Add a new attribute <code>experienceTeachingReact?</code> (number) to the <code>Teacher</code> interface
  * In the class, write a method named <code>getRequirements</code> that will return a string <code>Here is the list of requirements for React</code>
  * Write a method named <code>getAvailableTeacher</code> that will return a string <code>Available Teacher: &lt;first name of teacher&gt;</code>
  * If the teacher doesn’t have any experience in teaching React, then the method should return a string <code>No available teacher</code>
* <p>Create a file <code>Java.ts</code> and write a <code>Java Class</code> in the same namespace.</p>

  * Add a new attribute <code>experienceTeachingJava?</code> (number) to the <code>Teacher</code> interface
  * In the class, write a method named <code>getRequirements</code> that will return a string <code>Here is the list of requirements for Java</code>
  * Write a method named <code>getAvailableTeacher</code> that will return a string <code>Available Teacher: &lt;first name of teacher&gt;</code>
  * If the teacher doesn’t have any experience in teaching Java, then the method should return a string <code>No available teacher</code>

---

### 10. Brand convention & Nominal typing <a name='subparagraph10'></a>

Create a directory <code>task_5</code> and copy these configuration files into the root of <code>task_5</code>: <code>package.json</code>, <code>tsconfig.json</code>, <code>webpack.config.js</code>

Create two interfaces <code>MajorCredits</code> and <code>MinorCredits</code> in <code>task_5/js/main.ts</code>:

* <p>Each interface defines a number named <code>credits</code></p>
* <p>Add a brand property to each interface in order to uniquely identify each of them</p>

Create two functions named <code>sumMajorCredits</code> and <code>sumMinorCredits</code> in <code>task_5/js/main.ts</code>:

* <p>Each function takes two arguments <code>subject1</code> and <code>subject2</code></p>
* <p><code>sumMajorCredits</code> returns <code>MajorCredits</code> value and <code>sumMinorCredits</code> returns <code>MinorCredits</code> value</p>
* <p>Each function sums the credits of the two subjects</p>

---


## Authors
vtiquet - [GitHub Profile](https://github.com/vtiquet)
