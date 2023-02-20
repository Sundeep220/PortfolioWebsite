/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabcontents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabcontents.forEach(tabcontent => {
            tabcontent.classList.remove('skills-active')
        })

        target.classList.add('skills-active')


        tabs.forEach(tab => {
            tab.classList.remove('skills-active')
        })

        tab.classList.add('skills-active')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/*===== Work Popup =====*/

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector('.portfolio__popup').classList.toggle("open")
}

document.querySelector('.portfolio__popup-close').addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML ;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFun(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFun(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFun);
    input.addEventListener("blur", blurFun);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
//get all the sections that have id defined
const sections = document.querySelectorAll("section[id]");
console.log(sections)

// add event listener for scroll
window.addEventListener('scroll',navHighlighter);

function navHighlighter(){
    // get current sccroll position 
    let scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        // If our current scroll position enters a space where current section is on screen is, add .active class to corresponding
        // navigation link, else remove instance it.

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/
