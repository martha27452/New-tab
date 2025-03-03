const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
loader.load('assets/shogun_cac.png', 
    function (texture) {
		const material = new THREE.SpriteMaterial({ map: texture });
		const sprite = new THREE.Sprite(material);
		scene.add(sprite);
		function animate() {
			requestAnimationFrame(animate);
			sprite.rotation.z += 0.01;
			renderer.render(scene, camera);
		}
		animate();
	},
	null,
	function (error) {
		console.error('An error occurred loading the texture:', error);
	}
);
