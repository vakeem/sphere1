import { createCamera } from './components/camera.js';
import { createMeshGroup } from './components/meshgroup.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createAxesHelper, createGridHelper } from './components/helpers.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/loop.js';

let scene;
let controls;
let camera;
let renderer;
let loop;


class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();
    const meshgroup = createMeshGroup()

    loop.updatables.push(controls,meshgroup);

    scene.add(ambientLight, mainLight, meshgroup);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
  
  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

export { World };
