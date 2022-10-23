console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
      setTimeout(() => resolve('ticket'), 1000);
    });
   const getPopcorn  = new Promise((resolve, reject)=> resolve(`popcorn`));
   const addButter = new Promise((resolve, reject)=>resolve(`butter`));
   const getColdDrinks = new Promise((resolve, reject) =>resolve(`coldrinks`));


   let ticket = await promiseWifeBringingTicks;
 console.log(`wife: i have the ${ticket}`);
 console.log('husband: we should go in');
 console.log('wife : no i am hungry');

 let popcorn = await getPopcorn;

 console.log(`husband: i got some ${popcorn}`);
 console.log('husband: we should go in');
 console.log('wife:i need butter on my popcorn');

 let butter = await addButter;

 console.log(`husband:i got some ${butter} on popcorn`);
 console.log(`husband:we should go in`);
 console.log(`wife : one lastthing, i need colddrink`);

 let colddrink = await getColdDrinks;

 console.log(`husband: i got ${colddrink} darling`);
 console.log(`husband: anything else darling`);
 console.log(`wife :lets go we are getting late`);
 console.log(`husband: thank you for reminder, my sweet heart`);
  return ticket;
};
preMovie().then((m)=>console.log(`person3:shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');