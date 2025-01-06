/*
 Create a `Student` class with three properties: `name`, `age`, and `grade`. Instead of declaring these properties in the class body, assigning them in the constructor, and then giving them values, use shorthand initialization.
*/


class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

export {};