<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">
          ກົດບລະບຽນ:
          <span class="has-text-danger">{{ errors.first('description') }}</span>
        </label>
        <input
          class="input"
          name="description"
          placeholder="ກະລຸນາປ້ອນກ່ອນ..."
          v-model="description"
          v-validate="'required|max:2260'"
        />

     <div class="field">
            <div class="control">
                <label class="label">ເລືອກເພດ</label>
                <div class="select" :style="{width: '100%'}">
                    <select class="input" v-model="languageSelected.id">
                        <option v-for="(item, index) in languages" :key="index" :value="item.id">
                            {{item.name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>

       <div class="field">
            <div class="control">
                <label class="label">ເລືອກເພດ</label>
                <div class="select" :style="{width: '100%'}">
                    <select class="input" v-model="typeruleSelected.id">
                        <option v-for="(item, index) in typeRules" :key="index" :value="item.id">
                            {{item.name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
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
    description: "",
  
    languages: [
                {id: 'LA', name: 'ລາວ'},
                {id: 'TH', name: 'ໄທ'},
                {id: 'EN', name: 'ອັງກິດ'},
                {id: 'HM', name: 'ມົ້ງ'},
            ],
            languageSelected: {id: 'LA', name: 'ລາວ'},
  typeRules: [
                {id: 'branch', name: 'ສາຂາ'},
                {id: 'customer', name: 'ລູກຄ້າ'},
            ],
            typeruleSelected: {id: 'branch', name: 'ສາຂາ'}
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
        .post("Add/rule", {
          description: this.description,
          language: this.languageSelected.id,
          type_rule: this.typeruleSelected.id
        })
        .then(() => {
          this.description = "";
          this.$emit("close");
        });
    }
  },
  created() {
    this.FetchRule();
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