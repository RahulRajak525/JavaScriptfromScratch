
const posts = [
    {title : 'Post One', body : 'This is post one', createdAt: Date.now()},
    {title : 'Post Two', body : 'This is post two', createdAt :Date.now()},
    {title : 'Post Three', body : 'This is post three', createdAt :Date.now()}
    
];
function getPosts(){ 
   setTimeout(() => {
      let output = '';
      posts.forEach((post, index, createdAt)=> {
        output += `<li>  Post ${index+1} created ${Math.floor((Date.now()- post.createdAt)/1000)} seconds ago </li>`;
      });
      document.getElementById('post').innerHTML = output;
    }, 200);    
    
};
 
function createPost(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      posts.push({...post, createdAt: Date.now()});
      resolve();
    }, 1000)
  })
};

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(console.log('last activity at ',posts[0].createdAt));
        }, 1000);
    })
}

updateLastUserActivityTime().then();
getPosts();
createPost({title : 'Post Four', body : 'This is post four'})
.then(()=>{
    getPosts();
    updateLastUserActivityTime();
})

Promise.all([posts, updateLastUserActivityTime]).then((updateLastUserActivityTime)=>{
    console.log(updateLastUserActivityTime);
})