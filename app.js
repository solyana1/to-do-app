function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    // create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<span>Delete</span>';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the checkbox to the li
    newLi.appendChild(deleteBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    // listen for deleteBtn to be clicked, remove the item
    deleteBtn.addEventListener('click', function() {
      newLi.parentNode.removeChild(newLi);
    })

    console.log(title);
  });

};

window.onload = function() {
  onReady();
};
