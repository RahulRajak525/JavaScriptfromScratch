
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
      const error = true;
      if(error){
      posts.push({...post, createdAt: Date.now()});
      resolve();
    }
    else{
      reject('Error: something went wrong');
    }
    }, 1000)
  });
};

function deletePost() {
  return new Promise((resolve, reject) =>{
  setTimeout(()=>{
    if(posts.length>0){
    const lastElement = posts.pop();
    resolve(lastElement);
    }
    else{
       reject('empty array');
    }
  }, 1000);
});
};


getPosts();
createPost({title : 'Post Four', body : 'This is post four'})
.then(()=>{
  getPosts()
  deletePost().then(()=>{
    getPosts()   
    deletePost().then(()=>{
      getPosts()
      deletePost().then(()=>{
        getPosts()
        deletePost().then(()=>{
          getPosts();
          deletePost().then(()=>{})
           .catch(err=>console.log('post is an', err)
           );
        })
      })
    })
  })
})
.catch(err=>console.log(err));

