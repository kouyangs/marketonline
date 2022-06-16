<template>
    <div class="container">
        <div class="title">
            <h3>
                <i class="fal fa-chart-line"></i>
                ຂໍ້ມູນ ສີນຄ້າທັງໝົດ
                <span class="btn-add">
                    <button class="button is-info" @click="AddProduct()">
                        <i class="fal fa-plus-circle"></i>
                    </button>
                </span>
            </h3>
        </div>
        <table id="mytable">
             <thead>
                <tr>
                    <th>ລຳດັບ</th>
                    <th>ລະຫັດ</th>
                    <th>ບາໂຄດ</th>
                    <th>ຊື່ສີນຄ້າ</th>
                    <th>ຈຳນວນ</th>
                    <th>ໝວດໝູ່</th>
                    <th>ປະເພດ</th>
                    <th>ຫົວໜ່ວຍ</th>
                    <th>ລາຄາຊື້</th>
                    <th>ລາຄາຂາຍ</th>
                    <th>ຮູບເເບບສີນຄ້າ</th>
                    <th :style="{width: '220px'}"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in listItems" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.variation.code_id}}</td>
                    <td>{{item.variation.barcode}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.variation.amount}}</td>
                    <td>{{item.categ_name}}</td>
                    <td>{{item.product_type_name}}</td>
                    <td>{{item.unit_name}}</td>
                    <td>{{item.variation.purchase_price}}</td>
                    <td>{{item.variation.sale_price}}</td>
                    <td>{{item.type}}</td>
                    <td>
                        <div class="buttons">
                            <button class="button is-success" id="btn-add-variation" @click="AddProductVariations(item.variation.id)" v-if="item.type == 'variation'">
                                <i class="fal fa-plus-circle"></i>
                            </button>
                            <button class="button is-light" id="btn-add-variation" v-if="item.type == 'standard'">
                                <i class="fal fa-plus-circle"></i>
                            </button>
                            <button class="button is-info" id="btn-view" @click="ViewProduct(item.id)">
                                <i class="fal fa-eye"></i>
                            </button>
                            <button class="button is-warning" id="btn-edit" @click="EditProduct(item.id)">
                                <i class="fal fa-pencil"></i>
                            </button>
                            <button class="button is-danger" id="btn-delete" @click="OpenModalDelete(item.id)">
                                <i class="fal fa-trash-alt"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

         <!-- <ModalDelete @close="closeModal()" :active="setState.delete">
            <DeleteIem @close="closeModal()" :myId="myId"/>
        </ModalDelete> -->

    </div>
</template>

<script>
// import DeleteIem from './Forms/Dialog/Delete';

export default {
    components:{
        // DeleteIem
    },
    data:()=>({
        listItems: [],
        setState: {
            add: false,
            edit: false,
            delete: false
        },
        findItem: {},
        myId: '',
    }),
    methods: {
        AddProductVariations(id){
            this.$router.push({name: 'list.product.variation', params:{ id: id } }).catch(()=>{});
        },
        AddProduct(){
            this.$router.push({name: 'add.product'});
        },
        EditProduct(id){
            this.$router.push({name: 'edit.product', params: {id: id} });
        },
        OpenModalDelete(id){
            this.setState.delete = true;
            this.myId = id;
        },
        closeModal(){
            this.setState.delete = false;
            this.FetchProvinces();
        },

        FetchProvinces(){
            this.$axios.get('list/products').then((res) => {
                this.listItems = res.data.products;
            });
        }
    },
    created() {
        this.FetchProvinces();
    },
}
</script>

<style lang="scss" scoped>
    .container{
        margin-top: 30px;
        .title{
            h3{
                i{
                    width: 30px;
                }
                font-size: 18px;
                text-align: left;
                display: flex;
                .btn-add{
                    margin: 0 auto;
                    margin-right: 0px;
                }
            }
        }
    }
</style>