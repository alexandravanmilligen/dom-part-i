function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteButton = document.getElementById("deleteButton");
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    let delButton = document.createElement('button');

    delButton.textContent = "Done";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    newLi.appendChild(delButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    delButton.addEventListener("click", event => {
      const delBtn = event.target;//Now we have the delete button. We're going to makea reference to the list item itself.
      console.log(delBtn);
      const listItem = delBtn.parentNode;
      listItem.style.display = "none";//when the the computer sees the word "none" it knows that word
    });
  });
}

window.onload = function() {
  onReady();
}
