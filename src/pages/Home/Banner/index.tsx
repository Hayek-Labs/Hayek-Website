import { useEffect, useRef } from 'react';
import Slinky from '../Slinky';
import World from './world';
import CardHover from '../CardHover';
import Button from '../Button';
import Title from '../Title';
import styles from './index.less';
import { ReactComponent as LogoSVG } from '@/static_assets/logos/coins/hayek-logo-yellow.svg';

const Logo = () => {
  return (
    <div className="hayek-logo">
      <LogoSVG width="115" height="100" viewBox="0 0 1500 500" />
    </div>
  );
};
const GoStarted = () => {
  return (
    <a target="_blank" href="https://app.hayek.tech/">
      <div className="gostarted">GET STARTED</div>
    </a>
  );
};
const Banner = () => {
  // useEffect(() => {
  //   const world = new World({
  //     canvas: document.querySelector('canvas.webgl'),
  //     cameraPosition: { x: 0, y: 0, z: 4.5 },
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });

  //   world.loop();
  // }, []);

  const startBtnRef = useRef<HTMLButtonElement>(undefined!);
  useEffect(() => {
    startBtnRef.current.click();
  }, []);

  return (
    <div className={styles.banner}>
      {/* <canvas className="webgl"></canvas> */}

      <Slinky />
      <Logo />
      <GoStarted />
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
      <div className="title-wrapper">
        <Title />
      </div>
      {/* <div className="card-hover">
        <CardHover />
      </div> */}
      <div className="btn">
        <div>
          <a
            href="https://docs.google.com/document/d/1jAYz02Y6Ewa6Urrg1nvqBmPafsA-nn5NsZe4_9pUHE8/edit?usp=sharing"
            target="_blank"
            title=""
          >
            WhitePaper
          </a>
          <a href="https://github.com/Hayek-Labs" target="_blank" title="">
            Github
          </a>
          <a href="https://twitter.com/hayek_tech/" target="_blank" title="">
            Twitter
          </a>
        </div>
        <div>
          <a href="https://discord.gg/HyuDJ3Juu6" target="_blank" title="">
            Discord
          </a>
          <a
            href="https://medium.com/@Hayek_Technology"
            target="_blank"
            title=""
          >
            Medium
          </a>
          <a href="https://t.me/HayekTech_Official" target="_blank" title="">
            Telegram
          </a>
          <a
            href="https://www.youtube.com/channel/UCBAluStWnlo0S9QI5Hi602w"
            target="_blank"
            title=""
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
