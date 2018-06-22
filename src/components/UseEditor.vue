<template>
<div>
  <UE :defaultMsg=defaultMsg :config=config ref="myUE"></UE>
  <el-button type="primary" class="getContent_btn" round @click="getUEContent">获取内容</el-button>
</div>

</template>

<script>
  import UE from './Editor.vue';
    export default {
        name: "UseEditor",
        components: {UE},
      data() {
        return {
          defaultMsg: '',
          config: {
            initialFrameWidth: null,
            initialFrameHeight: 350
          }
        }
      },
      methods: {
        getUEContent() {
          let content = this.$refs.myUE.getUEContent();
          this.$notify({
            title: '获取成功，可在控制台查看！',
            message: content,
            type: 'success'
          });
          console.log(content)
        }
      }
    }
</script>

<style scoped>

</style>
