import styles from './index.less';

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div className="intro">
        <h1 className="intro-title">Stranger Things</h1>

        <p className="intro-text intro-text--can">
          The following demo is performance intensive, and will play audio. If
          you experience any issues, try sizing down your browser and
          refreshing.
          <br />
          <button className="intro-text-play" data-play>
            &#9654;
          </button>
        </p>

        <p className="intro-text intro-text--shouldnt">
          Unfortunately this demo uses many features only found in the latest
          version of Google Chrome. You can still run this, but it may not look
          as intended. Please try running it in Chrome for the best experience.
          <br />
          <a
            className="intro-text-button"
            href="https://www.google.com/chrome/browser/"
          >
            Download Chrome
          </a>
          <button className="intro-text-button" data-play>
            Play Anyway
          </button>
        </p>

        <p className="intro-text intro-text--cant">
          Unfortunately your browser doesn't support this demo. Please download
          Google Chrome, and try running it again.
          <br />
          <a
            className="intro-text-button"
            href="https://www.google.com/chrome/browser/"
          >
            Download Chrome
          </a>
        </p>

        <noscript>
          The following demo requires javascript to run. Please enable it and
          refresh the browser.
        </noscript>
      </div>

      <div className="viewport">
        <div className="scene">
          <div className="title title--full">
            <div className="title-word">
              <span className="title-word-letter" data-letter="S1">
                <span className="title-word-letter-large">S</span>
                <div className="titlebar titlebar--left"></div>
              </span>
              <span className="title-word-letter" data-letter="T1">
                T
              </span>
              <span className="title-word-letter" data-letter="R1">
                R
              </span>
              <span className="title-word-letter" data-letter="A">
                A
              </span>
              <span className="title-word-letter" data-letter="N1">
                N
              </span>
              <span className="title-word-letter" data-letter="G1">
                G
              </span>
              <span className="title-word-letter" data-letter="E">
                E
              </span>
              <span className="title-word-letter" data-letter="R2">
                <span className="title-word-letter-large">R</span>
                <div className="titlebar titlebar--right"></div>
              </span>
              <div className="titlebar titlebar--top"></div>
            </div>

            <div></div>

            <div className="title-word title-word--second">
              <span className="title-word-letter" data-letter="T2">
                T
              </span>
              <span className="title-word-letter" data-letter="H">
                H
              </span>
              <span className="title-word-letter" data-letter="I">
                I
              </span>
              <span className="title-word-letter" data-letter="N2">
                N
              </span>
              <span className="title-word-letter" data-letter="G2">
                G
              </span>
              <span className="title-word-letter" data-letter="S2">
                S
              </span>
            </div>
          </div>

          <div className="title title--scene title--scene0"></div>
          <div className="title title--scene title--scene1">
            <div className="title-word">
              <div className="title-word-letter" data-letter="A">
                A
              </div>
            </div>
          </div>
          <div className="title title--scene title--scene2">
            <div className="title-word">
              <div className="title-word-letter" data-letter="N">
                N
              </div>
            </div>
          </div>
          <div className="title title--scene title--scene3">
            <div className="title-word">
              <div className="title-word-letter" data-letter="R">
                R
              </div>
              <div className="title-word-letter" data-letter="I">
                I
              </div>
            </div>
          </div>
          <div className="title title--scene title--scene4">
            <div className="title-word">
              <div className="title-word-letter" data-letter="S">
                S
              </div>
              <div className="title-word-letter" data-letter="G">
                G
              </div>
            </div>
          </div>
          <div className="title title--scene title--scene5">
            <div className="title-word">
              <div className="title-word-letter" data-letter="R">
                R
              </div>
              <div className="title-word-letter" data-letter="S">
                S
              </div>
            </div>
          </div>
          <div className="title title--scene title--scene6">
            <div className="title-word">
              <div className="title-word-letter" data-letter="I">
                I
              </div>
              <div className="title-word-letter" data-letter="A">
                A
              </div>
              <div className="title-word-letter" data-letter="T">
                T
              </div>
              <div className="title-word-letter" data-letter="H">
                H
              </div>
              <div className="title-word-letter" data-letter="N">
                N
              </div>
              <div className="title-word-letter" data-letter="G">
                G
              </div>
            </div>
          </div>
        </div>

        <div className="credits">
          <div className="credits-group">
            <div className="credits-group-credit">
              A Netflix Original Series
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-credit" data-text="Winona Ryder">
              Winona Ryder
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-credit">David Harbour</div>
          </div>

          <div className="credits-group">
            <div className="credits-group-credit" data-text="Finn Wolfhard">
              Finn Wolfhard
            </div>
            <div
              className="credits-group-credit"
              data-text="Millie Bobby Brown"
            >
              Millie Bobby Brown
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-credit" data-text="Gaten Matarazzo">
              Gaten Matarazzo
            </div>
            <div className="credits-group-credit" data-text="Caleb McLaughlin">
              Caleb M<span>c</span>Laughlin
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-credit" data-text="Natalia Dyer">
              Natalia Dyer
            </div>
            <div className="credits-group-credit" data-text="Charlie Heaton">
              Charlie Heaton
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-credit" data-text="Cara Buono">
              Cara Buono
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-sub" data-text="And">
              And
            </div>
            <div className="credits-group-credit" data-text="Matthew Modine">
              Matthew Modine
            </div>
          </div>

          <div className="credits-group">
            <div
              className="credits-group-sub"
              data-text="Co-Executive Producer"
            >
              Co-Executive Producer
            </div>
            <div className="credits-group-credit" data-text="Iain Paterson">
              Iain Paterson
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-sub" data-text="Executive Producer">
              Executive Producer
            </div>
            <div className="credits-group-credit" data-text="Karl Gajdusek">
              Karl Gajdusek
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-sub" data-text="Executive Producers">
              Executive Producers
            </div>
            <div className="credits-group-credit" data-text="Cindy Holland">
              Cindy Holland
            </div>
            <div className="credits-group-credit" data-text="Brian Wright">
              Brian Wright
            </div>
            <div className="credits-group-credit" data-text="Matt Thunell">
              Matt Thunell
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-sub" data-text="Executive Producers">
              Executive Producers
            </div>
            <div className="credits-group-credit" data-text="Shawn Levy">
              Shawn Levy
            </div>
            <div className="credits-group-credit" data-text="Dan Cohen">
              Dan Cohen
            </div>
          </div>

          <div className="credits-group">
            <div className="credits-group-sub" data-text="Executive Producers">
              Executive Producers
            </div>
            <div
              className="credits-group-credit"
              data-text="The Duffer Brothers"
            >
              The Duffer Brothers
            </div>
          </div>

          <div className="credits-final">
            <div className="credits-group-sub" data-text="Created By">
              Created By
            </div>
            <div className="credits-group-credit" data-text="Will O'Beirne">
              Will O'Beirne
            </div>

            <a
              href="https://wbobeirne.github.io"
              target="_blank"
              className="credits-final-link credits-final-link--website"
            ></a>
            <a
              href="https://twitter.com/wbobeirne"
              target="_blank"
              className="credits-final-link credits-final-link--twitter"
            ></a>
            <a
              href="https://github.com/wbobeirne"
              target="_blank"
              className="credits-final-link credits-final-link--github"
            ></a>
            <a
              href="https://codepen.io/wbobeirne"
              target="_blank"
              className="credits-final-link credits-final-link--codepen"
            ></a>
          </div>
        </div>
      </div>

      <div className="vignette"></div>
      <div className="grain"></div>
      <div className="letterbox">
        <div className="letterbox-cover letterbox-cover--top"></div>
        <div className="letterbox-cover letterbox-cover--left"></div>
        <div className="letterbox-cover letterbox-cover--right"></div>
        <div className="letterbox-cover letterbox-cover--bottom"></div>
      </div>
    </div>
  );
};

export default Intro;
