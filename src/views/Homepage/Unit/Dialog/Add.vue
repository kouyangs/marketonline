<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">
        ໜ່ວຍ:
          <span class="has-text-danger">{{ errors.first('name') }}</span>
        </label>
        <input
          class="input"
          name="name"
          placeholder="ກະລຸນາປ້ອນກ່ອນ..."
          v-model="name"
          v-validate="'required|max:20'"
        />
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
        .post("add/unit", {
          name: this.name,
        })
        .then(() => {
          this.name = "";
          this.$emit("close");
        });
    }
  },
  created() {
    this.FetchUnit();
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