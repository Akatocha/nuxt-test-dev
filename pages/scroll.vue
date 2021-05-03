<template>
  <div class="all">
    <div class="box">
      <div class="nav"><span class="link" @click="toGo(1)">one</span><span @click="toGo(2)" class="link">two</span><span @click="toGo(3)" class="link">three</span><span @click="toGo(4)" class="link">four</span><span @click="toGo(5)" class="link">five</span><span @click="toGo(6)" class="link">six</span></div>
      <div class="main">
        <section class="s-1">
          <h3>Title</h3>
        </section>
        <section id="two" class="s-2">
          <h3>Title</h3>
        </section>
        <section class="s-3">
          <h3>Title</h3>
        </section>
        <section class="s-4">
          <h3>Title</h3>
        </section>
        <section class="s-5">
          <h3>Title</h3>
        </section>
        <section class="s-6">
          <h3>Title</h3>
        </section>
      </div>
    </div>
    <h1 @click="goToTop">BACK TO TOP</h1>
    <section class="end">
      <h3>End</h3>
    </section>
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
  methods: {
    toGo(index) {
      let start = this.startParent;
      console.log("parentStartHeight", start);
      let c = this.$el.querySelector("section").offsetWidth;
      console.log("widthEl", c);
      let w = this.mainWidth;
      let s = w / 6;
      console.log("pEl", w);
      console.log("wEl", s);
      // let tot = start + s * index;
      let tot = 400 * index - 400;
      console.log("tot", tot);
      window.scroll(0, tot);
    },
    goToTop() {
      window.scroll(0, 0);
    }
  },
  mounted() {
    this.startParent = this.$el.querySelector(".box").offsetTop;
    this.endParent = this.$el.querySelector(".box").offsetHeight + this.startParent;
    console.log("endPar", this.endParent);
    const tl = gsap.timeline();
    tl.fromTo(".s-2", { x: "-100%", y: "100%" }, { y: 0 });
    tl.fromTo(".s-3", { x: "-100%" }, { x: "-200%" });
    tl.fromTo(".s-4", { x: "-400%" }, { x: "-300%" });
    tl.fromTo(".s-5", { x: "-300%", y: "-100%" }, { x: "-400%", y: 0 });
    tl.fromTo(".s-6", { x: "-500%", scale: 0.5, y: "100%" }, { scale: 1, y: 0 });

    this.mainWidth = this.$el.querySelector(".main").offsetWidth / 2;
    console.log("mwmw", this.mainWidth);
    document.addEventListener("scroll", e => {
      // console.log(window.scrollY);
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".box",
      start: "top top",
      // end: this.mainWidth,
      end: 2000,
      scrub: true,
      pin: true
    });
  }
};
</script>

<style lang="scss" scoped>
h1 {
  background: #000;
  color: #fff;
  height: 10vh;
}
.nav {
  top: 0;
  display: flex;
  z-index: 2;
  height: 40px;
  position: fixed;
  background: rgba(0, 0, 0, 0.26);
  width: 100%;
  color: #fff;
  font-weight: bold;
  span {
    cursor: pointer;
    padding: 8px;
  }
}
.box {
  overflow-y: hidden;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
}
.main {
  background: #000;
  min-width: 600vw;
  height: 100vh;
  display: flex;
}
section {
  background-color: #000;
  color: #fff;
  padding: 50px;
  width: 100%;
  height: 100vh;
  will-change: transform;
  background-size: cover;
}
.end {
  background-image: url("~assets/end.jpg");
  background-position: center center;
  height: 50vh;
}
.s-1 {
  background-image: url("~assets/s-2.jpg");
  color: white;
}
.s-2 {
  background-image: url("~assets/s-1.jpg");
  color: white;
}
.s-3 {
  background-image: url("~assets/s-3.jpg");
  color: white;
}
.s-4 {
  background-image: url("~assets/s-4.jpg");
  color: white;
}
.s-5 {
  background-image: url("~assets/s-5.jpg");
  color: white;
}
.s-6 {
  background-image: url("~assets/s-6.jpg");
  color: white;
}
</style>
