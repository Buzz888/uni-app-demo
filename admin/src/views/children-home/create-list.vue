<template>
  <div style="background:#e6e6e6;height:100%" class="d-flex justify-center align-center">
    <v-card dark class="mx-auto creshop-sty" elevation="15" style="overflow:auto" raised>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-2">添加商品信息</v-list-item-title>
          <v-form ref="form">
            <v-text-field v-model="valid.name" :counter="10" label="商品名" required></v-text-field>
            <v-text-field v-model="valid.city" :counter="10" label="发货地" required></v-text-field>
            <span>商品详细:</span>
            <quill-editor
              class="mt-5 mb-5"
              style="background: white;color:black;"
              v-model="valid.content"
              ref="myQuillEditor"
              :options="editorOption"
            ></quill-editor>
            <v-text-field
              v-model="valid.price"
              label="价格"
              max="9999"
              min="0"
              step="1"
              style="width: 200px"
              type="number"
              @keydown="false"
            ></v-text-field>
            <v-text-field
              v-model="valid.num"
              label="数量"
              max="9999"
              min="0"
              step="1"
              style="width: 200px"
              type="number"
              @keydown="false"
            ></v-text-field>
              <v-file-input label="File input"></v-file-input>

            <v-btn color="success" class="mr-4" @click="validate">Validate</v-btn>
            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
          </v-form>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<style scoped>
@media (min-width: 650px) {
  .creshop-sty {
    width: 70vw;
    height: 70vh;
   
  }
}
</style>
<script>
export default {
  data() {
    return {
      valid: {
        name: "",
        city: "",
        price: 0,
        num: 0,
        content: "<h2>I am Example</h2>"
      },
      
      editorOption: {
        // some quill options
      }
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    reset() {
        this.$router.go(-1)
    },
    validate(){
        window.console.log(this.valid)
    }
 
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    window.console.log("this is current quill instance object", this.editor);
  }
};
</script>