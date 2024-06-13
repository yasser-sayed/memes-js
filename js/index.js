const btn = document.querySelector(".btn");
const inp = document.querySelector("input");
const fatherDiv = document.querySelector(".father");

btn.addEventListener("click", () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => data.data.memes)
    .then((memes) => {
      if (isNaN(inp.value) || inp.value == "") {
        fatherDiv.innerHTML = `<h1>please enter valid number</h1>`;
      } else if (inp.value < 100 && inp.value >= 0) {
        fatherDiv.innerHTML = `
        <h1>${memes[inp.value].name}</h1>
        <img src='${memes[inp.value].url}' width='50%' />
        `;
      } else {
        fatherDiv.innerHTML = `<h1>invalid number</h1>`;
      }
    });
});
