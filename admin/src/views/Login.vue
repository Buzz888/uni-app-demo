<template>
  <div class="bg">
      <v-card class="overflow-hidden login" color="purple lighten-1" dark>
        <v-toolbar flat color="purple">
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="font-weight-light">登录</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="purple darken-3" fab small @click="isEditing = !isEditing">
            <v-icon v-if="isEditing">mdi-close</v-icon>
            <v-icon v-else>mdi-pencil</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field :disabled="!isEditing" color="white" label="Name" v-model="admin.username"></v-text-field>
          <v-text-field
            type="password"
            :disabled="!isEditing"
            color="white"
            label="Password"
            v-model="admin.password"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isEditing" color="success" @click="save">登录</v-btn>
        </v-card-actions>
        <v-snackbar timeout="6000" v-model="hasSaved" absolute bottom left>
          登陆中...
          <v-progress-circular indeterminate></v-progress-circular>
        </v-snackbar>
      </v-card>
    <v-overlay :value="model"></v-overlay>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: false,
      admin: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
      this.model = true;
      window.console.log(this.admin);
      this.$http.post("/", this.admin);
    }
  }
};
</script>
<style scoped>
.login {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  height: 50vh;
}
@media (max-width: 650px) {
  .login {
    width: 90vw;
  }
}
@media (min-width: 650px) {
  .login {
    width: 60vw;
  }
}
.bg{
    width: 100%;
    height: 100vh;
     background-image: linear-gradient(#203A43, #2C5364);
}
</style>