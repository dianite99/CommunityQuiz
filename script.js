const quizForm = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');
const correctAnswers = ['a', 'b', 'd', 'a', 'b', 'd', 'c', 'c']

quizForm.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value, quizForm.q5.value, quizForm.q6.value, quizForm.q7.value, quizForm.q8.value]
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
        }
    })
    resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
})