<template>
  <v-app>
    <v-main>
      <div class="align-lg-center">
        <div class="d-flex justify-space-around mb-6">
          <div class="left">
            <v-list rounded>
              <v-list-item-group v-model="selectedItem" mandatory color="blue">
                <v-list-item
                  id="listitem"
                  v-for="item in links"
                  :key="item.text"
                  link
                  :disabled="item.test"
                  @click="handleclick(item.route)"
                >
                  <!-- <router-link :to="item.route"></router-link> -->
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class=" text-capitalize black--text">{{
                      item.text
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <keep-alive>
            <div class="right">
              <!-- <router-view></router-view> -->
              <slot></slot>
            </div>
          </keep-alive>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['value'],
  data() {
    return {
      selectedItem: 0,
      links: this.$store.state.links,
      arrComponent: [],
      itemselected: 0,
    }
  },
  methods: {
    ...mapMutations(['changeItem']),
    handleclick(e) {
      // // this.data.links = this.$store.state.links
      // this.itemselected = e
      // console.log('事件', e)
      // // console.log('属性', typeof this.selectedItem)
      // // this.selectedItem = e
      // // this.$emit('input', e)
      // console.log(this.changeItem(e))
    },
    changeitem(val) {
      this.selectedItem = val
    },
  },
  watch: {},
  updated(e) {
    // this.links = this.$store.state.links
  },
  mounted() {
    // this.arrComponent = this.$children[0].$children[0].$children.slice(1)
    // console.log(this.value)
    // console.log(this.arrComponent)
    // var item = document.getElementById('listitem')
    // item.addEventListener('click', (e) => {
    //   console.log(e)
    // })
  },
}
</script>
<style>
.left {
  width: 400px;
}
.right {
  width: 600px;
}
</style>
