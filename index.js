const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let sprit;
const loader = new THREE.TextureLoader();
loader.load('assets/shogun_cac.png', 
    function (texture) {
	        const material = new THREE.SpriteMaterial({ map: texture });
                const sprite = new THREE.Sprite(material);
	        const frustumHeight = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
                const frustumWidth = frustumHeight * camera.aspect;
	        sprite.scale.set(frustumWidth, frustumHeight, 1);
		scene.add(sprite);
		function animate() {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		}
		animate();
	}
);

window.addEventListener('resize', () => {
	const frustumHeight = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const frustumWidth = frustumHeight * camera.aspect;
        sprite.scale.set(frustumWidth, frustumHeight, 1);
});
