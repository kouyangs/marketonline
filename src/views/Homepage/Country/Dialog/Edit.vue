<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">ຊື່ປະເທດ:</label>
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
        .put("edit/country/" + this.lists.id, {
          name: this.listJson.name,
        })
        .then(() => {
          this.$emit("close");
        });
    },
    
    FetchCountries() {
      this.$axios.get("list/countries").then(res => {
        this.countries = res.data.listCountries;
        this.selectCountry = { ...this.countries[0] };
      });
    }
  },
  created() {
    this.FetchCountries();
  },
  watch: {
    lists: function() {
      this.selectCountry = this.lists.country_id;
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