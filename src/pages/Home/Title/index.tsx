import styles from './index.less';

export const Title = () => {
  return (
    <div className={styles['title-wrapper']}>
      <div className="title">
        <h1>
          <div>
            <span>the</span>
            THEORY
            <span>of</span>
          </div>
          <div>EVERYTHING</div>
        </h1>
        <p>
          Tim Bevan, Eric Fellner,
          <br />
          Lisa Bruce & Anthony McCarten{' '}
        </p>
      </div>
    </div>
  );
};

export default Title;
