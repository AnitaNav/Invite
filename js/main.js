const add = document.querySelector("#add"),
  minus = document.querySelector("#minus"),
  number = document.querySelector("#number");
let audio = new Audio('mp3/carnival-109979-[AudioTrimmer.com].mp3');
audio.play();

let count = 0;
number.innerText = count;

const printNumber = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  printNumber();
};

const handleMinus = () => {
  count = count - 1;
  printNumber();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
