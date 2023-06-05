<template>
  <el-container>
    <el-header class="header">
      <div class="width-style" id="header-div1">
        <LogoImg></LogoImg>
      </div>
      <div id="header-div2">
        <PersonInfo></PersonInfo>
      </div>
    </el-header>
    <el-container>
      <el-aside class="width-style">
        <SystemAdminAsideMenu></SystemAdminAsideMenu>
      </el-aside>
      <el-main class="main" :style="{ height: mainHeight + 'px' }">
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SystemAdminAsideMenu from "./SystemAdminAsideMenu.vue"
// import MallAdminAsideMenu from "./MallAdminAsideMenu.vue"
// import ShopAdminAsideMenu from "./ShopAdminAsideMenu.vue"
import LogoImg from "./Logo.vue"
import PersonInfo from "./PersonInfo.vue"

export default {
  name: "LayoutContainer",
  data() {
    return {
      mainHeight: ""
    }
  },
  components: {
    SystemAdminAsideMenu,
    LogoImg,
    PersonInfo,
    // MallAdminAsideMenu,
    // ShopAdminAsideMenu
  },
  mounted() {
    this.mainHeight = window.innerHeight - 60;
  }
}
</script>

<style scoped>
.header {
  background-color: antiquewhite;
  padding: 0;
}

.width-style {
  width: 200px;
}

.main {
  padding: 10px;
  overflow: scroll;
}

#header-div1 {
  background-color: cadetblue;
  float: left;
}

#header-div2 {
  background-color: antiquewhite;
  float: right;
  width: 150px;
}
</style>
