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

})

//

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newListItem = document.createElement("li");
    newListItem.id = "Entry_" + list.childElementCount;

    const button = document.createElement("button");
    button.id = "Button_" + list.childElementCount;

    console.log(newListItem);

    newListItem.innerText = input.value;

    button.innerText = "Delete!"

    list.appendChild(newListItem);
    list.appendChild(button);
    console.log("button clicked");
    console.log(input);
})


list.addEventListener("click", (event) => {

    event.preventDefault();

    const buttonClicked = event.target.id; // gets id of delete button user clicked

    const button = document.getElementById(buttonClicked); // gets id of indivdual button clicked

    const listEntry = button.previousSibling; // gets entry associted with delete button buy previousSibling


    console.log(listEntry); // remove entry
    listEntry.remove();
    button.remove(); // remove button

    console.log("clicked", buttonClicked);

})

