<template>
  <div>
    <h2>
      <router-link to="/users/create">Create User</router-link>
    </h2>
    <button @click="play">switch animation</button>
    <div class="main">
      <div class="box"></div>
    </div>
    <div class="users">
      <ul>
        <li @click="getUser(user.id)" v-for="user in users" :key="user.id">
          <span>
            {{ user.id }}
          </span>
          <span>
            {{ user.name }}
          </span>
          <span>
            {{ user.email }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      anim: null
    };
  },
  methods: {
    getUser(id) {
      this.$router.push(`/users/${id}`);
    },
    play() {
      if (this.anim.status === "pause") {
        this.anim.play();
        this.anim.status = "play";
      } else {
        this.anim.pause();
        this.anim.status = "pause";
      }
    }
  },
  mounted() {
    this.anim = gsap.to(".box", {
      duration: 3,
      x: 500,
      ease: "bounce.out",
      repeat: -1,
      yoyo: true,
      borderRadius: 5,
      rotate: 360
    });
    let tl = gsap.timeline();
    let userList = document.querySelectorAll(".users ul li");
    userList.forEach(e => {
      tl.from(e, {
        x: 400,
        y: 50,
        duration: 0.4,
        ease: "back.out(1.7)",
        opacity: 0
      });
    });
  },
  async asyncData(context) {
    let res = await context.$axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return { users: res.data };
  }
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  padding: 50px;
}
.box {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: red;
}
li {
  span {
    margin-right: 20px;
  }
  cursor: pointer;
  &:nth-child(odd) {
    background: rgb(197, 197, 197);
  }
}
</style>
