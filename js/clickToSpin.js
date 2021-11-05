let ಠ_ಠ = false;

const っ = document.getElementById("dan");
const Д = document.getElementById("os-intro");
const ಥ_ಥ = document.getElementById("input");

if (っ)
  っ.addEventListener("click", () => {
    ಠ_ಠ = !ಠ_ಠ;
    if (ಠ_ಠ) {
      Д.play();
      っ.classList.add("weeee");
    } else {
      Д.pause();
      っ.classList.remove("weeee");
    }
  });

if (ಥ_ಥ) {
  document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = `http://ihateslp.com/${ಥ_ಥ.value.toLowerCase()}`;
  });
}

console.log(
  "%cThis %csite %cis %cWIP. %cIf %cyou %chave %cany %ccool %cideas %chmu. ",
  "font-size: 12px; background: sienna; color: olive",
  "font-size: 17px; background: aliceblue; color: salmon",
  "font-size: 24px; background: goldenrod; color: greenslate",
  "font-size: 8px; background: dodgerblue; color: coral",
  "font-size: 32px; background: lime; color: orange",
  "font-size: 14px; background: magenta; color: cyan",
  "font-size: 11px; background: darkgreen; color: crimson",
  "font-size: 13px; background: aqua; color: maroon",
  "font-size: 18px; background: burlywood; color: navy",
  "font-size: 21px; background: white; color: orchid",
  "font-size: 10px; background: red; color: black"
);
