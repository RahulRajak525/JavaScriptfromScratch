
const posts = [
    {title : 'Post One', body : 'This is post one', createdAt: Date.now()},
    {title : 'Post Two', body : 'This is post two', createdAt :Date.now()}
    
];
let intervalId  = 0;
function getPosts(){ 
    clearInterval(intervalId);
   intervalId =  setInterval(() => {
      let output = '';
      posts.forEach((post, index, createdAt)=> {
        output += `<li>  Post ${index+1} created ${Math.floor((Date.now()- post.createdAt)/1000)} seconds ago </li>`;
      });
      document.body.innerHTML = output;
    }, 1000);    
    
}

function creatPost(post, callback){
    setTimeout(() => {
        posts.push({...post, createdAt: Date.now()});
        callback();
    }, 2000);
}
function created4thPost(post, callback){
    setTimeout(() => {
        posts.push({...post, createdAt: Date.now()});
        callback();       
    }, 6000);
}
getPosts();
creatPost({title:'Post Three', body : 'This is post three'}, getPosts);
created4thPost({title:'Post Four', body : 'This is post four'}, getPosts);