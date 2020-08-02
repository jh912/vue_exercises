<template>
  <div class="lunbo">
   <div>
     <span @click="prev">&lt;</span><span @click="next">&gt;</span>
     <img :src="images[current]" alt="">
     <ul>
       <li v-for="(item,index) of images" @click="current=index" :class="{cur:current==index}" :key="index"></li>
     </ul>
   </div>
 
  </div>
</template>
<script>

export default {
  data(){
    return {
      images:['https://img.88tph.com/crsl/43/b4/Q7StckvLEeqNQAAWPgbbFQ.jpg!fw1200','https://img.88tph.com/crsl/d3/b0/07C8KdnUEemSRwAWPgbbFQ.jpg!fw1200','https://img.88tph.com/crsl/2b/eb/K-v6s_VoEemInAAWPgbbFQ.jpg!fw1200','https://img.88tph.com/crsl/30/c6/MMb8wGHqEeqh-AAWPgbbFQ.jpg!fw1200'],
      current:0
    }
  },
  methods:{
    next(){
       if(this.current<3){
         this.current+=1;
       }else{
         this.current=0;
       }
    },
     prev(){
      if(this.current>0){
         this.current-=1;
       }else{
         this.current=3;
       }
    },
    play(){
      setInterval(
        this.next
      ,3000); 
      }
    },
  mounted(){
    this.play();
  }
 
 
  
}
</script>
<style scoped>
.lunbo>div{
  text-align: center;
  position: relative;
}
.lunbo>div span{
position: absolute;
width:50px;
height:80px;
background-color: #ddd;
opacity: 0.3;
text-align: center;
line-height: 80px;
color:#000;
}
.lunbo>div>span:first-child{
  top:100px;
  left:83px;
}
.lunbo>div>span:nth-child(2){
  top:100px;
  right:83px;
}
.lunbo>div span:active{
  background-color: azure;
}
ul{
  list-style: none;
  position: absolute;
  top:300px;
  left:42%;
}
li{
  float: left;
  width:25px;
  height: 25px;
  border-radius: 50%;
  background-color:#fff;
  opacity: 0.6;
}
li+li{
  margin-left: 15px;
}
.cur{
  background-color: #0aa1ed;
}




</style>