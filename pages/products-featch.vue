<template>
  <div class="test-box">
    <button @click="addCount">{{ count }}</button>
    <table>
      <template>
        <tr>
          <th>
            postId
          </th>
          <th>
            id
          </th>
          <th>
            name
          </th>
          <th>
            email
          </th>
          <th>
            body
          </th>
        </tr>
      </template>
      <template>
        <tr :key="i" v-for="(tr, i) in coments" :data="tr">
          <td>
            {{ tr.postId }}
          </td>
          <td>
            {{ tr.id }}
          </td>
          <td>
            {{ tr.name }}
          </td>
          <td>
            {{ tr.email }}
          </td>
          <td>
            {{ tr.body }}
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coments: [],
      count: 0
    };
  },
  methods: {
    addCount() {
      this.count++;
    }
  },
  async fetch() {
    let { data } = await this.$axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    this.coments = data;
  }
};
</script>

<style scoped>
.test-box {
  width: 800px;
}
</style>
