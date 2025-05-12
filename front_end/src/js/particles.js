window.addEventListener('load', () => {
    particlesJS('particles', {
        particles: {
            number: { 
                value: 50, 
                density: { enable: true, value_area: 800 } 
            },
            color: { value: "#ff9f9f" },
            shape: { 
                type: "circle" 
            },
            opacity: { 
                value: 0.3, 
                random: true 
            },
            size: { 
                value: 5, 
                random: true 
            },
            move: { 
                enable: true,
                speed: 2,
                direction: "none", 
                out_mode: "out" 
            },
            line_linked: { 
                enable: false 
            }
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onhover: { enable: true, mode: "repulse" }, 
                onclick: { enable: false, mode: "push" }
            }
        }
    });

    
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 100); 
})

