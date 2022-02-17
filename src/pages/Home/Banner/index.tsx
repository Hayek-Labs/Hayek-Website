import { useEffect } from 'react';
import World from './world';
import styles from './index.less';
const Banner = () => {
  useEffect(() => {
    const world = new World({
      canvas: document.querySelector('canvas.webgl'),
      cameraPosition: { x: 0, y: 0, z: 4.5 },
    });

    world.loop();
  }, []);
  return (
    <div className={styles.banner}>
      <canvas className="webgl"></canvas>
      <h1>
        <small>With</small> Seasonal Wishes <small>from</small> PeHaa
      </h1>
      <button id="play-music" type="button">
        Play music
      </button>
      <footer>
        <p>Built with Three.js and GSAP.</p>
        <p>
          Inspired by{' '}
          <a href="https://threejs-audio-reactive-visual.netlify.app/">
            this demo by Francesco Michelini
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Banner;
