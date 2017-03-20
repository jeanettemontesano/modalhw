// var phase = document.getElementByID("phase");

// // document.addEventListener("keypress", function (e)
// // 	phase.innerText = e.key;
// })
var change=document.getElementById("phase")

window.addEventListener("keypress",function(event){
 console.log(event)
change.innerHTML=event.key

})


var myArray = ["isaac", "kang"]

myArray[0]

var myObject = {
	first: "isaac",
	last: "kang"
}


console.log(myObject.first + myObject.last)