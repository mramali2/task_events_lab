const enter = document.querySelector('#enter');
const list = document.querySelector('#list');
const input = document.querySelector('#new-todo')
const form = document.querySelector('#todo-form')

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const newListItem = document.createElement("li");
    
    newListItem.innerText = input.value;

    list.appendChild(newListItem);
    console.log("button clicked")
    console.log(input);
})

