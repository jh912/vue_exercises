<template>
  <div class="res">
    <p>我的名字叫:{{uname}}</p>
    <button @click="setUname">修改</button>
    <p>我的名字叫:{{uname}}</p>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
  computed:{
    ...mapState(['uname'])
  },
  methods:{
    ...mapMutations(['setUname']),
   
    setUname(name){
      name='changhao';
    }
    
    // setUname(payload){
    //   payload='wangwei';
    // }
  }

  
}
</script>
<style scoped>
p{
  font-size: 35px;
  color:red;
}
</style>