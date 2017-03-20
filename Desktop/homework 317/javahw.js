alert("hello kitty")

var element = document.getElementById("test1");
document.getElementById("test1").addEventListener("mouseenter", function() {
  alert("Hey, I told you not to hover over me!")}
)
function button1() {
  document.getElementById('question1').innerText = "I'm right!";
}
function button2() {
  document.getElementById('question1').innerText = "No I'm right!";
}

var submit = document.getElementById("submit")
submit.addEventListener('click', function(event){
	event.preventDefault()
});

function checkForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var head = document.getElementById('form-head');
    var cleared = false;
 var changeHead = "Your Form is Correct. Thank You.";

   if (password == 12345678) {
        if (username.length > 1) {
            document.getElementById('form-head').innerHTML = changeHead;
        } else {
            alert("Incorrect username");
        }
    } else {
        alert("Incorrect password");
    }
}