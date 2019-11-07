const buttons = [
  { size: 50, keyCode: 192, caps: true, click: true },
  { size: 50, keyCode: 49, click: true },
  { size: 50, keyCode: 50, click: true },
  { size: 50, keyCode: 51, click: true },
  { size: 50, keyCode: 52, click: true },
  { size: 50, keyCode: 53, click: true },
  { size: 50, keyCode: 54, click: true },
  { size: 50, keyCode: 55, click: true },
  { size: 50, keyCode: 56, click: true },
  { size: 50, keyCode: 57, click: true },
  { size: 50, keyCode: 48, click: true },
  { size: 50, keyCode: 189, click: true },
  { size: 50, keyCode: 187, click: true },
  { size: 120, keyCode: 8, color: 'dark', click: false },
  { size: 65, keyCode: 9, color: 'dark', click: false },
  { size: 50, keyCode: 81, caps: true, click: true },
  { size: 50, keyCode: 87, caps: true, click: true },
  { size: 50, keyCode: 69, caps: true, click: true },
  { size: 50, keyCode: 82, caps: true, click: true },
  { size: 50, keyCode: 84, caps: true, click: true },
  { size: 50, keyCode: 89, caps: true, click: true },
  { size: 50, keyCode: 85, caps: true, click: true },
  { size: 50, keyCode: 73, caps: true, click: true },
  { size: 50, keyCode: 79, caps: true, click: true },
  { size: 50, keyCode: 80, caps: true, click: true },
  { size: 50, keyCode: 219, caps: true, click: true },
  { size: 50, keyCode: 221, caps: true, click: true },
  { size: 50, keyCode: 220, click: true },
  { size: 50, keyCode: 46, color: 'dark', click: false },
  { size: 120, keyCode: 20, color: 'dark', click: false },
  { size: 50, keyCode: 65, caps: true, click: true },
  { size: 50, keyCode: 83, caps: true, click: true },
  { size: 50, keyCode: 68, caps: true, click: true },
  { size: 50, keyCode: 70, caps: true, click: true },
  { size: 50, keyCode: 71, caps: true, click: true },
  { size: 50, keyCode: 72, caps: true, click: true },
  { size: 50, keyCode: 74, caps: true, click: true },
  { size: 50, keyCode: 75, caps: true, click: true },
  { size: 50, keyCode: 76, caps: true, click: true },
  { size: 50, keyCode: 186, caps: true, click: true },
  { size: 50, keyCode: 222, caps: true, click: true },
  { size: 105, keyCode: 13, color: 'dark', click: false },
  { size: 120, keyCode: 16, color: 'dark', click: false, location: 1 },
  { size: 50, keyCode: 90, caps: true, click: true },
  { size: 50, keyCode: 88, caps: true, click: true },
  { size: 50, keyCode: 67, caps: true, click: true },
  { size: 50, keyCode: 86, caps: true, click: true },
  { size: 50, keyCode: 66, caps: true, click: true },
  { size: 50, keyCode: 78, caps: true, click: true },
  { size: 50, keyCode: 77, caps: true, click: true },
  { size: 50, keyCode: 188, caps: true, click: true },
  { size: 50, keyCode: 190, caps: true, click: true },
  { size: 50, keyCode: 191, click: true },
  { size: 105, keyCode: 16, color: 'dark', click: false, location: 2 },
  { size: 50, keyCode: 38, color: 'dark', click: false },
  { size: 65, keyCode: 17, color: 'dark', click: false, location: 1 },
  { size: 50, keyCode: 91, color: 'dark', click: false },
  { size: 50, keyCode: 18, color: 'dark', click: false, location: 1 },
  { size: 365, keyCode: 32, click: true },
  { size: 50, keyCode: 18, color: 'dark', click: false, location: 2 },
  { size: 65, keyCode: 17, color: 'dark', click: false, location: 2 },
  { size: 50, keyCode: 37, color: 'dark', click: false },
  { size: 50, keyCode: 40, color: 'dark', click: false },
  { size: 50, keyCode: 39, color: 'dark', click: false }
];

