<template>
    <div style="width:200px">
      <el-upload
        class="upload-demo"
        action="/api/upload/test"
        multiple
        :limit="3">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
</template>

<script>
    export default {
        name: "FileUpload",
        data(){
          return{
          }
        }
    }
</script>

<style scoped>

</style>
