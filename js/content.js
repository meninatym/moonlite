const content = new Swiper('.content-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.content-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.content-swiper-button-next',
        prevEl: '.content-swiper-button-prev',
    },
});
