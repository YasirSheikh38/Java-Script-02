// Program no 4

function addListItem(text) {
    let newListItem = document.createElement("li");
    newListItem.textContent = text;
    let unorderedList = document.querySelector("ul");
    unorderedList.appendChild(newListItem);
  }
  addListItem('New item');