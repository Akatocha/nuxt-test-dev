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
      count: 0
    };
  },
  methods: {
    addCount() {
      this.count++;
    }
  },
  async asyncData(context) {
    let res = await context.$axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return { coments: res.data };
    // for (let i = 0; i < res.data.length; i++) {
    //   if (i <= 122) {
    //     this.coments.push(res.data[i]);
    //   }
    // }
  }
};
</script>

<style scoped>
.test-box {
  width: 800px;
}
</style>
