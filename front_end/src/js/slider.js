document.addEventListener('DOMContentLoaded', () => {
    new Splide('#slider', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      gap: '1rem',
      arrows: true,
      pagination: true,
      autoplay: true,
      autoplayInterval: 2000,
      
    }).mount();
});
