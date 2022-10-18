class MyStack {
    constructor() {
      this.item = [];
    }
    push(element) {
      this.item.push(element);
    }
    pop() {
      if (this.item.length === 0) {
        console.log("Stack is empty");
      } else {
        console.log(this.item.pop());
      }
    }
    peek() {
      if (this.item.length !== 0) {
        console.log(this.item[this.item.length - 1]);
      } else {
        console.log("Stack is empty");
      }
    }
    isEmpty() {
      console.log(this.item.length == 0);
    }
    isFull() {
      console.log(this.item[this.item.length - 1]);
    }
    printStack() {
      var str = "";
      for (var i = 0; i < this.item.length; i++) str += this.item[i] + " ";
      console.log(str);
    }
  }
  var newStack = new MyStack();
  newStack.push(10);
  newStack.push(20);
  newStack.push(30);
  newStack.push(40);
  newStack.push(50);
  newStack.printStack();
  newStack.isEmpty();
  newStack.pop();
  newStack.pop();
  newStack.pop();
  newStack.pop();
  newStack.peek();
  newStack.peek();
  