import { useEffect } from 'react';
import styles from './index.less';

const CardHover = () => {
  useEffect(() => {
    Vue.config.devtools = true;

    Vue.component('card', {
      template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
      mounted() {
        this.width = this.$refs.card.offsetWidth;
        this.height = this.$refs.card.offsetHeight;
      },
      props: ['dataImage'],
      data: () => ({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null,
      }),

      computed: {
        mousePX() {
          return this.mouseX / this.width;
        },
        mousePY() {
          return this.mouseY / this.height;
        },
        cardStyle() {
          const rX = this.mousePX * 30;
          const rY = this.mousePY * -30;
          return {
            transform: `rotateY(${rX / 3}deg) rotateX(${rY / 5}deg)`,
          };
        },
        cardBgTransform() {
          const tX = this.mousePX * -40;
          const tY = this.mousePY * -40;
          return {
            transform: `translateX(${tX / 3}px) translateY(${tY / 5}px)`,
          };
        },
        cardBgImage() {
          return {
            backgroundImage: `url(${this.dataImage})`,
          };
        },
      },

      methods: {
        handleMouseMove(e) {
          this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
          this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
        },
        handleMouseEnter() {
          clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
          this.mouseLeaveDelay = setTimeout(() => {
            this.mouseX = 0;
            this.mouseY = 0;
          }, 1000);
        },
      },
    });

    const app = new Vue({
      el: '#app',
    });
  }, []);
  return (
    <div className={styles.cardhover}>
      <div id="app" className="container">
        <card data-image="http://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=300&h=200&q=1&cs=tinysrgb&crop=">
          <h1 slot="header">Canyons</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
        <card data-image="http://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=300&h=200&q=1&cs=tinysrgb&crop=">
          <h1 slot="header">Beaches</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
        <card data-image="http://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=300&h=200&q=1&cs=tinysrgb&crop=">
          <h1 slot="header">Trees</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
        <card data-image="http://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=300&h=200&q=1&cs=tinysrgb&crop=">
          <h1 slot="header">Lakes</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
      </div>
    </div>
  );
};

export default CardHover;
