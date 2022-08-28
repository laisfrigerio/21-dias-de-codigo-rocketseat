function initParticleJs() {
  particlesJS.load('particles-js', '../assets/json/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
}