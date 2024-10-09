window.onload = function () {
    
    gsap.registerPlugin(TextPlugin);

    const titularmajo = [
        "UX/UI designer based in Madrid",
        "Bringing ideas to life through design &#x2728;",
        "Let's build something cool together!"
    ];
    
    let tlMaster = gsap.timeline({ repeat: -1 });
    
    titularmajo.forEach(word => { // Cambié aquí
        let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 3 });
        tlText.to("#titularmajoanimado", { duration: 1.5, text: word });
        tlMaster.add(tlText);
    });
    
    
    const splineViewer = document.querySelector('spline-viewer');
    const preloader = document.getElementById('loading');

    if (splineViewer) {
        // Configurar un timeout para ocultar el preloader después de 8 segundos si no se ha cargado
        const timeout = setTimeout(() => {

            preloader.classList.add('preloader-hidden');
        }, 5000);

        const checkLoaded = () => {
            // Verificar si la propiedad `_loaded` es `true`
            if (splineViewer._loaded) {
                preloader.classList.add('preloader-hidden');
                clearTimeout(timeout); // Detenemos el timeout si se ha cargado antes de los 8 segundos
            } else {
                console.log('El componente <spline-viewer> aún no está completamente cargado.');
            }
        };

        // Ejecutar la verificación de inmediato
        checkLoaded();

    } else {
        console.error('El componente <spline-viewer> no se encontró en el DOM.');
    }


    if (screen.width > 1024) {
        const cursor = new MouseFollower({
            container: '.grande',
            speed: 0.2,
        });
    };

    const scrollDownAnimation = document.getElementById('scroll-down-animation');

    // Inicialmente oculta el elemento
    scrollDownAnimation.style.opacity = '0';
    scrollDownAnimation.style.transition = 'opacity 0.5s ease-in-out'; // Transición suave

    let isAnimating = false; // Bandera para controlar si el elemento está en animación

    // Muestra el elemento después de 6 segundos
    setTimeout(() => {
        scrollDownAnimation.style.opacity = '1';
        scrollDownAnimation.style.visibility = 'visible';
    }, 6000);

    // Función para ocultar o mostrar el elemento cuando se hace scroll
    function handleScroll() {
        const scrollThreshold = 300; // Umbral de píxeles para ocultar

        if (window.scrollY > scrollThreshold && !isAnimating && scrollDownAnimation.style.opacity !== '0') {
            // Si el usuario ha hecho scroll abajo y el elemento está visible
            isAnimating = true;
            scrollDownAnimation.style.opacity = '0';

            // Oculta la visibilidad cuando la opacidad llega a 0
            setTimeout(() => {
                scrollDownAnimation.style.visibility = 'hidden';
                isAnimating = false; // Termina la animación
            }, 500); // Coincide con la duración de la transición

        } else if (window.scrollY <= scrollThreshold && !isAnimating && scrollDownAnimation.style.opacity !== '1') {
            // Si el usuario ha hecho scroll arriba y el elemento está oculto
            isAnimating = true;
            scrollDownAnimation.style.visibility = 'visible'; // Vuelve a hacer visible antes de cambiar la opacidad
            scrollDownAnimation.style.opacity = '1';

            // Termina la animación una vez que se ha mostrado
            setTimeout(() => {
                isAnimating = false; // Termina la animación
            }, 500); // Coincide con la duración de la transición
        }
    }

    // Agrega el evento de scroll
    window.addEventListener('scroll', handleScroll);


    const imagenes = [
        'assets/images/LogoArray/imagen1.jpg',
        'assets/images/LogoArray/imagen2.jpg',
        'assets/images/LogoArray/imagen3.jpg',
        'assets/images/LogoArray/imagen4.jpg'
    ];

    // Índice actual de la imagen
    let indiceImagen = 0;

    // Obtener el div
    const div = document.getElementById('cambiarFondo');

    // Agregar el evento de clic al div
    div.addEventListener('click', function () {
        // Incrementar el índice
        indiceImagen++;

        // Reiniciar el índice si es mayor al número de imágenes
        if (indiceImagen >= imagenes.length) {
            indiceImagen = 0;
        }

        // Cambiar el fondo del div
        div.style.backgroundImage = `url(${imagenes[indiceImagen]})`;
    });

};