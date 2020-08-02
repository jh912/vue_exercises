<template>
  <div>
    <div class="nav">
    <ul>
      <li><router-link to='/layout'>布局组件--Layout</router-link></li>
      <li><router-link to='/container'>布局容器--Container</router-link></li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li><router-link to='/lunbo'>轮播图</router-link></li>
    </ul>
    </div>
    <div class="log">
      <div><span>用户名:</span><input type="text" v-model="uname" placeholder="请输入用户名"></div>
      <div><span>密  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;码:</span><input   type="password" v-model="upwd" placeholder="请输入密码"></div>
      <button @click="login()">登录</button>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      uname:'',
      upwd:''
    }
  },
 
  methods:{
    // 绑定键盘按下事件的方法一
    // 如果用户想进入页面后提前点击button获取焦点后，再按下enter键才能触发事件的做法，比如想要快进
    //  han(e){
    //      if(e.keyCode=='13'){
    //        alert('你好');
    //    }
    //  },
   
    
    login(){
      if(this.uname=='jiaohao'&&this.upwd=='123456'){
        alert('登录成功');
        this.$router.push('/register')
      }else{
        alert('用户名或密码错误');
      }
    }
  },
  components: {
    
  }
  //  created(){
  //   // 做法二、对于用户一进页面就想按下键盘触发事件，我们需要在mounted里面监听绑定事件，这时候页面dom已经加载完毕
  //   document.onkeydown=function(e){
  //     let key=window.event.keyCode;
  //     if(key=='13'){
  //     // if(this.uname=='jiaohao'&&this.upwd=='123456'){
  //     //   alert('登录成功');
  //     //   this.$router.push('/index')
  //     // }else{
  //     //   alert('用户名或密码错误');
  //     // }
  //     // console.log(this.uname,this.upwd);
  //    alert(this.uname);
  //     } 
  // }
  //  }
}
</script>
<style scoped>
.nav{
  margin-bottom: 150px;
  height:60px;
 
}
ul{
 display: flex;
 flex-direction: row;
 justify-content: center;
 height: 60px;
  list-style: none;
}
a{
  text-decoration: none;
  color:#fff;
}
li:active{
  background-color: blue;
}
li{
  width:200px;
  height:60px;
  background-color: red;
  line-height: 60px;
  text-align: center;
}
li+li{
  margin-left: 10px;
}
.log>div{
border:1px solid gray;
width:270px;
text-align:left;
padding: 3px;
margin:0 auto;
}

.log{
  text-align: center;
  color:red;
  width:300px;
  margin:0 auto;
 
}
input[type=text]{
  width:200px;
  height: 20px;
  border:0;
  outline: 0;
}
.log>div:nth-child(2){
  margin-top:10px;
  margin-bottom: 10px;
}
input[type=password]{
  width:200px;
  height: 20px;
 outline: 0;
  border:0;
}
button{
  width:80px;
  height: 30px;
  line-height: 30px;
 background-color:#0aa1ed;
  color:#fff;
  outline: 0;
  border:0;
}
button:active{
  box-shadow: 0 0 2px red;
}


</style>
