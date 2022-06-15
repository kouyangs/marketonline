<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">ສີ:</label>
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
        .put("edit/color/" + this.lists.id, {
          name: this.listJson.name,
        })
        .then(() => {
          this.$emit("close");
        });
    },
    
    FetchColor() {
      this.$axios.get("list/color").then(res => {
        this.colors = res.data.listColor;
        this.selectColor = { ...this.colors[0] };
      });
    }
  },
  created() {
    this.FetchColor();
  },
  watch: {
    lists: function() {
      this.selectColor = this.lists.color_id;
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