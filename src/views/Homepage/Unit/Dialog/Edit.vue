<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">ໜ່ວຍ:</label>
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
        .put("edit/unit/" + this.lists.id, {
          name: this.listJson.name,
        })
        .then(() => {
          this.$emit("close");
        });
    },
    
    FetchUnit() {
      this.$axios.get("list/unit").then(res => {
        this.unit = res.data.listunit;
        this.selectUnit = { ...this.units[0] };
      });
    }
  },
  created() {
    this.FetchUnit();
  },
  watch: {
    lists: function() {
      this.selectUnit = this.lists.unit_id;
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