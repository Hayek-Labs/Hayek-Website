import { useEffect, useRef } from 'react';
import styles from './index.less';

const TimeLine = () => {
  const firstRef = useRef();
  useEffect(() => {
    if (firstRef.current) {
      firstRef.current.click();
    }
  }, []);
  return (
    <div className={styles.timeline}>
      <h2>CSS3 Timeline</h2>
      <p>
        Please set the $vertical variable to false to see the horizontal
        version.
      </p>
      <ul id="timeline">
        <li className="work">
          <input
            className="radio"
            id="work5"
            name="works"
            type="radio"
            ref={firstRef}
          />
          <div className="relative">
            <label htmlFor="work5">Lorem ipsum dolor sit amet</label>
            <span className="date">12 May 2013</span>
            <span className="circle"></span>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
            </p>
          </div>
        </li>
        <li className="work">
          <input className="radio" id="work4" name="works" type="radio" />
          <div className="relative">
            <label htmlFor="work4">Lorem ipsum dolor sit amet</label>
            <span className="date">11 May 2013</span>
            <span className="circle"></span>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
            </p>
          </div>
        </li>
        <li className="work">
          <input className="radio" id="work3" name="works" type="radio" />
          <div className="relative">
            <label htmlFor="work3">Lorem ipsum dolor sit amet</label>
            <span className="date">10 May 2013</span>
            <span className="circle"></span>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
            </p>
          </div>
        </li>
        <li className="work">
          <input className="radio" id="work2" name="works" type="radio" />
          <div className="relative">
            <label htmlFor="work2">Lorem ipsum dolor sit amet</label>
            <span className="date">09 May 2013</span>
            <span className="circle"></span>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
            </p>
          </div>
        </li>
        <li className="work">
          <input className="radio" id="work1" name="works" type="radio" />
          <div className="relative">
            <label htmlFor="work1">Lorem ipsum dolor sit amet</label>
            <span className="date">08 May 2013</span>
            <span className="circle"></span>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea
              necessitatibus quo velit natus cupiditate qui alias possimus ab
              praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis
              voluptate excepturi rem veritatis eum aliquam qui laborum non
              ipsam ullam tempore reprehenderit illum eligendi cumque mollitia
              temporibus! Natus dicta qui est optio rerum.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;
