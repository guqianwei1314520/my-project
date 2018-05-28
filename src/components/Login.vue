<template>
  <div class="login_div">
    <div>登录</div>
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
    <el-button type="primary" class="login_btn" round @click="login">登录</el-button>
  </div>
</template>

<script>
    import qs from 'qs';
    export default {
        name: "Login",
        data(){
          return{
            username:"",
            password:""
          }
      },
      mounted(){
        /*let token=sessionStorage.getItem("token");*/
        let token=this.$cookie.get('token');
        if(token){
          this.$router.push("/ticketsList")
        }
    },
      methods:{
          login(){
            let data = qs.stringify({
              "username":this.username,
              "password":this.password
            });
            this.$http.post("/login/userLogin",data).then((response)=>{
               if(response && response.data && 0==response.data.code){
                /* sessionStorage.setItem("token",response.data.token);*/
                 this.$cookie.set('token', response.data.token, { expires: '15M' });
                 this.$cookie.set("roleId",response.data.roleId, { expires: '15M' });
                 /*this.$message({
                   message: '登录成功！'+response.data.token,
                   type: 'success'
                 });*/
                 if(1==response.data.roleId){
                   this.$router.push("/addTickets")
                 }else if(2==response.data.roleId){
                   this.$router.push("/ticketsList")
                 }

               }else{
                 this.$message({
                   message: '登录失败！',
                   type: 'error'
                 });
               }
            }).catch(err => {
               this.$message({
                message: "失败！",
                type: "error",
              });
            });

          }
      }
    }
</script>

<style scoped>
  @import '../assets/css/Login.css';

</style>
