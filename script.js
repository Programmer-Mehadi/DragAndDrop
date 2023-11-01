const listData = [1, 2, 3, 4, 5];
const ulContainer = document.querySelector('ul');
const liList = document.querySelectorAll('li');
let dragId = '';
let dropId = '';

function doDrag() {
  let dragIndex = listData.indexOf(parseInt(dragId));
  let dropIndex = listData.indexOf(parseInt(dropId));
  if (dragIndex === 0) {
    for (let i = 0; i < dropIndex; i++) {
      listData[i] = listData[i + 1];
    }
    listData[dropIndex] = Number(dragId);
  }
  else if (dragIndex < dropIndex) {
    for (let i = dragIndex; i < dropIndex; i++) {
      listData[i] = listData[i + 1];
    }
    listData[dropIndex] = Number(dragId);
  }
  else if (dragIndex > dropIndex) {
    for (let i = dragIndex; i > dropIndex; i--) {
      listData[i] = listData[i - 1];
    }
    listData[dropIndex] = Number(dragId);
  }
  appendLi();
  dragId = '';
  dropId = '';
}

function appendLi() {
  ulContainer.innerHTML = '';
  listData.forEach((data) => {
    ulContainer.innerHTML += `<li class="li_${data}" id="${data}" draggable="true" ondragstart="onDragStart(event)" ondrop="onDrop(event)" ondragover="onDragLeave(event)">${data}</li>`
  })
}


function onDrop(e) {
  e.preventDefault();
  dropId = e.target.getAttribute('id');
  if (dragId === dropId) {
    dragId = '';
    dropId = '';
  }
  else {
    doDrag();
  }
}

function onDragLeave(e) {
  e.preventDefault();
}

function onDragStart(e) {
  if (dragId === "") {
    dragId = e.target.getAttribute('id')
  }
}

appendLi();