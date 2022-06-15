<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">
          ຊື່ເເຂວງ:
          <span class="has-text-danger">{{ errors.first('name') }}</span>
        </label>
        <input
          class="input"
          name="name"
          placeholder="ກະລຸນາປ້ອນກ່ອນ..."
          v-model="name"
          v-validate="'required|min:2'"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">ເລືອກປະເທດ:</label>
      <div class="select" :style="{width: '100%'}">
        <select class="input" v-model="selectCountry.id">
          <option v-for="(item, index) in countries" :key="index" :value="item.id">{{item.name}}</option>
        </select>
      </div>
    </div>
    <div class="box-btn">
      <button class="button is-success" @click="ValidateItem()">ບັນທຶກ</button>
    </div>
  </div>
</template>

<script>
import { IndexValidation } from "../../../../plugins/validations/index";

export default {
  data: () => ({
    name: "",
    countries: [],
    selectCountry: {}
  }),
  methods: {
    ValidateItem() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.SaveItem();
        }
      });
    },
    SaveItem() {
      this.$axios
        .post("add/provinces", {
          name: this.name,
          country_id: this.selectCountry.id
        })
        .then(() => {
          this.name = "";
          this.FetchCountries();
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
    IndexValidation(this);
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