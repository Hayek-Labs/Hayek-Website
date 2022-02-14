import { useEffect } from 'react';
import styles from './index.less';

const TimeLine = () => {
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
            checked
          />
          <div className="relative">
            <label for="work5">Lorem ipsum dolor sit amet</label>
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
            <label for="work4">Lorem ipsum dolor sit amet</label>
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
            <label for="work3">Lorem ipsum dolor sit amet</label>
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
            <label for="work2">Lorem ipsum dolor sit amet</label>
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
            <label for="work1">Lorem ipsum dolor sit amet</label>
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
