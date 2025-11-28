document.addEventListener("DOMContentLoaded", () => {
  const allQuestions = document.querySelectorAll('.ques');
  allQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.ans');
      
      // Close other open FAQs
      document.querySelectorAll('.faqitem').forEach(faqitem => {
        if (faqitem !== item && faqitem.classList.contains('active')) {
          faqitem.classList.remove('active');
          faqitem.querySelector('.ans').classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      item.classList.toggle('active');
      answer.classList.toggle('active');
    });
  });
});

