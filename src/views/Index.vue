<template>
  <div class="index">
    <div class="c1">
    <ul>
      <li>我的京东</li>
      <li>我的钱包</li>
      <li>购物商城</li>
      <li>我的快递</li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

ul{
  list-style: none;
 text-align: center;
  width:500px;
  height: 40px;
  background-color: aquamarine;
}
li{
  float: left;
  width:100px;
  height:40px;
  background-color: aquamarine;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
}
li+li{
  margin-left: 5px;
}
li:hover{
  background-color: red;
}
li:active{
  background-color: blue;
}
</style>