<template>
    <div>
        <button class="button is-danger" @click="DeleteItem()">ຢືນຢັນ ລຶບຂໍ້ມູນ</button>
    </div>
</template>

<script>
export default {
    props: ['myId'],

    methods: {
        DeleteItem(){
            this.$axios.delete('delete/provinces/' + this.myId).then(() => {
                this.$emit('close');
            });
        }
    },
}
</script>

<style>

</style>