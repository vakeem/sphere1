import { World } from "./world/World";

export default function main() {
  const container = document.querySelector('#scene-container');

  const world = new World(container);

  world.start();
}
