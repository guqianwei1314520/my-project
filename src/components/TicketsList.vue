<template>
<div>
  <el-table
    :data="tickets"
    stripe border
    >
    <el-table-column
      prop="airline"
      label="航空公司"
      header-align="center"
    >
    </el-table-column>
    <el-table-column
      prop="start_airport"
      label="始发机场"
      header-align="center"
      >
    </el-table-column>
    <el-table-column
      prop="start_date_string"
      label="始发时间"
      header-align="center"
    >
    </el-table-column>
    <el-table-column
      prop="end_airport"
      label="到达机场"
      header-align="center"
    >
    </el-table-column>
    <el-table-column
      prop="end_date_string"
      label="到达时间"
      header-align="center"
    >
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    export default {
        name: "TicketsList",
        data(){
          return{
            tickets:[]
          }
        },
        mounted(){
          this.queryTickects();
        },
        methods:{
          queryTickects(){
            this.$http.get("/tickets/all",{
              headers:{
                "token":this.$cookie.get('token')/*sessionStorage.getItem("token")*/
              }
            }).then((response)=>{
              if(response && response.data && 0==response.data.code){
                this.tickets=response.data.data;
                /*sessionStorage.setItem("token",response.data.token);*/
                this.$cookie.set("token",response.data.token,{ expires: '15M' });
              }else{
               /* this.$message({
                  message: "失败！",
                  type: "error",
                });*/
               /*sessionStorage.removeItem("token");*/
                this.$cookie.delete('token');
                this.$router.push("/login");
              }

            }).catch((err)=>{
              /*sessionStorage.removeItem("token");*/
              this.$cookie.delete('token');
              this.$router.push("/login");
            });
          }
       }
    }
</script>

<style scoped>

</style>
