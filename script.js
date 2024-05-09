const togglentn = document.querySelector(`toggle-btn`);
const navlinks =document.querySelector(`.nav-links`);
togglebtn.addeventlistener(`click`,()=>{
    navlinks.classList.toggle(`active`);
}
)