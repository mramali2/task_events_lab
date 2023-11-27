const enter = document.querySelector('#enter');
const list = document.querySelector('#list');
const input = document.querySelector('#new-todo')
const form = document.querySelector('#todo-form')

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const newListItem = document.createElement("li");
    const button = document.createElement("button");
    
    newListItem.innerText = input.value;
    button.innerText = "Delete!"

    list.appendChild(newListItem);
    list.appendChild(button);
    console.log("button clicked");
    console.log(input);




})

