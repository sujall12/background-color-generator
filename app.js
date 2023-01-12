const canvas = document.getElementById("canvas");
const button = document.getElementById("button");


const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 255);
};

button.addEventListener("click", () => {
  canvas.style.backgroundColor = `rgb(
    ${randomNumberGenerator()},
    ${randomNumberGenerator()},
    ${randomNumberGenerator()}
    )`;
});