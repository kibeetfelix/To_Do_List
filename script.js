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

    // clear inputs after enter button
    inputEl.value = ""

    // adding check button to new entry
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fa fa-check-square">`;
    liEl.appendChild(checkBtnEl);

    // adding trash button to new entry
    const trashBtnEl = document.createElement("div")
    trashBtnEl.innerHTML = `<i class="fa fa-trash">`;
    liEl.appendChild(trashBtnEl);

    // addEventListener to check button
    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked")
    });


}