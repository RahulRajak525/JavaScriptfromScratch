

async function addTOLocalstorage(event) {
  event.preventDefault();
  const Amount = event.target.amount.value;
  const Description = event.target.description.value;
  const select = document.getElementById("Catry");
  const Category = select.options[select.selectedIndex].value;
  const exp = {
    Amount,
    Category,
    Description,
  };
  const post = await axios.post(
    "https://crudcrud.com/api/ecf7ff91cda8444e83da2598d196471d/expenseTrack",
    exp
  );
  if (post) {
    showNewuserToScreen(post.data);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  const win = await axios.get(
    "https://crudcrud.com/api/ecf7ff91cda8444e83da2598d196471d/expenseTrack"
  );
  if (win) {
    for (var i = 0; i < win.data.length; i++) {
      showNewuserToScreen(win.data[i]);
    }
  }
});

function showNewuserToScreen(user) {
  document.getElementById("Catry").value = "";
  document.getElementById("amt").value = "";
  document.getElementById("desc").value = "";

  const parent = document.querySelector("#adExp");
  const childElement = `<tr id='${user._id}'> <td> &#x20b9 ${user.Amount}</td> <td> ${user.Category}</td> <td>${user.Description}</td>   <td><button id = "del" class="material-icons" onclick = "deletexp('${user._id}')">delete</button></td> <td><button id="edi" class="material-icons" onclick ="editExp('${user.Description}','${user.Amount}','${user.Category}','${user._id}')" > edit </button></td> </tr> `;
  parent.innerHTML = parent.innerHTML + childElement;
}
function editExp(Description, Amount, Category, userId) {
  document.getElementById("desc").value = Description;
  document.getElementById("amt").value = Amount;
  document.getElementById("Catry").value = Category;
  deletexp(userId);
}

async function deletexp(userId) {
  const del = await axios.delete(
    `https://crudcrud.com/api/ecf7ff91cda8444e83da2598d196471d/expenseTrack/${userId}`
  );
  if (del) {
    removeExpences(userId);
  } else {
    console.log(error);
  }
}

function removeExpences(userId) {
  const parentNode = document.getElementById("adExp");
  const childToDeleted = document.getElementById(userId);
  if (childToDeleted) {
    parentNode.removeChild(childToDeleted);
  } else {
    console.log(error);
  }
}
