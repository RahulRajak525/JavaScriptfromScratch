class Student {
  static i = 0;
  constructor(name, age, phoneNumber, boardMarks) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.boardMarks = boardMarks;
  }
  raedyForPlacement(minAge) {
    return (minMarks) => {
      if (this.age > minAge && this.boardMarks > minMarks) {
        console.log(`${this.name} is eligible for placement `);
      } else {
        console.log(
          `${this.name} is not eligible for placement because he is ${this.age} years old `
        );
      }
    };
  }
}

let student1 = new Student("Ram", 24, 99564512, 56);
student1.raedyForPlacement(20)(40);

let student2 = new Student("Shyam", 40, 99564512, 36);
student2.raedyForPlacement(20)(40);

let student3 = new Student("Gopal", 28, 99564512, 83);
student3.raedyForPlacement(20)(40);

let student4 = new Student("aman", 35, 99564512, 39);
student4.raedyForPlacement(20)(40);

let student5 = new Student("Raghav", 25, 99564512, 86);
student5.raedyForPlacement(20)(40);