const codes = {
  192: { eng: ['`', '~'], ru: ['ё'] },
  49: { eng: ['1', '!'], ru: ['1', '!'] },
  50: { eng: ['2', '@'], ru: ['2', '@'] },
  51: { eng: ['3', '#'], ru: ['3', '#'] },
  52: { eng: ['4', '$'], ru: ['4', '$'] },
  53: { eng: ['5', '%'], ru: ['5', '%'] },
  54: { eng: ['6', '^'], ru: ['6', '^'] },
  55: { eng: ['7', '&'], ru: ['7', '&'] },
  56: { eng: ['8', '*'], ru: ['8', '*'] },
  57: { eng: ['9', '('], ru: ['9', '('] },
  48: { eng: ['0', ')'], ru: ['0', ')'] },
  189: { eng: ['-', '_'], ru: ['-', '_'] },
  187: { eng: ['=', '+'], ru: ['=', '+'] },
  8: { eng: ['Backspace'], ru: ['Backspace'] },
  9: { eng: ['Tab'], ru: ['Tab'] },
  81: { eng: ['q'], ru: ['й'] },
  87: { eng: ['w'], ru: ['ц'] },
  69: { eng: ['e'], ru: ['у'] },
  82: { eng: ['r'], ru: ['к'] },
  84: { eng: ['t'], ru: ['е'] },
  89: { eng: ['y'], ru: ['н'] },
  85: { eng: ['u'], ru: ['г'] },
  73: { eng: ['i'], ru: ['ш'] },
  79: { eng: ['o'], ru: ['щ'] },
  80: { eng: ['p'], ru: ['з'] },
  219: { eng: ['[', '{'], ru: ['х'] },
  221: { eng: [']', '}'], ru: ['ъ'] },
  220: { eng: ['\\', '|'], ru: ['\\', '|'] },
  46: { eng: ['Del'], ru: ['Del'] },
  20: { eng: ['Caps Lock'], ru: ['Caps Lock'] },
  65: { eng: ['a'], ru: ['ф'] },
  83: { eng: ['s'], ru: ['ы'] },
  68: { eng: ['d'], ru: ['в'] },
  70: { eng: ['f'], ru: ['а'] },
  71: { eng: ['g'], ru: ['п'] },
  72: { eng: ['h'], ru: ['р'] },
  74: { eng: ['j'], ru: ['о'] },
  75: { eng: ['k'], ru: ['л'] },
  76: { eng: ['l'], ru: ['д'] },
  186: { eng: [';', ':'], ru: ['ж'] },
  222: { eng: ["'", '"'], ru: ['э'] },
  13: { eng: ['Enter'], ru: ['Enter'] },
  16: { eng: ['Shift'], ru: ['Shift'] },
  90: { eng: ['z'], ru: ['я'] },
  88: { eng: ['x'], ru: ['ч'] },
  67: { eng: ['c'], ru: ['с'] },
  86: { eng: ['v'], ru: ['м'] },
  66: { eng: ['b'], ru: ['и'] },
  78: { eng: ['n'], ru: ['т'] },
  77: { eng: ['m'], ru: ['ь'] },
  188: { eng: [',', '<'], ru: ['б'] },
  190: { eng: ['.', '>'], ru: ['ю'] },
  191: { eng: ['/', '?'], ru: ['.', ','] },
  38: { eng: ['Up'], ru: ['Up'] },
  17: { eng: ['Ctrl'], ru: ['Ctrl'] },
  91: { eng: ['Win'], ru: ['Win'] },
  18: { eng: ['Alt'], ru: ['Alt'] },
  32: { eng: [' '], ru: [' '] },
  37: { eng: ['Left'], ru: ['Left'] },
  40: { eng: ['Down'], ru: ['Down'] },
  39: { eng: ['Right'], ru: ['Right'] }
};

