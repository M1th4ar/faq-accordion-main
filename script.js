/* const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const hidden = document.querySelectorAll(".hidden");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    answer[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    minus[i].classList.toggle("hidden");
    plus[i].classList.toggle("hidden");
    answer[i].classList.toggle("hidden");
  });
} */


const questions = document.querySelectorAll(".answer");

questions.forEach((answer) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});