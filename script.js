var swiper = new Swiper(".mySwiper", {

    slidersPerView: 1, 
    spaceBetween: 80,
    grabCursor: true,
    loop:true, 
    breakpoints : {
        991: {
            slidersPerView:3
        }
    }



});