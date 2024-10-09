document.addEventListener('DOMContentLoaded', function() {
        // Función para detectar si el navegador es Safari
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }
    
        // Si el navegador es Safari, reemplazar el contenido del div con id 'prototypem'
        if (isSafari()) {
            const newContent = `
                <img src="../assets/images/fallbackM1.jpg" alt="Fallback image" class="fallback">
                <img src="../assets/images/mnad14.png" alt="Tab Bar">
                <img src="../assets/images/fallbackM2.jpg" alt="Fallback image" class="fallback">
                <img src="../assets/images/fallbackM3.jpg" alt="Fallback image" class="fallback">
                <img src="../assets/images/mnad15.webp" alt="Notifications">
            `;

            const newContent2 = `
            <img src="../assets/images/mnad11.png" alt="Totem">
            <img src="../assets/images/fallbackM.jpg" alt="Fallback image" class="fallback">
            <img src="../assets/images/mnad12.webp" alt="Multipurpose room">
        `;
    
            // Reemplazar el contenido del div
            document.getElementById('prototypem').innerHTML = newContent;
            document.getElementById('prototype').innerHTML = newContent;
            document.getElementById('inside').innerHTML = newContent2;
            document.getElementById('insidem').innerHTML = newContent2;
        }
    });   

window.onload = function () {

    function updateHeaderText() {
        // Check if the screen width is less than 480px
        if (window.innerWidth < 480) {
            console.log("Pantalla más pequeña que 480px");
            document.getElementById("titularanimado").innerText = "A new experience for";
            document.getElementById("titularanimado2").innerText = "the digital evolution";
            document.getElementById("titularanimado3").innerText = "of MNAD.";
        } else {
            // Revert back to original text if the screen is larger than 480px
            document.getElementById("titularanimado").innerText = "Interactive experience for the";
            document.getElementById("titularanimado2").innerText = "digital evolution of the";
            document.getElementById("titularanimado3").innerText = "MNAD's heritage.";
        }
    }
    
    // Primero, actualiza el texto basado en el tamaño de la pantalla
    updateHeaderText();

    // Vuelve a ejecutar esta función al cambiar el tamaño de la ventana
    window.addEventListener("resize", updateHeaderText);

    gsap.registerPlugin(ScrollToPlugin, RoughEase, ExpoScaleEase, SlowMo);

    const myText = new SplitType('#titularanimado')

     // Asegúrate de que el texto esté oculto antes de animarlo
     gsap.set('#titularanimado', { visibility: 'visible' });

    gsap.to('.char', {
        y: 0,
        delay: 0.1,
        duration: 0.1,
    })

    const myText2 = new SplitType('#titularanimado2')
     // Asegúrate de que el texto esté oculto antes de animarlo
     gsap.set('#titularanimado2', { visibility: 'visible' });


    gsap.to('.char', {
        y: 0,
        delay: 0.4,
        duration: 0.1,
    })

    

    const myText3 = new SplitType('#titularanimado3')
    // Asegúrate de que el texto esté oculto antes de animarlo
    gsap.set('#titularanimado3', { visibility: 'visible' });
    

    gsap.to('.char', {
        y: 0,
        delay: 0.7,
        duration: 0.1,
    })

    const todo = document.getElementById('todosobre');
    const navLinkEls = document.querySelectorAll('.menu-item');
    const sectionEls = document.querySelectorAll('.article');

    todo.addEventListener('scroll', () => {
        let current = '';

        sectionEls.forEach(sectionEl => {
            // Obtener la posición de la sección relativa al contenedor 'todo'
            const sectionTop = sectionEl.offsetTop - todo.offsetTop;
            const sectionHeight = sectionEl.clientHeight;

            // Comprobar si la sección está en la vista actual
            if (todo.scrollTop >= sectionTop - 100) {
                current = sectionEl.getAttribute('id');
            }
        });

        navLinkEls.forEach(navlinkEl => {
            navlinkEl.classList.remove('menudestacado');
            if (navlinkEl.href.includes(current)) {
                navlinkEl.classList.add('menudestacado');
            }
        });
    });


    navLinkEls.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado de los enlaces
            const targetId = this.getAttribute('href').substring(1); // Obtiene el id del elemento destino (sin el '#')
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                gsap.to(todo, {
                    scrollTo: {
                        y: targetSection.offsetTop - todo.offsetTop, // Ajusta el desplazamiento para llegar a la posición de la sección en el contenedor
                        autoKill: true // Permitir que el desplazamiento se interrumpa si el usuario hace scroll
                    },
                    duration: 2, // Duración de la animación
                    ease: 'power2.out' // Efecto de easing para el desplazamiento
                });
            }
        });
    });

    // Obtén el elemento <path> dentro del contenedor #volver
const pathElement = document.getElementById('flechita');

// Agregar el evento scroll a la ventana
window.addEventListener('scroll', () => {
    // Verifica si el desplazamiento vertical es mayor que la altura de la ventana
    if (window.scrollY > window.innerHeight) {
        // Cambiar el atributo fill del path
        pathElement.setAttribute('fill', '#333333'); // Cambiar al color deseado (por ejemplo, rojo)
    } else {
        // Restablecer el color original si vuelves arriba
        pathElement.setAttribute('fill', '#FCFCFC'); // Cambiar al color original (por ejemplo, negro)
    }
});

}