<template>
  <div class="hidden">
    <vs-sidebar absolute v-model="active" open>
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="fal fa-home"></i>
        </template>
        ໜ້າຫຼັກ
      </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="fal fa-chart-line"></i>
            </template>
            ຈັດການ ຂໍ້ມູນຫຼັກ
          </vs-sidebar-item>
       
        </template>

           <div @click="GotoProduct()">
          <vs-sidebar-item id="product">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ສິນຄ້າ
          </vs-sidebar-item>
        </div>


        <div @click="GotoCountry()">
          <vs-sidebar-item id="country">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ປະເທດ
          </vs-sidebar-item>
        </div>

        <div @click="GotoProvince()">
          <vs-sidebar-item id="province">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ເເຂວງ
          </vs-sidebar-item>
        </div>
        <div @click="GotoCity()">
          <vs-sidebar-item id="district">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ເມືອງ
          </vs-sidebar-item>
        </div>
        <div @click="GotoCategory()">
          <vs-sidebar-item id="category">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ປະເພດ
          </vs-sidebar-item>
        </div>
        <div @click="GotoUnit()">
          <vs-sidebar-item id="unit">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ໜ່ວຍ
          </vs-sidebar-item>
        </div>
        <div @click="GotoColor()">
          <vs-sidebar-item id="color">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ສີ
          </vs-sidebar-item>
        </div>
        <div @click="GotoSize()">
          <vs-sidebar-item id="size">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ຂະໜາດ
          </vs-sidebar-item>
        </div>
        <div @click="GotoRule()">
          <vs-sidebar-item id="rule">
            <template #icon>
              <i class="fal fa-flag-usa"></i>
            </template>
            ຂໍ້ມູນ ກົດລະບຽບ
          </vs-sidebar-item>
        </div>
      </vs-sidebar-group>

      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="fal fa-bell"></i>

            <template #badge>28</template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "home"
  }),
  methods: {
    
    GotoProduct() {
      this.$router.push({ name: "Add" }).catch(() => {});
    },
    GotoCountry() {
      this.$router.push({ name: "Country" }).catch(() => {});
    },
    GotoProvince() {
      this.$router.push({ name: "Province" }).catch(() => {});
    },
    GotoCity() {
      this.$router.push({ name: "City" }).catch(() => {});
    },
     GotoCategory() {
      this.$router.push({ name: "Category" }).catch(() => {});
    },
     GotoUnit() {
      this.$router.push({ name: "Unit" }).catch(() => {});
    },
     GotoSize() {
      this.$router.push({ name: "Size" }).catch(() => {});
    },
     GotoColor() {
      this.$router.push({ name: "Color" }).catch(() => {});
    },
     GotoRule() {
      this.$router.push({ name: "Rule" }).catch(() => {});
    }
  }
};
</script>

<style>
</style>