/**
 * Particles.js
 */

var init = function() {

  // DOM
  var container = document.getElementById('container');

  // Scene
  var scene = new THREE.Scene();

  // Camera
  var width  = window.innerWidth;
  var height = window.innerHeight;
  var fov    = 60;
  var aspect = width / height;
  var near   = 1;
  var far    = 500;
  var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 50);

  // Objects
  var pa
  var triangleTexture   = new THREE.TextureLoader().load('/images/three/triangle.png');
  var squareTexture = new THREE.TextureLoader().load('/images/three/square.png');
  var circleTexture = new THREE.TextureLoader().load('/images/three/circle.png');
  var parameters = {
    triangle: { size: 10, color:0xffff99, map: triangleTexture, blending: THREE.NoBlending, transparent: true, alphaTest: .9 },
    square: { size: 10, color:0xe6ffff, map: squareTexture, blending: THREE.NoBlending, transparent: true, alphaTest: .9 },
    circle: { size: 10, color:0xf7f7f7, map: circleTexture, blending: THREE.NoBlending, transparent: true, alphaTest: .9 }
  };

  var squaresGeometry = createGeometry(500);
  var squaresMaterial = new THREE.PointsMaterial(parameters.square);
  var squares         = new THREE.Points(squaresGeometry, squaresMaterial);

  var trianglesGeometry = createGeometry(1000);
  var trianglesMaterial = new THREE.PointsMaterial(parameters.triangle);
  var triangles         = new THREE.Points(trianglesGeometry, trianglesMaterial);

  var circlesGeometry = createGeometry(300);
  var circlesMaterial = new THREE.PointsMaterial(parameters.circle);
  var circles         = new THREE.Points(circlesGeometry, circlesMaterial);

  scene.add(squares, triangles, circles);

  // Renderer
  var renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  animate();

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    triangles.rotation.x += .001;
    triangles.rotation.y += .0003;
    triangles.rotation.z += .0001;

    squares.rotation.x -= .0001;
    squares.rotation.y -= .0002;
    squares.rotation.z -= .001;

    circles.rotation.x -= .0005;
    circles.rotation.y -= .0002;
    circles.rotation.z -= .001;

    renderer.render(scene, camera);
  }

  function resize() {
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function createGeometry(count) {
    var geometry = new THREE.Geometry();

    for (var i = 0; i < count; i++) {
      var x = Math.random() * 1000 - 500;
      var y = Math.random() * 1000 - 500;
      var z = Math.random() * 1000 - 500;
      var particle = new THREE.Vector3(x, y, z);
      particle.velocity = new THREE.Vector3(0, -Math.random(), 0);
      geometry.vertices.push(particle);
    }

    return geometry;
  }

  window.addEventListener('resize', resize, false);
};

window.addEventListener('load', init, false);
