document.addEventListener("DOMContentLoaded", () => {
  const allQuestions = document.querySelectorAll('.ques');
  allQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.ans');
      answer.classList.toggle('active');
    });
  });
});