let lan = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'eng';

let langComb = [];
let shift = 16;
let alt = 18;

const tawrapper = document.createElement('div');
const ta = document.createElement('textarea');
tawrapper.classList.add('tawrapper');
tawrapper.append(ta);
document.querySelector('body').append(tawrapper);

function clickInit() {
  const btns = document.querySelectorAll('.btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.click === 'true') {
        ta.value += codes[btn.dataset.kk][lan][0];
        ta.focus();
      }
      btn.classList.add('pushed');
      setTimeout(() => {
        btn.classList.remove('pushed');
      }, 400);
    });
  });
}

function bsinit() {
  document.querySelector('[data-kk="8"]').addEventListener('click', () => {
    ta.value = ta.value.substring(0, ta.value.length - 1);
  });
}

function initKb(lang) {
  if (document.querySelector('.keyboard')) {
    document.querySelector('.keyboard').remove();
  }
  const kb = document.createElement('div');
  kb.classList.add('keyboard');
  document.querySelector('body').append(kb);
  buttons.forEach(btn => {
    const node = document.createElement('div');
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
    if (btn.location) {
      node.dataset.loc = btn.location;
    }
    node.dataset.kk = btn.keyCode;
    node.dataset.click = btn.click;

    if (codes[btn.keyCode][lang][1]) {
      node.innerHTML = `<span class="main-symbol">${
        codes[btn.keyCode][lang][0]
      }</span><span class="add-symbol">${codes[btn.keyCode][lang][1]}</span>`;
    } else {
      node.innerHTML = `<span class="main-symbol">${
        codes[btn.keyCode][lang][0]
      }</span>`;
    }
    kb.append(node);
  });
  clickInit();
  bsinit();
}

initKb(lan);

document.addEventListener('keydown', e => {
  if (e.keyCode === 8) {
    ta.value = ta.value.substring(0, ta.value.length - 1);
  }
  if (e.keyCode === shift || e.keyCode === alt) {
    langComb.push(e.keyCode);
  }
  if (langComb.indexOf(shift) >= 0 && langComb.indexOf(alt) >= 0) {
    lan = lan === 'ru' ? 'eng' : 'ru';
    initKb(lan);
    localStorage.setItem('lang', lan);
    shift = 999;
    alt = 999;
    setTimeout(() => {
      shift = 16;
      alt = 18;
    }, 100);
  }
  e.preventDefault();
  e.stopPropagation();
  if (document.querySelectorAll(`[data-kk="${e.keyCode}"]`).length) {
    const node = document.querySelectorAll(`[data-kk="${e.keyCode}"]`);
    if (node[0].dataset.loc) {
      if (e.location === 1) {
        node[0].classList.add('pressed');
        node[0].classList.add('pushed');
      } else {
        node[1].classList.add('pressed');
        node[1].classList.add('pushed');
      }
    } else {
      node[0].classList.add('pressed');
      node[0].classList.add('pushed');
    }
  }
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 16 || e.keyCode === 18) {
    const arr = langComb.filter(el => el !== e.keyCode);
    langComb = arr;
  }

  if (document.querySelectorAll(`[data-kk="${e.keyCode}"]`).length) {
    const node = document.querySelectorAll(`[data-kk="${e.keyCode}"]`);
    if (node[0].dataset.loc) {
      if (e.location === 1) {
        node[0].classList.remove('pressed');
        node[0].classList.remove('pushed');
      } else {
        node[1].classList.remove('pressed');
        node[1].classList.remove('pushed');
      }
    } else {
      node[0].classList.remove('pressed');
      node[0].classList.remove('pushed');
    }
    if (node[0].dataset.click === 'true') {
      ta.value += codes[e.keyCode][lan][0];
    }
    ta.focus();
  }
});
