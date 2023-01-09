const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input")

const ulEl = document.querySelector(".list")

let list = JSON.parse(localStorage.getItem("list"));
console.log(list);

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

    // addEventListener to trash button
    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

// storing inputs added
function updateLocalStorage() {
    const liEls = document.querySelectorAll("li")
    list = []
    liEls.forEach(liEl => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })

    // converting list to string using JSON
    localStorage.setItem("list", JSON.stringify(list))
}