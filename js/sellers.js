const sellers = new Swiper('.sellers-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    navigation: {
        nextEl: '.sellers-button-next',
        prevEl: '.sellers-button-prev',
    },
    centeredSlides: true,
});
