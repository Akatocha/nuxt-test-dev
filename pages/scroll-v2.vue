<template>
  <div>
    <div class="box">
      <div class="nav"><span class="link" @click="toGo(1)">one</span><span @click="toGo(2)" class="link">two</span><span @click="toGo(3)" class="link">three</span><span @click="toGo(4)" class="link">four</span><span @click="toGo(5)" class="link">five</span></div>
      <section class=" sart-panel">
        ZERO
      </section>
      <div class="container">
        <section class="panel red">
          ONE
        </section>
        <section class="panel orange">
          TWO
        </section>
        <section class="panel purple">
          THREE
        </section>
        <section class="panel green">
          FOUR
        </section>
        <section class="panel gray">
          FIVE
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      startParent: null,
      endParent: null,
      mainWidth: null
    };
  },
  mounted() {
    let tl = gsap.timeline();
    gsap.utils.toArray(".panel").forEach((el, i) => {
      let xEnd = -100 * (i + 1) + 100 + "%";
      let xStart = -100 * (i + 1) + 200 + "%";
      tl.fromTo(
        el,
        {
          x: xStart,
          opacity: 0.4
        },
        {
          x: xEnd,
          opacity: 1
        }
      );
    });
    this.mainWidth = this.$el.querySelector(".container").offsetWidth / 2;
    this.startParent = this.$el.querySelector(".box").offsetTop;
    this.endParent = this.$el.querySelector(".box").offsetHeight + this.startParent;
    console.log(this.endParent);
    ScrollTrigger.create({
      animation: tl,
      trigger: ".box",
      start: "top top",
      end: this.mainWidth,
      scrub: true,
      pin: true
    });
  },
  methods: {
    toGo(index) {
      let start = this.startParent;
      let w = this.mainWidth;
      let s = w / 5;
      let tot = start + s * index;
      console.log(s);
      window.scroll(0, tot);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  bottom: 0;
  z-index: 2;
  position: fixed;
  display: flex;
  span {
    background: #000000ad;
    color: white;
    cursor: pointer;
    padding: 20px;
    font-weight: bold;
  }
}
.box {
  overflow-y: hidden;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
}
.container {
  width: 500%;
  height: 100vh;

  display: flex;
}

.panel {
  color: white;

  width: 100%;
  height: 100vh;
  will-change: transform;
  background-size: cover;
}
.sart-panel {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url("~assets/end.jpg");
  background-position: center center;
  background-size: cover;
}
.red {
  background-image: url("~assets/s-2.jpg");
}
.orange {
  background-image: url("~assets/s-1.jpg");
}
.purple {
  background-image: url("~assets/s-3.jpg");
}
.green {
  background-image: url("~assets/s-4.jpg");
}
.gray {
  background-image: url("~assets/s-6.jpg");
}
</style>
