let displayRead = document.querySelector("input");
let cButton = document.querySelector(".orange");
let equalButton = document.querySelector(".equal");
let calculator = document.querySelector(".container");
cButton.onclick = function () {
  displayRead.value = "";
};
calculator.addEventListener("click", function (el) {
  if (el.target.nodeName == "BUTTON" && !el.target.classList.contains("orange") && !el.target.classList.contains("equal")) {
    displayRead.value += el.target.textContent;
  }
});
calculator.addEventListener("click", function (el) {
    if (el.target.textContent === "=") {
        try {
            if ( parseInt(eval(displayRead.value)) === eval(displayRead.value)) {
                displayRead.value = eval(displayRead.value)
            } else {
                displayRead.value = parseFloat(eval(displayRead.value).toFixed(6))
            }
        } catch {
            displayRead.value = "Math Error"
        }
    }
})
calculator.addEventListener("click", function (el) {
    if (el.target.textContent === "DEL") {
        let currentContent = displayRead.value;
        displayRead.value = currentContent.substring(0, currentContent.length - 1)
    }
})
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("SW Registered"));
}