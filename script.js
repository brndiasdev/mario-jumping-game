const mario = document.querySelector(".mainMario");
const pipe = document.querySelector(".pipe");
const aopa = document.querySelector(".aopa");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 70) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over-mario.png";
    mario.style.width = "100px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
