import { useEffect } from 'react';
import styles from './index.less';

const Second = () => {
  useEffect(() => {
    const $map = document.querySelector('.map');
    const $nodes = document.querySelectorAll('.node');
    const $introModal = document.getElementById('introModal');
    const $introModalBackground = document.getElementById(
      'introModalBackground',
    );
    const $introModalClose = document.getElementById('introModalClose');
    const $introModalTitle = document.getElementById('introModalTitle');
    const $introModalDescription = document.getElementById(
      'introModalDescription',
    );
    const $introModalIcon = document.getElementById('introModalIcon');
    const $introModalPrev = document.getElementById('introModalPrev');
    const $introModalNext = document.getElementById('introModalNext');

    let moduleData = [];
    let currentIndex = 0;
    let maxIndex = 6;

    // Close event binding
    [$introModalBackground, $introModalClose].forEach((elem) => {
      elem.addEventListener('click', () => {
        $introModal.classList.remove('is-active');
      });
    });

    $introModalPrev.addEventListener('click', () => {
      showModal(currentIndex > 0 ? currentIndex - 1 : maxIndex);
    });

    $introModalNext.addEventListener('click', () => {
      showModal(currentIndex < maxIndex ? currentIndex + 1 : 0);
    });

    // Bind events to all module nodes
    $nodes.forEach(($node) => {
      // Store module data in array
      moduleData[$node.dataset.index] = JSON.parse($node.dataset.info);

      // Hover
      ['mouseenter', 'mouseleave'].forEach((mouseEvent) => {
        $node.addEventListener(mouseEvent, () => {
          // Toggle pause
          [$map, $node, $node.parentNode].forEach(($element) => {
            $element.classList.toggle('pause');
          });
        });
      });

      // Click
      $node.addEventListener('click', () => {
        showModal($node.dataset.index);
      });
    });

    const showModal = (index) => {
      currentIndex = Number(index);
      const data = moduleData[currentIndex];

      $introModalTitle.innerText = data.subtitle || data.title;
      $introModalDescription.innerText = data.description;
      $introModalIcon.className = `fal fa-${data.icon} fa-10x`;
      $introModal.classList.add('is-active');

      if (isOverflowing($introModalDescription)) {
        $introModalDescription.classList.add('is-overflowing');
      } else {
        $introModalDescription.classList.remove('is-overflowing');
      }
    };

    const isOverflowing = (elem) => {
      return elem.scrollHeight > elem.clientHeight;
    };
  }, []);
  return (
    <div className={styles.second}>
      <div className="map circle-graphic">
        <div className="layer ellipses">
          <div className="ellipsis"></div>
          <div className="ellipsis"></div>
          <div className="ellipsis"></div>
          <div className="circle is-cover"></div>
        </div>
        <div className="layer">
          <div className="circle is-second"></div>
        </div>
        <div className="layer">
          <div className="circle is-third"></div>
        </div>
        <div className="layer">
          <div className="module">
            <div
              className="circle node"
              data-info='{"title":"game","icon":"gamepad","description":"INNOU launches a Crypto Currency use case, where users can playfully gather and earn cryptocurrencies in a GPS map-based game. For businesses using the digital layer we are placing over the real world is a completely new form of marketing, which ultimately leads to more effective and more successful advertisement and marketing campaigns. On the user’s side it offers an innovative gaming experience combined with a revolutionized approach of purchasing.\n    "}'
              data-index="1"
            >
              <div className="subtitle">innou</div>
              <h4 className="title is-4">game</h4>
            </div>
            <div className="leaf"></div>
          </div>
          <div className="module">
            <div
              className="circle node"
              data-info='{"title":"channel","icon":"tv-retro","description":"For providing content and information about the latest crypto technology, sustainable innovation and updates from the ecosystem we launch our own INNOU CHANNEL. Before the INNOU Channel is launched in the INNOU mobile app we will provide streams on web video and social media platforms. Once the mobile app is launched users can send their individually created content and earn money in return. The long-term vision is to become a global media library filled with high quality content.\n    "}'
              data-index="2"
            >
              <div className="subtitle">innou</div>
              <h4 className="title is-4">channel</h4>
            </div>
            <div className="leaf"></div>
          </div>
          <div className="module">
            <div
              className="circle node"
              data-info='{"title":"freequency","icon":"broadcast-tower","description":"This module supports every medium that focuses on audio-based content. A variety of channels allows INNOU and its users to upload their own content. Artists can receive direct payment for their work by donations from other users. In addition to that other user’s comments can be rewarded with donations as well. With an ‘on demand’ service INNOU is aiming to provide a wide range of music, free to listen for the community.\n    "}'
              data-index="3"
            >
              <div className="subtitle">innou</div>
              <h4 className="title is-4">freequency</h4>
            </div>
            <div className="leaf"></div>
          </div>
          <div className="module">
            <div
              className="circle node"
              data-info='{"title":"chat","icon":"comments","description":"For communication within the INNOU ecosystem we will offer an encrypted chat function. Connecting people all over the word, making friends and building up a striving community together is our vision. The chat is integrated in all INNOU modules. It can be used to share game achievements and instant chatting for all purposes. With hashtags and links users can discuss prices, money transfers and any content within the app\n    "}'
              data-index="4"
            >
              <div className="subtitle">innou</div>
              <h4 className="title is-4">chat</h4>
            </div>
            <div className="leaf"></div>
          </div>
          <div className="module">
            <div
              className="circle node"
              data-info='{"title":"social hub","icon":"users","description":"For our INNOU Ecosystem to be complete we are building a social platform where users can communicate, connect and share their ideas. Users can choose if they want their profile to be used for casual social media experience or freelancing and promotion or posting and publishing their content. This can be anything from art to blogs, journalistic reports, music and any other mediums of work. To foster intrinsic motivation annual awards for the best publications will be submitted on our platform. Moreover, we will launch our first newspaper, which will be authored solely by members of the INNOU community.\n    "}'
              data-index="5"
            >
              <div className="subtitle">innou</div>
              <h4 className="title is-4">social hub</h4>
            </div>
            <div className="leaf"></div>
          </div>
          <div className="module">
            <div
              className="circle node"
              data-info='{"title":"token","icon":"coins","description":"INNOU is the newest currency in the crypto market. Its availability will stretch throughout our Pre-ICO and ICO phase. Our purpose is to create opportunities of token utilization in everyday lives and encourage the empowerment of a wide global market. Further details for INNOU Token, Smart Contract and Pre-ICO and ICO formula are stated under the ‘INNOU Token’ chapter.\n    "}'
              data-index="6"
            >
              <div className="subtitle">innou</div>
              <h4 className="title is-4">token</h4>
            </div>
            <div className="leaf"></div>
          </div>
        </div>
        <div className="layer">
          <div
            className="circle node is-main"
            data-info='{"title":"INNOU ID","subtitle":"Crypto wallet","icon":"wallet","main":true,"description":"Our integrated wallet allows users to directly do in-app transactions. Within the game the collected cryptocurrencies will automatically be stored in the INNOU wallet. Additionally, users can also make purchases at real shops that accept crypto-currencies. The wallet will feature TOP 20 cryptocurrencies to date, including our green coin for building the trees.\n    "}'
            data-index="0"
          >
            <h2 className="title is-2">INNOU ID</h2>
            <div className="subtitle is-strong">Crypto wallet</div>
          </div>
        </div>
      </div>
      <div className="modal" id="introModal">
        <div className="modal-background" id="introModalBackground"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title">
              <span>INNOU </span>
              <span className="is-strong" id="introModalTitle"></span>
            </div>
            <button
              className="delete"
              id="introModalClose"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="columns">
              <div className="column">
                <p id="introModalDescription"></p>
              </div>
              <div className="column is-flex">
                <i id="introModalIcon"></i>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot has-content-centered">
            <button className="button" id="introModalPrev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="button" id="introModalNext">
              <i className="fas fa-chevron-right"></i>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Second;
