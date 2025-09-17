// daftar gambar
const images = [
  "img/jala.jpeg",
  "img/lucu.jpeg",
  "img/jalaacute.png",
  "img/duit.jpeg",
  "img/jalasun.png",
  "img/ulta.jpeg",
  "img/RABU.png",
];

function createRow(rowId) {
  const row = document.getElementById(rowId);
  for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = images[i % images.length];
    row.appendChild(img);
  }
}

createRow("row-top");
createRow("row-bottom");

// animasi geser
function animateRow(row, speed, direction = 0.1) {
  let x = 0;
  function move() {
    x -= speed * direction;
    row.style.transform = `translateX(${x}px)`;
    if (Math.abs(x) > row.scrollWidth / 2) {
      x = 0; // reset
    }
    requestAnimationFrame(move);
  }
  move();
}

animateRow(document.getElementById("row-top"), 0.8, 1); // ke kiri
animateRow(document.getElementById("row-bottom"), 0.8, -1); // ke kanan
