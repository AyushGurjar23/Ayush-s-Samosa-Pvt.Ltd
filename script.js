// GSAP animations
gsap.from(".hero-text h1", { x: -100, opacity: 0, duration: 1 });
gsap.from(".hero-text p", { x: -100, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".hero-btn", { scale: 0, opacity: 0, duration: 0.8, delay: 0.5 });
gsap.from(".hero-img img", { x: 100, opacity: 0, duration: 1 });
gsap.from(".product-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});