<template>
  <div class="main">
    <transition
      @leave="leave"
      @enter="enter"
      :name="nameTransition"
      mode="out-in"
    >
      <div class="container" v-if="step == 1" key="st1">
        Your Tasks
        <ul>
          <li @click="goToTask(item)" v-for="item in 10" :key="item">
            Lorem ipsum dolor sit amet. {{ item }}
          </li>
        </ul>
      </div>
      <div @click="goToList" v-if="step == 2" class="task" key="st2">
        {{ str }}
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function enterTask(e, done) {
  return gsap.from(e, {
    y: -200,
    opacity: 0,
    duration: 1,
    onComplete: done,
    clearProps: "all",
    ease: "bounce.out"
  });
}
function leaveTask(e, done) {
  let tl = gsap.timeline({
    onComplete: done,
    clearProps: "all"
  });
  let a = () =>
    gsap.to(e, {
      y: 100,
      duration: 1,
      ease: "bounce.out"
    });
  let b = () =>
    gsap.to(e, {
      transformOrigin: "100% 100%",
      rotate: -15,
      rotateX: 90,
      duration: 1.2,
      ease: "power4.in"
    });

  tl.add(a());
  tl.add(b());
  return tl;
}

export default {
  data() {
    return {
      str: "Lorem ipsum dolor sit amet.",
      step: 1,
      nameTransition: "fade"
    };
  },
  methods: {
    leave(e, done) {
      if (e.classList.contains("task")) {
        return leaveTask(e, done);
      } else {
        return gsap.to(e, {
          x: "-50%",
          opacity: 0,
          duration: 1,
          onComplete: done
        });
      }
    },

    enter(e, done) {
      if (e.classList.contains("task")) {
        return enterTask(e, done);
      } else {
        return gsap.from("ul li", {
          x: -200,
          opacity: 0,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "center"
          },
          onComplete: done,
          clearProps: "all"
        });
      }
    },
    goToList() {
      this.step = 1;
    },
    goToTask(i) {
      console.log(i);
      this.step++;
      this.str += " " + i;
    }
  },
  mounted() {
    let tl = gsap.timeline();
    let a = gsap.from("ul li", {
      duration: 0.6,
      stagger: 0.2,
      x: gsap.utils.wrap([-150, 150, 300]),
      opacity: 0,
      rotate: gsap.utils.wrap([-15, 15]),
      clearProps: "all"
    });
    tl.add(a);
    tl.set("ul li", { className: "hover" });
  }
};
</script>

<style lang="scss" scoped>
* {
  background: #333333;
  color: #d4e735;
}
.main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background: #333333;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #d4e735;
  padding-top: 50px;
  font-size: 40px;
}
.hover {
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
}
ul {
  margin-top: 20px;
  font-size: 25px;
  list-style: none;
  padding-left: 0;
  li {
    margin-bottom: 10px;
    cursor: pointer;
  }
}
.task {
  cursor: pointer;
  font-size: 50px;
}
</style>
