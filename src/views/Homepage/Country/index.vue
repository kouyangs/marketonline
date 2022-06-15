<template>
  <div class="container">
    <div class="title">
      <h3>
        <i class="fal fa-chart-line"></i>
        ຂໍ້ມູນ ປະເທດທັງໝົດ
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
          <th>ປະເທດ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in country" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
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
      <EditItem @close="closeModal()" :lists="findCountry" />
    </ModalEdit>

    <ModalDelete @close="closeModal()" :active="setState.delete">
      <DeletetItem @close="closeModal()" :myId="myId" />
    </ModalDelete>
  </div>
</template>

<script>
import AddItem from "./Dialog/Add";
import EditItem from "./Dialog/Edit";
import DeletetItem from "./Dialog/Delete";

export default {
  components: {
    AddItem,
    EditItem,
    DeletetItem
  },
  data: () => ({
    country: [],
    setState: {
      add: false,
      edit: false,
      delete: false
    },
    myId: ""
    // findCountry: {}
  }),
  methods: {
    closeModal() {
      this.setState.add = false;
      this.setState.edit = false;
      this.setState.delete = false;
      this.FetchCountry();
    },
    OpenModalAdd() {
      this.setState.add = true;
    },
    OpenModalEdit(id) {
      this.findCountry = { ...this.FilterCountry(id) };
      this.setState.edit = true;
    },

    OpenModalDelete(id) {
      this.myId = id;
      this.setState.delete = true;
    },

    FilterCountry(id) {
      return this.country.filter(item => item.id == id)[0] || {}; // ຕ້ອງເເມ່ນ ==
    },

    FetchCountry() {
      this.$axios.get("list/countries").then(res => {
        this.country = res.data.listCountries;
      });
    }
  },
  created() {
    this.FetchCountry();
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