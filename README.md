# SolarSystem
Based off of an image of the solar system (solar_system.jpg), I used Aframe to envision what that picture would look like if you could explore it. I added multiple sphere objects and adjusted their size and position to match the image as closely as possible. I used https://planetpixelemporium.com/planets.html to get the textures for all of the planets, and used https://www.solarsystemscope.com/textures/ to get the texture for the sun. I used JavaScript to make a function where each planet could have its own orbit, and I used animations to make the planets rotation as they orbitted the sun. I tried to make the orbits as close to the actual ratio between each planet's orbit speed, but also altered it so that the scene still looked natural.

Lastly, I played around with the lighting options to try to get the sun to appear like it is emitting as much light as possible, but also make it look like the original image where all of the planets are well lit. In order to do so I used a hemisphere light for the environment, and a point light inside of the sun to give the face of the planets closest to the sun a bit more light.

In order to give the Sun a glow that matched the original image, I had to use an glow image rather than the emissive attribute which was too evenly distributed. The only problem is that it only looks like the sun is glowing from the front and back since the image is 2d. I tried to create a billboard effect where the image follows the camera, but I could not get it to work in time.


