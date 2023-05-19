
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const BtnList=document.querySelector(".bars");
const Modal=document.querySelector('.modal');
BtnList.addEventListener('click',function(event){
 Modal.classList.add('open');
 ModalContainer.classList.remove('remove');
})
const Overlay=document.querySelector(".modal_overlay");
Overlay.addEventListener('click',function(event){
  Modal.classList.remove('open');
  ModalContainerRegister.classList.remove('open');
  modalLogin.classList.remove('open');
})
// check modal register
function kiemtra() {
  const hoten =document.getElementById("hoten").value;
  var email = document.getElementById("email").value;
  var tendangnhap = document.getElementById("tendangnhap").value;
  const sodienthoai=document.getElementById("phone").value;
  var matkhau = document.getElementById("matkhau").value;
  var nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;
  

  const error1=document.querySelector(".label-input-error-1");
  const error2=document.querySelector(".label-input-error-2");
  const error3=document.querySelector(".label-input-error-3");
  const error4=document.querySelector(".label-input-error-4");
  const error5=document.querySelector(".label-input-error-5");
  const error6=document.querySelector(".label-input-error-6");
// xu khi khi an input tat label
const ht= document.getElementById("hoten");
ht.addEventListener("click",function(event){
  error1.classList.remove("openError");
})
const mail=document.getElementById("email");
mail.addEventListener("click",function(event){
  error2.classList.remove("openError");
})
const username=document.getElementById("tendangnhap");
username.addEventListener("click",function(event){
  error3.classList.remove("openError");
})
const sdt=document.getElementById("phone");
sdt.addEventListener("click",function(event){
  error4.classList.remove("openError");
})
const mk=document.getElementById("matkhau");
mk.addEventListener("click",function(event){
  error5.classList.remove("openError");
})
const remk=document.getElementById("nhaplaimatkhau");
remk.addEventListener("click",function(event){
  error6.classList.remove("openError");
})
// xu li label khi bao loi
  if(hoten ==""){
     error1.classList.add("openError");
     document.getElementById("hoten").focus();
     return false;
  }

  re = /\w+@\w+\.\w+/;
  if (email == "") {
    error2.classList.add("openError");
      document.getElementById("email").focus();
      return false;
  }
  else if (re.test(email) == false) {
    error2.classList.add("openError");
     document.getElementById("email").focus();
      return false;
  }
  
  if(tendangnhap ==""){
    error3.classList.add("openError");
    document.getElementById("tendangnhap").focus();
    return false;
  } 
  if (sodienthoai.length !== 10) {
     error4.classList.add("openError");
     document.getElementById("phone").focus();
    return false;
  }
  const pattern = /^\d+$/;
  if (!pattern.test(sodienthoai)) {
    error4.classList.add("openError");
    document.getElementById("phone").focus();
    return false;
  }
  if(matkhau.length==0){ 
    error5.classList.add("openError");
        document.getElementById("matkhau").focus(); 
        return false; 
   } 
  if(nhaplaimatkhau.length==0) { 
  error6.classList.add("openError");
  document.getElementById("nhaplaimatkhau").focus(); 
  return false; 
  } 
  if(matkhau != nhaplaimatkhau){     
  error6.classList.add("openError");
   document.getElementById("nhaplaimatkhau").focus(); 
   return false; 
  }
  return true;
}

// modal register
const ModalContainer=document.querySelector(".modal_container");
const BtnRegister=document.querySelector(".js-register-btn");
const ModalContainerRegister=document.querySelector(".modal_container-register");
BtnRegister.addEventListener('click',function(event){
  ModalContainer.classList.add('remove');
  ModalContainerRegister.classList.add('open');
})
// modal btn-login
const btnLogin=document.querySelector(".js-login");
const modalLogin=document.querySelector(".modal_container-login");
// btnLogin.addEventListener('click',function(event){
//   ModalContainerRegister.classList.remove('open');
//   modalLogin.classList.add('open');
// })
// switch control
// dang ky
const switchLogin=document.querySelector('.js-btn-Login');
switchLogin.addEventListener('click',function(event){
  ModalContainerRegister.classList.remove('open');
  modalLogin.classList.add('open');
})

// dang nhap
const createAcc=document.querySelector(".js-btn-Register");
createAcc.addEventListener('click',function(event){
  modalLogin.classList.remove('open');
  ModalContainer.classList.add('remove');
  ModalContainerRegister.classList.add('open');
})