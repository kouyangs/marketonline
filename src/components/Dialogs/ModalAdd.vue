<template>
    <div>
        <div class="modal" id="modal" :class="{'is-active': active}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">ບັນທຶກຂໍ້ມູນ</p>
                    <button class="delete" aria-label="close" @click="close()"></button>
                </header>
                <section class="modal-card-body">
                    <slot/>
                </section>

            </div>
        </div>
    </div>  
</template>

<script>
export default {
    props: {
        active: {
            default: false
        }
    },
    data:()=>({

    }),
    methods:{
        close() {
            this.$emit('close');
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../../public/scss/main.scss';

.modal-content{
    overflow: visible;
}
.box-btn{
    text-align: right;
    margin-top: 20px;
    .btn-save{
        background: $primary-color;
        color: $white;
        border: none;
        box-shadow: none;
        font-family: $font;
        border-radius: 2px;
        font-size: 16px;
        i{
            width: 35px;
            font-size: 20px;
        }
    }
}

</style>