<template>
  <v-app>
    <v-app-bar app dark class="d-flex;width:100%;">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="flex:1">demo-app</v-toolbar-title>
      <div v-ripple @click="$router.push('about')">
        <v-icon class="foucr-icon">fas fa-home</v-icon>
      </div>
      <div  v-ripple @click="$router.push('admin')">
        <v-icon  class="ml-5 foucr-icon">fas fa-user</v-icon>
      </div>
    </v-app-bar>
    <slot></slot>
    <!-- toolbar -->
    <v-navigation-drawer v-model="drawer" dark app>
      <div style="margin:10px" class="d-flex align-center justify-space-around">
        <v-avatar color="orange" size="50">
          <span class="white--text headline">50</span>
        </v-avatar>
        <span class="white--text headline">hello react</span>
      </div>
      <v-divider style="margin:10px;"></v-divider>
      <v-list v-for="item in list" :key="item.name" shaped>
        <v-list-item :to="item.path" link avatar active-class="grey darken-4">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
  <script>
export default {
  data: () => ({
    drawer: true,
    list: [
      { name: "Baner", icon: "fas fa-edit", path: "/about" },
      { name: "创建商品", icon: "fas fa-edit", path: "/creshop" },
      { name: "商品列表", icon: "fas fa-edit", path: "/shop" },
      { name: "用户信息", icon: "fas fa-edit", path: "/user" },
      { name: "商品分类", icon: "fas fa-edit", path: "/shopany" },
      { name: "页面数据", icon: "fas fa-edit", path: "/flow" }
    ]
  })
};
</script>
<style>
.foucr-icon {
  cursor: pointer;
}
.foucr-icon ::hover {
  color: #e6e6e6;
}
</style>