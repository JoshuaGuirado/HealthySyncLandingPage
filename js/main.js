document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Scroll na Navbar (Muda o visual ao rolar)
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle (Interatividade do menu hambúrguer)
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    });

    const closeMenuFunc = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Enable scroll
    };

    closeMenu.addEventListener('click', closeMenuFunc);
    
    // Fechar menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenuFunc);
    });

    // 3. Animações via Intersection Observer (Aparece ao rolar a página)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Adiciona o delay caso exista (para stagger effects)
                const delay = entry.target.style.getPropertyValue('--delay');
                if(delay) {
                    entry.target.style.transitionDelay = delay;
                }
                
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. Smooth Scroll para links internos (Deslize suave)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset para compensar o header fixo
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
