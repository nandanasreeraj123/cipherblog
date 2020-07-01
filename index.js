var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var close6 = document.getElementById("close6");


button1.addEventListener('click',()=>{
    modal1.style.display="block";
})
close1.addEventListener('click',()=>{
    modal1.style.display="none";
})
window.onclick= function(event) {
    if(event.target == modal1) {
        this.modal1.style.display="none";
    }
}


button2.addEventListener('click',()=>{
    modal2.style.display="block";
})
close2.addEventListener('click',()=>{
    modal2.style.display="none";
})
window.onclick= function(event) {
    if(event.target == modal2) {
        this.modal2.style.display="none";
    }
}


button3.addEventListener('click',()=>{
    modal3.style.display="block";
})
close3.addEventListener('click',()=>{
    modal3.style.display="none";
})
window.onclick= function(event) {
    if(event.target == modal3) {
        this.modal3.style.display="none";
    }
}


button4.addEventListener('click',()=>{
    modal4.style.display="block";
})
close4.addEventListener('click',()=>{
    modal4.style.display="none";
})
window.onclick= function(event) {
    if(event.target == modal4) {
        this.modal4.style.display="none";
    }
}


button5.addEventListener('click',()=>{
    modal5.style.display="block";
})
close5.addEventListener('click',()=>{
    modal5.style.display="none";
})
window.onclick= function(event) {
    if(event.target == modal5) {
        this.modal5.style.display="none";
    }
}


button6.addEventListener('click',()=>{
    modal6.style.display="block";
})
close6.addEventListener('click',()=>{
    modal6.style.display="none";
})
window.onclick= function(event) {
    if(event.target == modal6) {
        this.modal6.style.display="none";
    }
}