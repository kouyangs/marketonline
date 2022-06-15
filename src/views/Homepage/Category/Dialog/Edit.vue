<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">ປະເພດ:</label>
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
        .put("edit/category/" + this.lists.id, {
          name: this.listJson.name,
        })
        .then(() => {
          this.$emit("close");
        });
    },
    
    FetchCategory() {
      this.$axios.get("list/category").then(res => {
        this.category = res.data.listcategory;
        this.selectCategory = { ...this.categories[0] };
      });
    }
  },
  created() {
    this.FetchCategory();
  },
  watch: {
    lists: function() {
      this.selectCategory = this.lists.category_id;
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