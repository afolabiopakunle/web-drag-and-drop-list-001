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
];

createList();

function createList() {
  [...richestPeople].forEach((person, index) => {
    let LI = document.createElement('li');
    LI.setAttribute('data-index', index);
    LI.innerHTML = `
    <span class="number">${index + 1}</span>
    <div>${person}</div>
    `;

    mainList.appendChild(LI);
  });
}
