const mercury = document.querySelector('#mercury');
const venus = document.querySelector('#venus');
const earth = document.querySelector('#earth');
const mars = document.querySelector('#mars');
const jupiter = document.querySelector('#jupiter');
const saturn = document.querySelector('#saturn');
const ring = document.querySelector('#ring');
const uranus = document.querySelector('#uranus');
const neptune = document.querySelector('#neptune');


function startOrbit(planet, radius, speed, y) {
    let angle = 0; // Initial angle
    setInterval(() => {
      angle += speed; // Increment angle
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      planet.setAttribute('position', `${x-6} ${y} ${z-8}`); // Update planet's position
    }, 16); // Update every ~16ms (~60fps)
  }

mercury.addEventListener('click', startOrbit(mercury, 2.2, 0.015, 1));

venus.addEventListener('click', startOrbit(venus, 4, 0.005, 1.25));
  
earth.addEventListener('click', startOrbit(earth, 5.4, 0.003, 2.25));
  
mars.addEventListener('click', startOrbit(mars, 7, 0.0015, 2));

jupiter.addEventListener('click', startOrbit(jupiter, 9.3, 0.0008, 4));
  
saturn.addEventListener('click', startOrbit(saturn, 11.8, 0.0006, 3.75));

uranus.addEventListener('click', startOrbit(uranus, 13.8, 0.0004, 6));

neptune.addEventListener('click', startOrbit(neptune, 15.3, 0.0003, 5.7));