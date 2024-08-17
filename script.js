let h1 = document.querySelector("#h1area");
let h2 = document.querySelector("#h2area");
let h3 = document.querySelector("#h3area");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let ending = new Date(2024, 9, 2, 10, 50);
const f = (x, y) => Math.floor(x/y);

function update() {
  let now = new Date();
  let left = ending - now;
  if (left <= 0) {
    let formattedDate = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
    h2.textContent = formattedDate;
    h1.innerHTML = "PSLE has ended!";
    h3.style = "display: none;";
    return;
  }
  let days = f(left, (24 * 60 * 60 * 1000));
  let hrs = f(left, (60 * 60 * 1000)) - (24 * days);
  let mins = f(left, (60 * 1000)) - (24 * 60 * days) - (60 * hrs);
  let secs = f(left, 1000) - (24 * 60 * 60 * days) - (60 * 60 * hrs) - (60 * mins);

  h1.innerHTML = `${days} <small>days</small> ${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

update();
setInterval(update, 1000);
