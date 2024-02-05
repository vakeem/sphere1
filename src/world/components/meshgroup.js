import {
    SphereGeometry,
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader
} from 'three';
    
function createMeshGroup() {
    const group = new Group();
    const textureLoader = new TextureLoader();

    const moonmap = textureLoader.load(
        '/public/assets/textures/moonmap.png',
      );

    const earthmap = textureLoader.load(
        '/public/assets/textures/earthmap.jpg',
    );

    const geometry = new SphereGeometry(2, 64, 64);

    const moonmaterial = new MeshStandardMaterial({
        map: moonmap
    });

    const earthmaterial = new MeshStandardMaterial({
        map: earthmap
    });

    const earth = new Mesh(geometry, earthmaterial);
    const moon = new Mesh(geometry, moonmaterial);

    moon.map = moonmap

    moon.position.set(3,3,3)

    moon.scale.multiplyScalar(0.25)

    group.add(earth, moon);

    const radiansPerSecond = MathUtils.degToRad(10);

    group.tick = (delta) => {
        earth.rotation.z += delta * radiansPerSecond;

        moon.rotation.y -= delta * radiansPerSecond;

        group.rotation.z -= delta * radiansPerSecond;
    };

    return group;
}
    
export { createMeshGroup };