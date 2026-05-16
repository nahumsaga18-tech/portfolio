
document.addEventListener('DOMContentLoaded', () => {
    

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                
         
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }


    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { 
                    "value": 10, 
                    "density": { "enable": true, "value_area": 800 } 
                },
                "shape": { 
                    "type": "image", 
                    "image": { 
                        "src": "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG", 
                        "width": 100, 
                        "height": 100 
                    } 
                },
                "opacity": { "value": 1 },
                "size": { "value": 40, "random": true },
                "line_linked": { "enable": false },
                "move": { 
                    "enable": true, 
                    "speed": 4, 
                    "direction": "right", 
                    "random": false, 
                    "straight": true, 
                    "out_mode": "out" 
                }
            },
            "interactivity": { 
                "events": { "onhover": { "enable": false } } 
            },
            "retina_detect": true
        });
    }
});


function zoomImage(src, link) { 
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.classList.add("is-active"); 
        document.getElementById("expandedImg").src = src; 
        document.getElementById("modalLinkedInLink").href = link; 
    }
}

function closeModal() { 
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.classList.remove("is-active"); 
    }
}