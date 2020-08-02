<template>
  <div class="container">
    <!-- container布局容器 -->
    <!-- <el-container> 的子元素只能是后四者，后四者的父元素也只能是 <el-container> -->
      <!-- <el-container>：外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。

<el-header>：顶栏容器。

<el-aside>：侧边栏容器。

<el-main>：主要区域容器。

<el-footer>：底栏容器。 -->
  <!-- container中子元素如果有header或者footer那么就一定是上下排布 -->
    <el-container>
      <el-header>Header</el-header>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
<!-- container中如果每页header或者footer，有aside或者main那么就是水平排布 -->
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
<!-- 多种变换的布局方式，小技巧 -->
<!-- 上，左右排布 -->
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
<!-- 上，左右排布 -->
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container:nth-child(4) .el-aside {
  line-height: 260px;
}
</style>