<template>
  <div class="container">
    <div class="title">
      <h3>
        <i class="fal fa-chart-line"></i>
        ຂໍ້ມູນ ກົດລະບຽບທັງໝົດ
        <span class="btn-add">
          <button class="button is-info" @click="OpenModalAdd()">
            <i class="fal fa-plus-circle"></i>
          </button>
        </span>
      </h3>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ລຳດັບ</th>
          <th>ອະທິບາຍ</th>
          <th>ພາສາ</th>
          <th>ປະເພດ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in rule" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.description}}</td>
          <td>{{item.language}}</td>
          <td>{{item.type_rule}}</td>
          <td>
            <div class="buttons is-right">
              <button class="button is-warning" @click="OpenModalEdit(item.id)">
                <i class="fal fa-pencil"></i>
              </button>
              <button class="button is-danger" @click="OpenModalDelete(item.id)">
                <i class="fal fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    
    <ModalAdd @close="closeModal()" :active="setState.add">
      <AddItem @close="closeModal()" />
    </ModalAdd>

    <ModalEdit @close="closeModal()" :active="setState.edit">
      <EditItem @close="closeModal()" :lists="findRule"/>
    </ModalEdit>

    <!--
        <ModalDelete @close="closeModal()" :active="setState.delete">
            <DeleteIem @close="closeModal()" :myId="myId"/>
    </ModalDelete>-->
  </div>
</template>

<script>
import AddItem from "./Dialog/Add";
import EditItem from "./Dialog/Edit";

export default {
  components: {
    AddItem,
    EditItem
  },
  data: () => ({
    rule: [],
    setState: {
      add: false,
      edit: false
    },
    findRule: {}
  }),
  methods: {
    closeModal() {
      this.setState.add = false;
      this.setState.edit = false;
      this.FetchRule();
    },
    OpenModalAdd() {
      this.setState.add = true;
    },
    OpenModalEdit(id) {
      this.findRule = { ...this.FilterRule(id) };
      this.setState.edit = true;
    },
    FilterRule(id) {
      return this.rule.filter(item => item.id == id)[0] || {}; // ຕ້ອງເເມ່ນ ==
    },

    FetchRule() {
      this.$axios.get("list/rule").then(res => {
        this.rule = res.data.listrule;
      });
    }
  },
  created() {
    this.FetchRule();
  }
};
</script>


<style lang="scss" scoped>
.container {
  margin-top: 30px;
  .title {
    h3 {
      i {
        width: 30px;
      }
      font-size: 18px;
      text-align: left;
      display: flex;
      .btn-add {
        margin: 0 auto;
        margin-right: 0px;
      }
    }
  }
}
</style>