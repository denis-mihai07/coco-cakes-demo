let splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  focus  : 'center',
  pagination: false,
  arrows: true,
  autoplay: true,
  interval: 4000,
  speed: 1000,
  pauseOnHover: true,
  pauseOnFocus: true,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  drag: true,

});

splide.mount();


