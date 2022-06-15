<template>
   <div class="center examplex">
      <vs-navbar center-collapsed v-model="active">
        <template #right>
          <vs-button danger>ອອກຈາກລະບົບ</vs-button>
        </template>
      </vs-navbar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    }
  },
}
</script>

<style>

</style>