document.addEventListener(
  'keydown',
  e => {
    e.stopPropagation();
    e.preventDefault();
  },
  true
);

const buttons = [
  { size: 50, keyCode: 192, engdata: ['`', '~'], caps: true },
  { size: 50, keyCode: 49, engdata: ['1', '!'] },
  { size: 50, keyCode: 50, engdata: ['2', '@'] },
  { size: 50, keyCode: 51, engdata: ['3', '#'] },
  { size: 50, keyCode: 52, engdata: ['4', '$'] },
  { size: 50, keyCode: 53, engdata: ['5', '%'] },
  { size: 50, keyCode: 54, engdata: ['6', '^'] },
  { size: 50, keyCode: 55, engdata: ['7', '&'] },
  { size: 50, keyCode: 56, engdata: ['8', '*'] },
  { size: 50, keyCode: 57, engdata: ['9', '('] },
  { size: 50, keyCode: 48, engdata: ['0', ')'] },
  { size: 50, keyCode: 189, engdata: ['-', '_'] },
  { size: 50, keyCode: 187, engdata: ['=', '+'] },
  { size: 120, keyCode: 8, engdata: ['Backspace'], color: 'dark' },
  { size: 65, keyCode: 9, engdata: ['Tab'], color: 'dark' },
  { size: 50, keyCode: 81, engdata: ['q'], caps: true },
  { size: 50, keyCode: 87, engdata: ['w'], caps: true },
  { size: 50, keyCode: 69, engdata: ['e'], caps: true },
  { size: 50, keyCode: 82, engdata: ['r'], caps: true },
  { size: 50, keyCode: 84, engdata: ['t'], caps: true },
  { size: 50, keyCode: 89, engdata: ['y'], caps: true },
  { size: 50, keyCode: 85, engdata: ['u'], caps: true },
  { size: 50, keyCode: 73, engdata: ['i'], caps: true },
  { size: 50, keyCode: 79, engdata: ['o'], caps: true },
  { size: 50, keyCode: 80, engdata: ['p'], caps: true },
  { size: 50, keyCode: 219, engdata: ['[', '{'], caps: true },
  { size: 50, keyCode: 221, engdata: [']', '}'], caps: true },
  { size: 50, keyCode: 220, engdata: ['\\', '|'] },
  { size: 50, keyCode: 46, engdata: ['Del'], color: 'dark' },
  { size: 120, keyCode: 20, engdata: ['Caps Lock'], color: 'dark' },
  { size: 50, keyCode: 65, engdata: ['a'], caps: true },
  { size: 50, keyCode: 83, engdata: ['s'], caps: true },
  { size: 50, keyCode: 68, engdata: ['d'], caps: true },
  { size: 50, keyCode: 70, engdata: ['f'], caps: true },
  { size: 50, keyCode: 71, engdata: ['g'], caps: true },
  { size: 50, keyCode: 72, engdata: ['h'], caps: true },
  { size: 50, keyCode: 74, engdata: ['j'], caps: true },
  { size: 50, keyCode: 75, engdata: ['k'], caps: true },
  { size: 50, keyCode: 76, engdata: ['l'], caps: true },
  { size: 50, keyCode: 186, engdata: [';', ':'], caps: true },
  { size: 50, keyCode: 222, engdata: ["'", '"'], caps: true },
  { size: 105, keyCode: 13, engdata: ['Enter'], color: 'dark' },
  { size: 120, keyCode: 16, engdata: ['Shift'], color: 'dark' },
  { size: 50, keyCode: 90, engdata: ['z'], caps: true },
  { size: 50, keyCode: 88, engdata: ['x'], caps: true },
  { size: 50, keyCode: 67, engdata: ['c'], caps: true },
  { size: 50, keyCode: 86, engdata: ['v'], caps: true },
  { size: 50, keyCode: 66, engdata: ['b'], caps: true },
  { size: 50, keyCode: 78, engdata: ['n'], caps: true },
  { size: 50, keyCode: 77, engdata: ['m'], caps: true },
  { size: 50, keyCode: 188, engdata: [',', '<'], caps: true },
  { size: 50, keyCode: 190, engdata: ['.', '>'], caps: true },
  { size: 50, keyCode: 191, engdata: ['/', '?'] },
  { size: 105, keyCode: 16, engdata: ['Shift'], color: 'dark' },
  { size: 50, keyCode: 38, engdata: ['Up'], color: 'dark' },
  { size: 65, keyCode: 17, engdata: ['Ctrl'], color: 'dark' },
  { size: 50, keyCode: 91, engdata: ['Win'], color: 'dark' },
  { size: 50, keyCode: 18, engdata: ['Alt'], color: 'dark' },
  { size: 365, keyCode: 32, engdata: [''] },
  { size: 50, keyCode: 18, engdata: ['Alt'], color: 'dark' },
  { size: 65, keyCode: 17, engdata: ['Ctrl'], color: 'dark' },
  { size: 50, keyCode: 37, engdata: ['Left'], color: 'dark' },
  { size: 50, keyCode: 40, engdata: ['Down'], color: 'dark' },
  { size: 50, keyCode: 39, engdata: ['Right'], color: 'dark' }
];

const kb = document.querySelector('.keyboard');
buttons.forEach(btn => {
  let node = document.createElement('div');
  node.classList.add('btn');
  if (btn.size === 120) {
    node.classList.add('btn_big');
  } else if (btn.size === 65) {
    node.classList.add('btn_small');
  } else if (btn.size === 105) {
    node.classList.add('btn_med');
  } else if (btn.size === 365) {
    node.classList.add('btn_space');
  }
  if (btn.color === 'dark') {
    node.classList.add('btn_dark');
  }
  document.addEventListener('keyup', e => {
    e.preventDefault();
    console.log(e.keyCode);
    if (btn.keyCode === e.keyCode) {
      node.classList.add('pressed');
      setTimeout(() => {
        node.classList.remove('pressed');
      }, 200);
    }
  });
  if (btn.engdata[1]) {
    node.innerHTML = `<span class="main-symbol">${
      btn.engdata[0]
    }</span><span class="add-symbol">${btn.engdata[1]}</span>`;
  } else {
    node.innerHTML = `<span class="main-symbol">${btn.engdata[0]}</span>`;
  }
  kb.append(node);
});
