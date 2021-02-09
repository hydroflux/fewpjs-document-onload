document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updatePageText
  })

function updatePageText() {
    $p = document.getElementById("text")
    $p.textContent = "This is really cool!"
}