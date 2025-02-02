//  no jquery
// document.getElementById("changeText").addEventListener("click", function() {
//     document.getElementById("heading").innerHTML = "Text changed"
// })

// document.getElementById("changeColor").addEventListener("click", function() {
//     document.getElementById("box").style.backgroundColor = "green"
// })

// document.getElementById("fadeEffect").addEventListener("click", function() {
//     let box = document.getElementById("box");
//     if (box.style.opacity == "0") {
//         box.style.opacity = "1";
//     } else {
//         box.style.opacity = "0";
//     }
// })

$("#changeText").click(function() {
    $("#heading").text("Text changed")
})

$("#fadeEffect").click(function() {
    $("#box").fadeToggle();
})