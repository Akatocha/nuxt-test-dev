<template>
  <div class="container">
    <div>
      <nuxt-link to="/products">Products</nuxt-link>
      <br />
      <nuxt-link to="/products-featch">Products featch</nuxt-link>
      <br />
      <nuxt-link to="/products-on-click">Products on click</nuxt-link>
      <br />
      <nuxt-link to="/users">Users</nuxt-link>
      <br />
      <nuxt-link to="/text-reverse">Text Revers</nuxt-link>
      <br />
      <nuxt-link to="/spiral">Spiral</nuxt-link>
      <br />
      <nuxt-link to="/cycle-list">List</nuxt-link>
      <br />
      <nuxt-link to="/scroll">Scroll v1</nuxt-link>
      <br />
      <nuxt-link to="/scroll-v2">Scroll v2</nuxt-link>
    </div>
    <div>
      <Logo />
      <h1 class="title">
        nuxt-test-p3
      </h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
