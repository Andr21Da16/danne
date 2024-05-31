const slides = [
    { image: 'foto1.jpg', message: 'Lindos ojitos, lo sé la foto es rara, pero tu hermosa' },
    { image: 'foto2.jpg', message: 'Hermosa, y mandando besos; sinceramene no esperaba eso' },
    { image: 'foto3.jpg', message: 'Cada día contigo es especial' },
    // Añadir más imágenes y mensajes hasta completar las 30 fotos
    { image: 'foto4.jpg', message: 'Siempre a tu lado' },
    { image: 'foto5.jpg', message: 'Tantos recuerdos' },
    { image: 'foto6.jpg', message: 'Contigo, todo es mejor' },
    { image: 'foto7.jpg', message: 'Mi amor por ti crece cada día' },
    { image: 'foto8.jpg', message: 'Eres mi mejor amiga y amor' },
    { image: 'foto9.jpg', message: 'Juntos, somos invencibles' },
    { image: 'foto10.jpg', message: 'Nuestra historia es única' },
    { image: 'foto11.jpg', message: 'Gracias por cada momento' },
    { image: 'foto12.jpg', message: 'Eres mi todo' },
    { image: 'foto13.jpg', message: 'No puedo esperar a tenerte cerca' },
    { image: 'foto14.jpg', message: 'Te adoro' },
    { image: 'foto15.jpg', message: 'Siempre en mi corazón' },
    { image: 'foto16.jpg', message: 'Eres mi inspiración' },
    { image: 'foto17.jpg', message: 'Amor eterno' },
    { image: 'foto18.jpg', message: 'Mi amor, mi vida' },
    { image: 'foto19.jpg', message: 'Cada día, una aventura' },
    { image: 'foto20.jpg', message: 'Tu sonrisa ilumina mi vida' },
    { image: 'foto21.jpg', message: 'Siempre juntos' },
    { image: 'foto22.jpg', message: 'Te amo más de lo que puedes imaginar' },
    { image: 'foto23.jpg', message: 'Eres mi sol en días nublados' },
    { image: 'foto24.jpg', message: 'Gracias por existir' },
    { image: 'foto25.jpg', message: 'Cada momento contigo es un tesoro' },
    { image: 'foto26.jpg', message: 'Eres mi sueño hecho realidad' },
    { image: 'foto27.jpg', message: 'No hay nadie como tú' },
    { image: 'foto28.jpg', message: 'Eres mi mundo' },
    { image: 'foto29.jpg', message: 'Juntos, por siempre' },
    { image: 'foto30.jpg', message: 'Mi amor, eres hermosa' }
];

let currentSlide = 0;
const slideDuration = 6000; // Duración de cada diapositiva en milisegundos

function startPresentation() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('slideShow').style.display = 'block';
    document.getElementById('backgroundMusic').play();
    showSlide();
}

function showSlide() {
    const slide = slides[currentSlide];
    document.getElementById('slideImage').src = slide.image;
    document.getElementById('slideMessage').innerText = slide.message;

    currentSlide++;
    if (currentSlide < slides.length) {
        setTimeout(showSlide, slideDuration);
    } else {
        setTimeout(() => {
            document.getElementById('slideShow').style.display = 'none';
            document.getElementById('animationScreen').style.display = 'block';
            startAnimation();
        }, slideDuration);
    }
}

function startAnimation() {
    const tl = gsap.timeline();
    tl.to('#animationContainer', { duration: 2, backgroundColor: '#ff69b4' })
        .to('#animationContainer', { duration: 2, backgroundColor: '#333' })
        .repeat(3)
        .onComplete(showFinalMessage);
}

function showFinalMessage() {
    document.getElementById('animationScreen').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
}