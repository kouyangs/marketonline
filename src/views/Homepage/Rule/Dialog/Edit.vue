<template>
  <div>
    <div class="field">
      <div class="control">
        <label class="label">ອະທີບາຍ:</label>
        <input class="input" placeholder="ກະລຸນາປ້ອນກ່ອນ..." v-model="listJson.description" />
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
      <button class="button is-success" @click="EditItem()">ບັນທຶກ</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lists"],

  data: () => ({
    description: "",
     languages: [
                {id: 'LA', name: 'ລາວ'},
                {id: 'TH', name: 'ໄທ'},
                {id: 'EN', name: 'ອັງກິດ'},
                {id: 'HM', name: 'ມົ້ງ'},
            ],
            languageSelected: {},
  typeRules: [
                {id: 'branch', name: 'ສາຂາ'},
                {id: 'customer', name: 'ລູກຄ້າ'},
            ],
            typeruleSelected: {}
  }),
  methods: {
    EditItem() {
      this.$axios
        .put("edit/rule/" + this.lists.id, {
          description: this.listJson.description,
          language: this.languageSelected.id,
          type_rule: this.typeruleSelected.id
        })
        .then(() => {
          this.$emit("close");
        });
    },

    FetchRule() {
      this.$axios.get("Add/rule").then(res => {
        this.rule = res.data.listrule;
        this.selectRule = { ...this.rules[0] };
      });
    }
  },
  created() {
    this.FetchRule();
  },
  watch: {
    lists: function(value) {
      this.selectRule = this.lists.rule_id;
      this.languageSelected.id = value.language;
      this.typeruleSelected.id = value.type_rule

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