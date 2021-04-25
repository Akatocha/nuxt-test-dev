<template>
    <div class=" step step-1">
      <div class="content">Lorem ipsum dolor sit amet.</div>
      <div class="child">
      <div class="step step-2"></div>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.step-1{
  transform: rotate(-90deg) scale(0.5);
}
.step{
  width: 1500px;
  height: 500px;
  display: flex;
}
.content{
  height: 500px;
  width: 1000px;
  background: rgb(219, 219, 219);
}
.child{
  position: relative;
  width: 500px;
  height: 500px;
}
.step-2{
  background: red;
  transform: rotate(90deg) scale(0.6);
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 500px 0;
}
</style>
