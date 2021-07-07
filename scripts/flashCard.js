
const card = document.querySelector('.card-inner');

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

const cardDict = {
    'HTML': 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
    'CSS': 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    'JavaScript': 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
}

var clicks = 0;

function nextCard() {
    let question = document.getElementById('question');
    let answer = document.getElementById('answer');
    clicks ++;
    let keys = Object.keys(cardDict);
    let values = Object.values(cardDict);
    let setNewAnswer = () => {
        answer.innerHTML = values[clicks];
    }
    question.innerHTML = keys[clicks];
    setTimeout(setNewAnswer, 1000);
}