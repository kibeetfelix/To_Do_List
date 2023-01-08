const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input")

const ulEl = document.querySelector(".list")

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList()
});

function toDoList() {
    let newTask = inputEl.value;
    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    ulEl.appendChild(liEl)
    inputEl.value = ""
    const checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = <i class="fa fa-check-square"></i>;
    liEl.appendChild(trashBtnEl);
}