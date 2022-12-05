/* SMOOTH SCROLLING */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
        });
    });
  });
  
  window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle("tsFixed", window.scrollY > 100);
  });

  window.addEventListener('scroll', function(){

      let talentedarm = document.querySelector("#talentedarm");
      let talentedforearm = document.querySelector("#talentedforearm");
      let head_3_ = document.querySelector("#head_3_");
      let talentedworkerarm = document.querySelector("#talentedworkerarm"); 

      head_3_.classList.toggle("transformed_head_3_", window.scrollY > 50); 
      talentedarm.classList.toggle("transformed_talentedarm", window.scrollY > 50); 
      talentedforearm.classList.toggle("transformed_talentedforearm", window.scrollY > 50); 
      talentedworkerarm.classList.toggle("transformed_workedarm", window.scrollY < 600); 
  });

  

  let tswomanrh = document.querySelector("#tswomanrh");
  window.addEventListener('load', function(){
    
    tswomanrh.classList.add("tsanimation");
  });

let tsMobileMenu = document.querySelector('#tsMobileMenu');
let tsMobileNav = document.querySelector('#tsMobileNav');
let tsX = document.querySelector('#tsX');
let tsY = document.querySelector('#tsY');
let tsZ = document.querySelector('#tsZ');

tsMobileNav.addEventListener("click", () => {

    tsMobileMenu.classList.toggle("tsDisplayNone");

    tsX.classList.toggle("collapse");
    tsY.classList.toggle("collapse");
    tsZ.classList.toggle("collapse"); 
    
    setTimeout(() => {
        tsY.classList.toggle("displayNone");
        tsX.classList.toggle("rotate30");
        tsZ.classList.toggle("rotate150");
      }, 70);
    
    setTimeout(() => {
      tsX.classList.toggle("rotate45");
      tsX.classList.toggle("xhover");
      tsZ.classList.toggle("rotate135"); 
    }, 120);

});