import { AmbientLight, DirectionalLight, HemisphereLight} from 'three';

function createLights() {
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        1, // intensity
      );
    const mainLight = new DirectionalLight('white', 1)

    mainLight.position.set(10,100,10)

    return { ambientLight, mainLight };
}

export { createLights };