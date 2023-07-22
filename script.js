const inBox = document.getElementById("ip-box");
const listConBox = document.getElementById("list-container");
addTodo = () => {
  if (inBox.value == "") {
    alert("Please write your todo ");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inBox.value;
    listConBox.appendChild(li);
    let spanval = document.createElement("span");
    spanval.innerHTML = "\u00d7";
    li.appendChild(spanval);
    inBox.value = "";
    saveData();
  }
};

listConBox.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

saveData = () => {
  localStorage.setItem("data", listConBox.innerHTML);
};

loadData = () => {
  listConBox.innerHTML = localStorage.getItem("data");
};
loadData();
