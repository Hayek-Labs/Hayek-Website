import { useEffect } from 'react';
import styles from './index.less';

const Second = () => {
  return (
    <div className={styles.second}>
      <div id="second">
        <div id="outline" className="centering angle">
          <div id="circuit"></div>
          <a
            href="https://codepen.io/Xpressive_Team/full/tDHgb"
            target="_blank"
            className="ad v-ad"
          >
            <span>presented by</span>
            <span>Codepen</span>
          </a>
          <a
            href="https://twitter.com/Xpressive_Team"
            target="_blank"
            className="ad h-ad"
          >
            <span>Follow Us On Twitter!</span>
          </a>
          <div className="cars">
            <div id="car2" className="car-base run-base run2 ">
              <div className="chassis"></div>
              <div className="front-window"></div>
              <div className="bonnet"></div>
              <div className="light light-left"></div>
              <div className="light light-right"></div>
              <div className="plate">Xpressive</div>
              <div className="plate plate-back">Xpressive</div>
              <div className="bamper"></div>
              <div className="handle"></div>
              <div className="back-sheet"></div>
              <div className="sheet-base sheet1"></div>
              <div className="sheet-base sheet2"></div>
              <div className="ria"></div>
              <div className="ria-top"></div>
              <div className="wing left-wing"></div>
              <div className="wing right-wing"></div>
              <div className="side-bamper side-bamper-left"></div>
              <div className="side-bamper side-bamper-right"></div>
              <div className="side-bamper side-bamper-left-back"></div>
              <div className="side-bamper side-bamper-right-back"></div>
              <div className="side-door side-door-left"></div>
              <div className="side-door side-door-right"></div>
              <div className="tires-front">
                <div className="tire tire-left">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
                <div className="tire tire-right">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tires-back">
                <div className="tire tire-left-back">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
                <div className="tire tire-right-back">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="car1" className="car-base run-base">
              <div className="chassis"></div>
              <div className="front-window"></div>
              <div className="bonnet"></div>
              <div className="light light-left"></div>
              <div className="light light-right"></div>
              <div className="plate">Xpressive</div>
              <div className="plate plate-back">Xpressive</div>
              <div className="bamper"></div>
              <div className="handle"></div>
              <div className="back-sheet"></div>
              <div className="sheet-base sheet1"></div>
              <div className="sheet-base sheet2"></div>
              <div className="ria"></div>
              <div className="ria-top"></div>
              <div className="wing left-wing"></div>
              <div className="wing right-wing"></div>
              <div className="side-bamper side-bamper-left"></div>
              <div className="side-bamper side-bamper-right"></div>
              <div className="side-bamper side-bamper-left-back"></div>
              <div className="side-bamper side-bamper-right-back"></div>
              <div className="side-door side-door-left"></div>
              <div className="side-door side-door-right"></div>
              <div className="tires-front">
                <div className="tire tire-left">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
                <div className="tire tire-right">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tires-back">
                <div className="tire tire-left-back">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
                <div className="tire tire-right-back">
                  <div className="tire-side"></div>
                  <div className="tire-side"></div>
                  <div className="piller-face">
                    <div className="r360-1">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-2">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-3">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                    <div className="r360-4">
                      <div className="tire-grip r1"></div>
                      <div className="tire-grip r2"></div>
                      <div className="tire-grip r3"></div>
                      <div className="tire-grip r4"></div>
                      <div className="tire-grip r5"></div>
                      <div className="tire-grip r6"></div>
                      <div className="tire-grip r7"></div>
                      <div className="tire-grip r8"></div>
                      <div className="tire-grip r9"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
