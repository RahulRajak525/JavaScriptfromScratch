class Queue {
    constructor(){
        this.queue = [];
    }
enqueue(element){
      this.queue.push(element);
}


dequeue(){
    if(this.queue.length===0){
        return null;
   }
   else{
    return this.queue.shift();
   }
}
Isempty(){
    return this.queue.length===0;
}

front(){
    if(this.queue.length===0){
        return null;
    }
    else{
    return this.queue[0];
    }
}
rear(){
    if(this.queue.length===0){
        return null;
    }
    else{
    return this.queue[this.queue.length-1];
    }
}
print(){
    console.log(this.queue);
}

}

const newQueue = new Queue();
newQueue.enqueue(10);
newQueue.enqueue(8);
newQueue.enqueue(56);
newQueue.enqueue(78);
newQueue.print();
console.log(newQueue.front());
console.log(newQueue.Isempty());
console.log(newQueue.rear());
newQueue.dequeue();
newQueue.dequeue();
newQueue.print();
