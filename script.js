let h1 = document.querySelector("h1");

let ending = new Date(2024, 9, 2, 10, 50);
const f = (x, y) => Math.floor(x/y);

function update() {
  let now = new Date();
  let left = ending - now;
  let days = f(left, (24 * 60 * 60 * 1000));
  let hrs = f(left, (60 * 60 * 1000)) - (24 * days);
  let mins = f(left, (60 * 1000)) - (24 * 60 * days) - (60 * hrs);
  let secs = f(left, 1000) - (24 * 60 * 60 * days) - (60 * 60 * hrs) - (60 * mins);

  h1.innerHTML = `${days} <small>days</small> ${hrs}:${mins}:${secs}`;
}

update();
setInterval(update, 1000);
