console.log("Siema , to Strona Internetowa z Opisem mnie");

const button = document.querySelector(".js-Theme");

button.addEventListener("click", () => {
 document.body.classList.toggle("dark");
});