let hill1 = document.getElementById("hill1");
let hill2 = document.getElementById("hill2");
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log("value");

  //   const isMobile = window.innerWidth < 391;

  hill1.style.top = value * -0.3 + "px";
  text.style.marginTop = value * 2.5 + "px";
  //   hill2.style.left = value * 1.8 + "px";
  //   if (isMobile) {
  //     text.style.marginTop = value * 1.2 + "px";
  //     leaf.style.top = value * -0.8 + "px";
  //     leaf.style.left = value * 0.8 + "px";
  //     hill5.style.left = value * 0.8 + "px";
  //     hill4.style.left = value * -1 + "px";
  //     hill4.style.top = value * 0.9 + "px";
  //   } else {
  //     leaft.style.top = value * -1.5;
  //   }
});
