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

const listItemsArray = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople]
  .map(a => ({value: a, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .forEach((person, index) => {
    let LI = document.createElement('li');
    LI.setAttribute('data-index', index);
    LI.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="dragable" draggable="true">
    <p class="person-name">${person.value}</p>
    <i class="fas fa-grip-lines"></i>
    </div>
    `;

    listItemsArray.push(LI);
    mainList.appendChild(LI)
  });
}
