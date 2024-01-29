const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const ind = Number(prompt(`${this.question} ${this.options}`));
        !isNaN(ind) && ind < this.answers.length && this.answers[ind]++;
        console.log(this.displayResults());
        console.log(this.displayResults('string'));
    },
    displayResults(type = 'array') {
        if (type.toLowerCase() === 'string') {
            return `Poll results are ${this.answers.join(', ')}`;
        }
        return this.answers;
    },
};

const vote = poll.registerNewAnswer.bind(poll);

const button = document.querySelector('button');

button.addEventListener('click', vote);

const arr1 = [5, 2, 3];
const arr2 = [1, 5, 3, 9, 6, 1];

console.log(poll.displayResults.call({ answers: [5, 2, 3] }, 'string'));
console.log(poll.displayResults.call({ answers: [5, 2, 3] }));
