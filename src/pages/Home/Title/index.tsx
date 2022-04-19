import styles from './index.less';

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
          <OtherCoins isInvisible={true} />
          <span>USDH</span>
          <OtherCoins />
        </div>
        {/* <h1>ALGORITHMIC STABLECOIN PROTOCOL</h1> */}
        <h2>
          Hayek protocol provides a set of highly scalable, decentralized,
          algorithmic stablecoins for web 3.0.
        </h2>
      </div>
    </div>
  );
};

export default Title;
