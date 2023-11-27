const enter = document.querySelector('#enter');
const list = document.querySelector('#list');
const input = document.querySelector('#new-todo')
const form = document.querySelector('#todo-form')
const date = document.querySelector('#date');
// const deleteButton = document.querySelector('#' + Button.id)

// Show Date on Button Click
date.addEventListener("click", (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const addDate = document.getElementById("show-date");
    addDate.innerText = currentDate;

})

//

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newListItem = document.createElement("li");
    newListItem.id = "Entry_" + list.childElementCount;

    const button = document.createElement("button");
    button.id = "Button_" + list.childElementCount;

    const checkbox = document.createElement('input');
    checkbox.type="checkbox";
    checkbox.id = "Checkbox_" + list.childElementCount;

    //button remove event listener
    button.addEventListener("click", (event) => {
        list.removeChild(event)
    });

    console.log(newListItem);

    newListItem.innerText = (input.value) + " ⎸";

    button.innerText = "Delete";
    checkbox.innerText ="Complete";

    list.appendChild(newListItem);
    newListItem.appendChild(button);
    newListItem.appendChild(checkbox);

    console.log("button clicked");
    console.log(input);

    input.value = "";

})


list.addEventListener("click", (event) => {
    event.preventDefault();
    // MINE AND RASHAD's
    const buttonClicked = event.target.id; // gets id of delete button user clicked
    console.log(buttonClicked);
    const button = document.getElementById(buttonClicked); // gets id of indivdual button clicked
    const listEntry = button.parentElement; // gets entry associted with delete button buy previousSibling
    console.log(listEntry); // remove entry
    listEntry.remove();
    button.remove(); // remove button

    console.log("clicked", buttonClicked);

//     // PROPA
//     list.removeChild(event)

})

