class Student{
    static i = 0;
    constructor(name , age , phoneNumber, boardMarks){
        this.name= name;
        this.age=age;
        this.phoneNumber= phoneNumber;
        this.boardMarks = boardMarks;
    }

   eligible(){
    if(this.boardMarks>40){
        console.log('Eligible');
    }
    else {
        console.log('Not Eligible');
    }
   } 

   noOfStudent(){
    Student.i = Student.i +1;
    console.log(`Total no of students is ${Student.i}`)
   }
}

let student1 = new Student('Ram', '24', '99564512',56);
student1.eligible();
student1.noOfStudent();
let student2 = new Student('Shyam', '40', '99564512',36);
student2.eligible();
student2.noOfStudent();
let student3 = new Student('Gopal', '28', '99564512',83);
student3.eligible();
student3.noOfStudent();
let student4 = new Student('aman', '35', '99564512',39);
student4.eligible();
student4.noOfStudent();
let student5 = new Student('Raghav', '25', '99564512',86);
student5.eligible();
student5.noOfStudent();