const poll = {
    answers: new Array(4).fill(0),
};

const form = document.querySelector('form');
const progressBars = document.querySelectorAll('progress');
const inputs = document.querySelectorAll('input');
const h3 = document.querySelector('h3');

form.addEventListener('submit', evt => {
    evt.preventDefault();
    for (const [i, input] of Object.entries(inputs)) {
        if (input.checked) poll.answers[i]++;
    }
    let maxim = Math.max(...poll.answers);
    let sum = poll.answers.reduce((total, el) => total + el);
    h3.innerText = `Total votes: ${sum}`;
    for (const [i, bar] of Object.entries(progressBars)) {
        bar.setAttribute('max', maxim);
        bar.value = poll.answers[i];
    }
});
