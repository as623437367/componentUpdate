<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="d-flex justify-start">
          <v-icon class="black--text ">mdi-arrow-left-thick</v-icon>
          <h1 class="ml-2">Create Your NudgePool</h1>
        </div>
      </v-container>
      <left-content v-model="active">
        <right-content label="basics" name="0">
          <Basics />
        </right-content>
        <right-content label="pool construction period" name="1">
          <Collateral />
        </right-content>
        <right-content label="charge settings" name="2">
          <Charge />
        </right-content>
        <right-content label="collateral settings" name="3">
          <PoolConstruction />
        </right-content>
        <right-content label="review" name="4">
          <review />
        </right-content>
      </left-content>
    </v-main>
  </v-app>
</template>
<script>
import leftContent from './components/leftContent.vue'
import rightContent from './components/rightContent.vue'
import Basics from './components/Basics.vue'
import Collateral from './components/Collateral.vue'
import PoolConstruction from './components/PoolConstruction.vue'
import Charge from './components/Charge.vue'
import review from './components/review.vue'
export default {
  name: 'App',
  components: {
    'left-content': leftContent,
    'right-content': rightContent,
    Basics,
    PoolConstruction,
    Collateral,
    Charge,
    review,
  },
  data: () => ({
    e6: 1,
    active: 0,
  }),
  mounted() {
    // console.log(this.$children)
  },
}
</script>
<style></style>
