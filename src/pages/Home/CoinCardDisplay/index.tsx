import React from 'react';

import { MdArrowRightAlt } from 'react-icons/md';

import styles from './index.less';

import { Coin, coinToLogo } from '@/constants';

import CoinTextWithLogo from '../CoinTextWithLogo';

const LogoSvgProps = {
  width: '25',
  height: '25',
};
const BaseCard: React.FC<{
  coin1: Coin;
  coin2: Coin;
}> = ({ coin1, coin2 }) => {
  return (
    <div className="inner-card">
      <CoinTextWithLogo
        coin={coin1}
        svgProps={LogoSvgProps}
        textClassName="coin-text"
      />
      <div className="plus">+</div>
      <CoinTextWithLogo
        coin={coin2}
        svgProps={LogoSvgProps}
        textClassName="coin-text"
      />
    </div>
  );
};

const MintedCard: React.FC<{
  coin: Coin;
}> = ({ coin }) => {
  return (
    <div className="inner-card">
      <CoinTextWithLogo
        coin={coin}
        svgProps={LogoSvgProps}
        textClassName="coin-text"
      />
    </div>
  );
};

const CardStat: React.FC<{
  title: string;
  value: string;
}> = ({ title, value }) => {
  return (
    <div>
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
};

const ArrowWithText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="arrow-with-text">
      <span className="text"> {text}</span>
      <MdArrowRightAlt color="#000" size={30} viewBox="4 4 16 16" />
    </div>
  );
};

const Card: React.FC<{
  className?: string;
  coin: Coin;
}> = ({ className, coin }) => {
  const Svg = coinToLogo[coin];

  const classes = ['card'];
  if (className !== undefined) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')}>
      <div className="additional">
        <div className="user-card">
          <div className="name center">{coin}</div>
          <Svg width="110" height="110" />
        </div>
        <div className="more-info">
          <h1>CoinMarketCap Rank: 3</h1>
          <div className="stats">
            <CardStat title="Price" value="$1.00" />
            <CardStat title="Market Cap" value="$79,463,666,500" />
            <CardStat title="Volume (24h)" value="$57,026,923,078" />
            <CardStat title="Circulating Supply" value="79,415,206,825" />
          </div>
        </div>
      </div>
      <div className="general">
        <BaseCard coin1={coin} coin2="HAS" />
        <ArrowWithText text="Mint" />
        <MintedCard coin="USDH" />
        <ArrowWithText text="Redeem" />
        <BaseCard coin1={coin} coin2="HAS" />
      </div>
    </div>
  );
};

const CoinCardDisplay = () => {
  return (
    <div className={styles['user-card-provider']}>
      <div className="center">
        <div>
          <Card coin="USDT" />
          <Card coin="BUSD" />
        </div>
        <div>
          <Card className="green" coin="USDC" />
          <Card className="green" coin="DAI" />
        </div>
      </div>
    </div>
  );
};

export default CoinCardDisplay;
