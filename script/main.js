window.addEventListener('DOMContentLoaded', function() {

    // Button Up section
    window.addEventListener('scroll', function(){
        const header = document.querySelector('.button-top');
        header.classList.toggle('display-block', window.scrollY > 350)
    })
    // Carousel Quote section
    const   slideWrapper = document.querySelector('.offer-slider'),
            slides = document.querySelectorAll('.quote-item'),
            width = getComputedStyle(slideWrapper).width,
            slidesField = document.querySelector('.quote-content'),
            prev = document.querySelector('.slide-prev'),
            next = document.querySelector('.slide-next');
            let offset = 0;
            let slideIndex = 1; 
        
    // Buttons settings
    slidesField.style.width = 100 * slides.length +'%';
    slides.forEach(event => {
        event.style.width = width;
    })
    
  
    next.addEventListener('click', () => {
        if(offset == (+width.slice(0, width.length - 2) * (slides.length - 1))){
            offset = 0;
        }
        else{
            offset += +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if(slideIndex  == slides.length){
            slideIndex = 1;
        }
        else{
            slideIndex++;
        }
    
    })
    prev.addEventListener('click', () => {
        if(offset == 0){
            offset = (+width.slice(0, width.length - 2) * (slides.length - 1))
        }
        else{
            offset -= +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`
        if(slideIndex == 1){
            slideIndex  = slides.length
         }
         else{
             slideIndex--;
         }
    })
    //Indicator settings
    const section = document.querySelector('.quote-section');
    let indicator = document.createElement('ol'),
    dots = [];
    indicator.classList.add('carousel-indicator');
    section.append(indicator);

    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i+1 );
        dot.classList.add('carousel-dot');
            
        indicator.append(dot);
        if(i==0){
            dot.style.opacity = .5;
        }
        dots.push(dot);
        dots.forEach(dot => dot.style.opacity = .5);
        dots[slideIndex - 1].style.opacity = 1;
        next.addEventListener('click', () => {
            if(i==0){
                dots.forEach(dot => dot.style.opacity = .5);
                dots[slideIndex - 1].style.opacity = 1;
                
            }
        })
        prev.addEventListener('click', ()=>{
            if(i==0){
                dots.forEach(dot => dot.style.opacity = .5);
                dots[slideIndex - 1].style.opacity = 1;
            }
        })
    }
    dots.forEach(dot => {
        dot.addEventListener('click', e=>{
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = (+width.slice(0, width.length - 2) * (slideTo - 1))
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.style.opacity = .5);
            dots[slideIndex - 1].style.opacity = 1; 
        })
    })
    //--------------------------//
})