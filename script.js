function openBar() {
    document.querySelector(".sideBar").style.width = "80%";
    document.querySelector(".sideBar").style.padding = "2rem 3rem";
}

function closeBar() {
    document.querySelector(".sideBar").style.width = "0";
    document.querySelector(".sideBar").style.padding = "0";
}

function showBookmark(event) {
    event.preventDefault();
    document.getElementById("bookmark").style.display = "flex";
    document.getElementById("search").style.display = "none";
    document.getElementById("share").style.display = "none";
}

function showSearch(event) {
    event.preventDefault();
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("search").style.display = "flex";
    document.getElementById("share").style.display = "none";
}

function showShare(event) {
    event.preventDefault();
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("share").style.display = "flex";
}

document.querySelectorAll(".questions").forEach(question => {
    question.addEventListener("click", function(){
        const answers = this.nextElementSibling;
        const down = this.querySelector(".down");
        const up = this.querySelector(".up");
        if (answers.style.display === "block") {
            answers.style.display = "none";
            down.style.display = "block";
            up.style.display = "none";
        } else {
            answers.style.display = "block";
            down.style.display = "none";
            up.style.display = "block";
        }
    })
})
const formButton = document.getElementById("form-btn");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errors");

formButton.addEventListener("click", function(event){
  event.preventDefault();
  checkErrors(emailInput, errorMessage);
});

function checkErrors(input, errors){
if(input.value.trim() === "" || input.value.length < 7){
  errors.style.display = "block";
  input.classList.add("error");
} else {
  errors.style.display = "none";
  input.classList.remove("error");
}
}
