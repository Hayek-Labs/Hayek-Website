import styles from './index.less';
import { ReactComponent as USDH } from '@/static_assets/logos/coins/white.svg';
const OtherCoins: React.FC<{ isInvisible?: boolean }> = ({ isInvisible }) => {
  return (
    <span className={`coin-titles${isInvisible ? ' invisible' : ''}`}>
      EURH, GBPH, JPYH...
    </span>
  );
};

export const Title = () => {
  return (
    <div className={styles['title-wrapper']}>
      <div className="title">
        {/* <h1>
          <div>
            <span>the</span>
            STABLECOIN&FOREX
            <span>for</span>
          </div>
          <div>GREAT SOCIETY of FREE MEN</div>
        </h1>
        <p>
          Pure on chain, Algorithmic Stablecoin, PERPETUAL FOREX, Flexible Pair,
          Highly Scalable
        </p> */}
        <div className="logos">
          {/* <OtherCoins isInvisible={true} /> */}
          <span className={styles.bigt}>
            <span className="iconfont">&#xe653;</span> USDH
            {/* <span className={styles.smallt}>EURH, GBPH, JPYH...</span> */}
          </span>

          {/* <OtherCoins /> */}
        </div>
        {/* <h1>ALGORITHMIC STABLECOIN PROTOCOL</h1> */}
        <h2>Hayek Tech designs the world’s decentralized stablecoin USDH.</h2>
      </div>
    </div>
  );
};

export default Title;
