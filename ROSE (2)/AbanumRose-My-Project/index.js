const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click",()=>{
navbar.classList.toggle("show");
})








document.onscroll = () =>{
navbar.classList.remove("show");

if(window.scrollY>0){
document.querySelector(".header").classList.add("active");
}
else{
document.querySelector(".header").classList.remove("active");
}
};

document.onload = () =>{
if(window.scrollY>0){
document.querySelector(".header").classList.add("active");
}
else{
document.querySelector(".header").classList.remove("active");
}
};
