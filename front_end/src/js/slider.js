document.addEventListener('DOMContentLoaded', () => {
    new Splide('#item_slider', {
      type: 'loop',
      perPage: 5,
      focus: 'center',
      gap: '1rem',
      arrows: true,
      pagination: true,
      autoplay: true,
      autoplayInterval: 2000,
      breakpoints: {
        768: {
          perPage: 2,
        },
        425: {
          perPage: 1,
        },
      },
    }).mount();
  });
  