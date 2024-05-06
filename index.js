const board = document.querySelector('#board');
const colors = ['#1D323F', '#2D5D62', '#77A8A3', '#A1C7C7', '#B9D3CD'];
const SQUARES_NUMBER = 480;

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

const setColor = (element) => {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = (element) => {
    element.style.backgroundColor = '#FFFFFF80';
    element.style.boxShadow = `1px 1px 2px #BEBEBED1`;
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}