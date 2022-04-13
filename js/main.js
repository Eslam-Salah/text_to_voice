let selecBox = document.querySelector(".select select");
let txtarea = document.getElementById("txt");
let btn = document.querySelector(".btn");

slectOptions();
function slectOptions() {
  let voicelist = responsiveVoice.getVoices();
  voicelist.forEach((el) => {
    selecBox.innerHTML += `
      <option value="${el.name}">${el.name}</option>
    `;
  });
}

btn.addEventListener("click", () => {
  responsiveVoice.speak(txtarea.value);
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 3000);
});

selecBox.addEventListener("change", () => {
  responsiveVoice.setDefaultVoice(selecBox.value);
});
