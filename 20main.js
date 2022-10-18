
function addTOLocalstorage(event) {
    event.preventDefault();
    const Amount = event.target.amount.value;
    const Description = event.target.description.value;
    const select = document.getElementById('Catry') 
    const Category = select.options[select.selectedIndex].value;
    const exp = {
      Amount,
      Category,
      Description
      
    };

    localStorage.setItem(exp.Description, JSON.stringify(exp));
    showNewuserToScreen(exp);
  }
 function showNewuserToScreen(user){
    const cat = document.getElementById('Catry');
    const amtn = document.getElementById('amt');
    const descr = document.getElementById('desc');
    
    const parent = document.querySelector('#adExp');
    const childElement = `<tr id='${user.Description}'> <td> &#x20b9 ${user.Amount}</td> <td> ${user.Category}</td> <td>${user.Description}</td>   <td><button onclick = deletexp('${user.Description}') >Delete Expence</button></td> <td><button onclick = editExp('${user.Description}','${user.Amount}','${user.Category}') > Edit Expence </button></td> </tr> `;
    parent.innerHTML = parent.innerHTML + childElement;
    cat.value = "";
    amtn.value = "";
    descr.value = "";
 }
 function editExp(Description,Amount, Category ){
    document.getElementById('desc').value = Description;
    document.getElementById('amt').value = Amount;
    document.getElementById('Catry').value = Category;
    deletexp(Description);

 }

 function deletexp(Description){
    localStorage.removeItem(Description);
    removeExpences(Description);
      
 }

 function removeExpences(Description){
    const parentNode = document.getElementById('adExp');
    const childToDeleted = document.getElementById(Description);
    parentNode.removeChild(childToDeleted);
    if(childToDeleted){
        parentNode.removeChild(childToDeleted);
    }

 }