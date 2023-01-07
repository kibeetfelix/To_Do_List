const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input")


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList()
});

function toDoList() {
    let newTask = inputEl.value;
    const liEl = document.createElement("li");
    liEl.innerText = newTask;
}