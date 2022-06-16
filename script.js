const mainList = document.getElementById('dragable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Afolabi Opakunle',
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
  'Tunde Disu'
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople].forEach((person, index) => {
    let LI = document.createElement('li');
    LI.setAttribute('data-index', index);
    LI.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="dragable" draggable="true">
    <p class="person-name">${person}</p>
    <i class="fas fa-grip-lines"></i>
    </div>
    `;

    mainList.appendChild(LI);
  });
}
