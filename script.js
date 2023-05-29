document.getElementById("subscribe-input").addEventListener("keyup",function (event) {
   const value= event.target.value
    const btn = document.getElementById("subscription");
    if (value=="panda") {
        btn.removeAttribute("disabled")
    }
    else{
        btn.setAttribute("disabled",true)
    }
})

document.getElementById("subscription").addEventListener("click",function () {
    const inputFild=document.getElementById("subscribe-input");
    const p=document.getElementById("success");
    p.innerText="Success";
    inputFild.value="";
    p.style.backgroundColor="black";
    p.style.color="white";
    p.style.padding="10px";
})

// night effect

function nightMood() {
    document.body.style.backgroundColor="gray";
    document.body.style.color="white";
}
// remove

document.getElementById('mood-remove').addEventListener("click",function (event) {
    event.target.parentNode.removeChild(event.target)
})