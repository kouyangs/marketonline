<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">ຂະໜາດ:</label>
        <input class="input" placeholder="ກະລຸນາປ້ອນກ່ອນ..." v-model="listJson.name" />
      </div>
    </div>

    <div class="box-btn">
      <button class="button is-success" @click="EditItem()">ບັນທຶກ</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lists"],

  data: () => ({
    name: "",
  }),
  methods: {
    EditItem() {
      this.$axios
        .put("edit/size/" + this.lists.id, {
          name: this.listJson.name,
        })
        .then(() => {
          this.$emit("close");
        });
    },
    
    FetchSize() {
      this.$axios.get("list/size").then(res => {
        this.size = res.data.listsize;
        this.selectSize = { ...this.sizes[0] };
      });
    }
  },
  created() {
    this.FetchSize();
  },
  watch: {
    lists: function() {
      this.selectSize = this.lists.size_id;
    }
  },
  computed: {
    listJson: function() {
      return this.lists;
    }
  }
};
</script>

<style lang="scss" scoped>
.box-btn {
  margin-top: 30px;
  text-align: right;
  .button {
    font-family: $font;
    margin: 5px;
  }
}
</style>