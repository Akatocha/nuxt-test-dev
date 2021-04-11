<template>
  <div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      let res = await context.$axios.get(
        `https://jsonplaceholder.typicode.com/users/${context.params.id}`
      );
      return { user: res.data };
    } catch (error) {
      console.log(error);
      context.redirect(302, "/users");
    }
  }
};
</script>

<style lang="scss" scoped></style>
