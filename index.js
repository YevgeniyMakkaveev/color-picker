const backgroundButton = document.querySelector(".button-back");
const textButton = document.querySelector(".button-text");

let currentClass = ".back";
let currentType = "background-color";

const changeValue = (e) => {
  const value = e.target.value;
  const type = value === ".back" ? "background-color" : "color";
  currentClass = value;
  currentType = type;
};

backgroundButton.addEventListener("click", (e) => changeValue(e));
textButton.addEventListener("click", (e) => changeValue(e));

function hexFromRGB(r, g, b) {
  const hex = [r.toString(16), g.toString(16), b.toString(16)];
  $.each(hex, function (nr, val) {
    if (val.length === 1) {
      hex[nr] = "0" + val;
    }
  });
  return hex.join("").toUpperCase();
}

function refreshColor() {
  let red = $(".red").slider("value"),
    green = $(".green").slider("value"),
    blue = $(".blue").slider("value"),
    hex = hexFromRGB(red, green, blue);
  $(currentClass).css(currentType, "#" + hex);
}

$(function () {
  $(".red, .green, .blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshColor,
    change: refreshColor,
  });
  $(".red").slider("value", 255);
  $(".green").slider("value", 140);
  $(".blue").slider("value", 60);
});
$(".btn__group").on("click", ".ui-button", function () {
  refreshColor();
  $(this).addClass("active").siblings().removeClass("active");
});
