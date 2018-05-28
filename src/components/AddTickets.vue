<template>
<div class="addTickets">
  <el-input
    v-model="train" placeholder="航班号">
  </el-input>

  <el-select v-model="start_airport" placeholder="起飞机场" class="airport">
    <el-option
      v-for="item in airports"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-date-picker
    v-model="start_date"
    type="datetime"
    placeholder="起飞时间" class="airport">
  </el-date-picker>

  <el-select v-model="end_airport" placeholder="到达机场" class="airport">
    <el-option
      v-for="item in airports"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-date-picker
    v-model="end_date"
    type="datetime"
    placeholder="到达时间" class="airport">
  </el-date-picker>

  <el-input
    v-model="price"  placeholder="价格">
  </el-input>

  <el-input
    v-model="airline"  placeholder="航空公司">
  </el-input>
  <el-button type="primary" class="add_btn" round @click="addTickets">添加</el-button>
</div>
</template>

<script>
  import qs from "qs"
    export default {
        name: "AddTickets",
      data(){
          return{
            "airports":[
              {
                "value":"苏南硕放国际机场",
                "label":"苏南硕放国际机场"
              },
              {
                "value":"上海浦东国际机场",
                "label":"上海浦东国际机场"
              },
              {
                "value":"成都双流国际机场",
                "label":"成都双流国际机场"
              }
            ],
            train:"",
            start_airport:"",
            start_date:"",
            end_airport:"",
            end_date:"",
            price:"",
            airline:""
          }
      },
      methods:{
          addTickets(){
            let params=qs.stringify({
              "train":this.train,
              "start_airport":this.start_airport,
              "start_date_string":this.formatDate(this.start_date),
              "end_airport":this.end_airport,
              "end_date_string":this.formatDate(this.end_date),
              "price":this.price,
              "airline":this.airline
            });

            this.$http.post("/tickets/add",params).then(response=>{
              if(response && response.data && 0==response.data.code){
                this.$message({
                   message: '添加航班成功！',
                   type: 'success'
                 });
              }

            }).catch(err=>{
              this.$message({
                message: '添加航班失败！',
                type: 'success'
              });
            });
          }
      }
    }
</script>

<style scoped>
@import "../assets/css/AddTickets.css";
</style>
