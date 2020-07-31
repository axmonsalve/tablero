const incognito = document.querySelector(".item.incognito");
const grid = document.querySelector(".container").children;

// const Ntablero = [5, 8, 7, 3, 9, 4, 1, 6, 3, 2, 0, 4, 7, 0, 9, 2, 6, 8, 1, 5];
const Ntablero = [5, 8, 7, 3, 9, 4, 6, 2, 4, 0, 5, 1, 8, 6, 2, 9, 7, 0, 3, 1];

incognito.addEventListener("click", () => {
  let num = genRnd(1, 8);
  let pNum = document.createElement("p");
  let pOpe = document.createElement("p");
  let valOpe = genRnd(1, 4);
  switch (valOpe) {
    case 1:
      pOpe.innerHTML = "+";
      pOpe.id = "sumandoA";
      break;
    case 2:
      pOpe.innerHTML = "-";
      pOpe.id = "minuendo";
      break;
    case 3:
      pOpe.innerHTML = "*";
      pOpe.id = "factorA";
      break;
  }

  for (let i = 1; i <= grid.length - 1; i++) {
    grid[i].innerHTML = Ntablero[i - 1];
    if (grid[i].textContent <= num && valOpe === 2) {
      let nu = parseInt(grid[i].textContent);
      grid[i].textContent = nu + 10;
    }
  }

  pNum.innerHTML = num;
  incognito.textContent = "";

  incognito.appendChild(pOpe);
  incognito.appendChild(pNum);

});

function genRnd(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}