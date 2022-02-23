import { useEffect, useRef } from 'react';
import World from './world';
import CardHover from '../CardHover';
import Button from '../Button';
import styles from './index.less';

const Banner = () => {
  useEffect(() => {
    const world = new World({
      canvas: document.querySelector('canvas.webgl'),
      cameraPosition: { x: 0, y: 0, z: 4.5 },
      width: window.innerWidth,
      height: window.innerHeight,
    });

    world.loop();
  }, []);

  const startBtnRef = useRef<HTMLButtonElement>(undefined!);
  useEffect(() => {
    startBtnRef.current.click();
  }, []);

  return (
    <div className={styles.banner}>
      <canvas className="webgl"></canvas>
      <Button
        render={
          <button
            id="play-music"
            className="button effect effect-2 w-m"
            ref={startBtnRef}
          >
            Start
          </button>
        }
      />
      <div className="card-hover">
        <CardHover />
      </div>
    </div>
  );
};

export default Banner;
