
const confirm = document.getElementById("con");

confirm.addEventListener("click", function() {
    const username = document.getElementById("user").value;
const password = document.getElementById("pass").value;


    if(username==="test" && password==="a"){
        console.log("a")
        window.location.href="http://127.0.0.1:5500/test2.html"
    }
    else {
        alert("wrong");
    }
})

