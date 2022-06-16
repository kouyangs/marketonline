<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-4">
        <div class="field">
          <label class="label">
            ລະຫັດສີນຄ້າ:
            <span class="has-text-danger">{{ errors.first('code_id') }}</span>
          </label>
          <div class="control">
            <input
              class="input"
              name="code_id"
              v-validate="'required|max:20|min:2'"
              placeholder="ກະລຸນາປ້ອນກ່ອນ..."
              v-model="value.code_id"
            />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">
            ບາໂຄດ:
            <span class="has-text-danger">{{ errors.first('barcode') }}</span>
          </label>
          <div class="control">
            <input
              class="input"
              name="barcode"
              v-validate="'required|min:2'"
              placeholder="ກະລຸນາປ້ອນກ່ອນ..."
              v-model="value.barcode"
            />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">
            ຊື່ສີນຄ້າ:
            <span class="has-text-danger">{{ errors.first('name') }}</span>
          </label>
          <div class="control">
            <input
              class="input"
              name="name"
              v-validate="'required'"
              placeholder="ກະລຸນາປ້ອນກ່ອນ..."
              v-model="value.name"
            />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">
            ຈຳນວນ:
            <span class="has-text-danger">{{ errors.first('amount') }}</span>
          </label>
          <div class="control">
            <input
              class="input"
              name="amount"
              v-validate="'required|numeric'"
              placeholder="ກະລຸນາປ້ອນກ່ອນ..."
              v-model="value.amount"
            />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ໝວດໝູ່:</label>
          <div class="select" :style="{width: '100%'}">
            <select class="input" v-model="selectedCategory.id">
              <option
                v-for="(item, index) in categories"
                :key="index"
                :value="item.id"
              >{{item.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ປະເພດ:</label>
          <div class="select" :style="{width: '100%'}">
            <select class="input" v-model="selectedProductType.id">
              <option
                v-for="(item, index) in product_types"
                :key="index"
                :value="item.id"
              >{{item.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ຫົວໜ່ວຍ:</label>
          <div class="select" :style="{width: '100%'}">
            <select class="input" v-model="selectedUnit.id">
              <option v-for="(item, index) in units" :key="index" :value="item.id">{{item.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ລາຄາຊື້:</label>
          <div class="control">
            <input class="input" placeholder="ກະລຸນາປ້ອນກ່ອນ..." v-model="value.purchase_price" />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ລາຄາຂາຍ:</label>
          <div class="control">
            <input class="input" placeholder="ກະລຸນາປ້ອນກ່ອນ..." v-model="value.sale_price" />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ພາສີອາກອນ:</label>
          <div class="control">
            <input class="input" placeholder="ກະລຸນາປ້ອນກ່ອນ..." v-model="value.tax" />
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ຮູບເເບບສີນຄ້າ:</label>
          <div class="select" :style="{width: '100%'}">
            <select class="input" v-model="selectedType.id">
              <option v-for="(item, index) in types" :key="index" :value="item.id">{{item.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label">ສ່ວນຫຼຸດ:</label>
          <div class="select" :style="{width: '100%'}">
            <select class="input" v-model="selectedHaveDiscount.id">
              <option
                v-for="(item, index) in have_dicounts"
                :key="index"
                :value="item.id"
              >{{item.name}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box" v-if="displayBoxDiscount">
      <p class="title-discount">ກຳນົດລາຄາ ເເລະ ສ່ວນຫຼຸດ</p>
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="field">
            <label class="label">ລາຄາຕ່ຳສຸດ:</label>
            <div class="control">
              <input
                class="input"
                placeholder="ກະລຸນາປ້ອນກ່ອນ..."
                v-model="value.discount_min_price"
              />
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="label">ລາຄາສູງສຸດ:</label>
            <div class="control">
              <input
                class="input"
                placeholder="ກະລຸນາປ້ອນກ່ອນ..."
                v-model="value.discount_max_price"
              />
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="label">ສ່ວນຫຼຸດ:</label>
            <div class="control">
              <input class="input" placeholder="ກະລຸນາປ້ອນກ່ອນ..." v-model="value.discount" />
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="label">ປະເພດສ່ວນຫຼຸດ:</label>
            <div class="select" :style="{width: '100%'}">
              <select class="input" v-model="selectedDiscountType.id">
                <option
                  v-for="(item, index) in discount_types"
                  :key="index"
                  :value="item.id"
                >{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12">
      <div class="field">
        <label class="label">ລາຍລະອຽດ:</label>
        <div class="control">
          <textarea class="textarea" placeholder="ລາຍລະອຽດ..." v-model="value.description"></textarea>
        </div>
      </div>
    </div>
    <br />
    <button class="button is-info" @click="ValidForm()">ບັນທຶກ ສີນຄ້າ</button>
  </div>
</template>

<script>
import { ProductValidation } from "../../../../plugins/validations/validProducts";

export default {
  data() {
    return {
      value: {},
      categories: [],
      selectedCategory: {},
      product_types: [],
      selectedProductType: {},
      units: [],
      selectedUnit: {},

      types: [
        { id: "standard", name: "standard" },
        { id: "variation", name: "variation" }
      ],
      selectedType: { id: "standard", name: "standard" },

      have_dicounts: [
        { id: "no", name: "ບໍ່ມີສ່ວນຫຼດ" },
        { id: "yes", name: "ມີສ່ວນຫຼຸດ" }
      ],
      selectedHaveDiscount: { id: "no", name: "ບໍ່ມີສ່ວນຫຼດ" },

      discount_types: [
        { id: "cash", name: "ເງີນສົດ" },
        { id: "percent", name: "ເປີເຊັນ" }
      ],
      selectedDiscountType: { id: "cash", name: "ເງີນສົດ" },

      displayBoxDiscount: false
    };
  },
  methods: {
    ValidForm() {
      this.SaveItem();
      this.$validator.validate().then(valid => {
          if(valid){
              this.SaveItem();
          }
      });
    },

    SaveItem() {
      //   console.log(this.value);
      this.$axios
        .post("add/product", {
          name: this.value
        })
        .then(() => {
          this.value = "";
        });
      this.$axios.post('add/product', {
          code_id: this.value.code_id,
          barcode: this.value.barcode,
          name: this.value.name,
          amount: this.value.amount,
          product_type_id: this.selectedProductType.id,
          unit_id: this.selectedUnit.id,
          description: this.value.description,
          purchase_price: this.value.purchase_price,
          sale_price: this.value.sale_price,
          type: this.selectedType.id,
          tax: this.value.tax,
          have_discount: this.selectedHaveDiscount.id,
          discount_min_price: this.value.discount_min_price,
          discount_max_price: this.value.discount_max_price,
          discount: this.value.discount,
          discount_type: this.selectedDiscountType.id
      }).then(() => {
          this.value = {};
          this.FetchCategories();
          this.FetchUnits();
      });
    },

    FetchCategories() {
      this.$axios.get("list/category").then(res => {
        this.categories = res.data.listCategory;
        this.selectedCategory = { ...this.categories[0] };
      });
    },
    FindProductTypes(id) {
      this.$axios.get("find-product-type-by-category/" + id).then(res => {
        this.product_types = res.data.product_types;
        this.selectedProductType = { ...this.product_types[0] };
      });
    },
    FetchUnits() {
      this.$axios.get("list/unit").then(res => {
        this.units = res.data.listunit;
        this.selectedUnit = { ...this.units[0] };
      });
    }
  },
  created() {
    this.FetchCategories();
    this.FetchUnits();
    ProductValidation(this);
  },
  watch: {
    "selectedCategory.id": function(id) {
      this.FindProductTypes(id);
    },
    "selectedHaveDiscount.id": function(value) {
      if (value === "yes") {
        this.displayBoxDiscount = true;
      }
      if (value === "no") {
        this.displayBoxDiscount = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  .box {
    .title-discount {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>