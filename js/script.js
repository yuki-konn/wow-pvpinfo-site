// Nav Dropdown Funciton
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

// Modal Function
function onClick(element) {
  document.getElementById("modal-image").src = element.src;
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-caption").innerHTML = element.alt;
}

// Close Modal
var closeBtn = document.getElementsByClassName("closeModal")[0];

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
