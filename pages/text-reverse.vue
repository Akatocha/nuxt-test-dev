<template>
  <div class="container">
    <div class="text-box">
      dw
      <div class="span" v-for="(item, index) in text" :key="index">
        {{ item }}
      </div>
    </div>
    <button @click="startTextAnim">Click me!</button>
    <div class="h1">startTextAnim</div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      text: "TextReverse",
      canAnimate: true
    };
  },
  methods: {
    startTextAnim() {
      if (!this.canAnimate) return null;
      this.canAnimate = false;
      let spanArr = this.$el.querySelectorAll(".text-box .span");
      let tl = gsap.timeline({
        repeatRefresh: true,
        onComplete: () => {
          console.log("complete");
          this.canAnimate = true;
        }
      });

      let anim1 = gsap.from(".text-box .span", {
        rotateX: 360,
        duration: 1,
        stagger: {
          each: 0.2,
          from: 4
        }
      });
      let anim2 = gsap.to(".text-box .span", {
        x: 60,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.2,
          from: "end"
        }
      });
      let anim3 = gsap.to(".text-box .span", {
        x: 0,
        duration: 0.5,
        // delay: 0.5,
        ease: "elastic.out(1, 0.3)"
        // stagger: {
        //   each: 0.1,
        //   from: "start"
        // }
      });
      tl.add(anim1);
      tl.add(anim2);
      tl.add(anim3);

      //!! Obj Gsap
      // let obj = {
      //   app: 0
      // };
      // gsap.to(obj, {
      //   app: 50,
      //   onUpdate: () => {
      //     console.log(obj.app);
      //   }
      // });

      //!! Timeline
      // spanArr.forEach((e, i) => {
      //   let minusStep = "-=0.6";
      //   if (i === 0) minusStep = "";

      //   tl.from(
      //     e,
      //     {
      //       duration: 0.8,
      //       rotateX: 360
      //     },
      //     minusStep
      //   );
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
.text-box {
  display: flex;
  justify-content: center;
  font-size: 180px;
  font-weight: 600;
  letter-spacing: 5px;
  padding: 50px;
}
.span {
  transform-origin: 0 60%;
  &:nth-child(1) {
    color: rgb(81, 162, 255);
  }
  &:nth-child(5) {
    color: rgb(81, 162, 255);
  }
  // color: #000;
  // background: #fff;
  // mix-blend-mode: multiply;
}

.h1 {
  font-size: 150px;
  display: flex;
  position: relative;
  color: #000;
  background: #fff;
  mix-blend-mode: multiply;
  &::before {
    mix-blend-mode: screen;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      #23966c,
      #faaa54,
      #e23b4a,
      #db0768,
      #360670
    );
    pointer-events: none;
  }
}
button {
  padding: 22px 40px;
  background: linear-gradient(
    to right,
    #23966c,
    #faaa54,
    #e23b4a,
    #db0768,
    #360670
  );
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-left: 200px;
}
</style>
