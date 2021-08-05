<template>
  <v-app v-show="name == this.$parent.$parent.$parent.selectedItem">
    <v-main>
      <v-container>
        <div>
          <slot></slot>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {}
  },
  mounted() {
    console.log(this.$parent.$parent.$parent.selectedItem)
    // console.log('这里', this.$store.state.itemselected)
    // $store.state.itemselected
  },
}
</script>

<style scoped></style>
