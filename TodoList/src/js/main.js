'use strict';

// const todoAppList = document.getElementsByClassName('todo-app')[0];
// const todoAppList = document.querySelectorAll('.todo-app')[0];
const todoAddForm = document.querySelector('.todo-add-form');
const todoAddInput = todoAddForm.querySelector('.todo-add-input');
const todoList = document.querySelector('.todo-list');

const createTodoRow = function(options = {}) {
  const value = options.value || '';

  const divElt = document.createElement('div');

  const checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  divElt.appendChild(checkboxElt);

  const inputElt = document.createElement('input');
  inputElt.value = value;
  divElt.appendChild(inputElt);

  const btnRemoveElt = document.createElement('button');
  btnRemoveElt.innerText = '-';
  divElt.appendChild(btnRemoveElt);

  return divElt;
};

todoAddForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const saisie = todoAddInput.value;
  const divElt = createTodoRow({value: saisie});

  if (todoList.childElementCount) {
    todoList.insertBefore(divElt, todoList.firstElementChild);
  } else {
    todoList.appendChild(divElt);
  }
});

/*
1 - Au clic du bouton moins, supprimer la ligne (divElt)
Tips : 
- Pour remonter dans l'arbre : btn.parentNode
- Pour supprimer un noeud en partant de son parent :
unEltParent.removeChild(unEltEnfant)

2 - Au clic de la checkbox générale, tout cocher/décocher
- utiliser querySelectorAll (qui retourne un NodeList)
- on peut boucler sur les NodeList avec for (;;) ou for .. of
- unEltCheckbox.checked = true (pour cocher)
*/