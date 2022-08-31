function initParticleJs(jsonConfig = '../assets/json/particles.json') {
  particlesJS.load('particles-js', jsonConfig, function () {
    console.log('callback - particles.js config loaded');
  });
}