import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemselected:0,
    Chargerate:'',
    TokensImpawned: '',
    LTV: '',
    LiquidationLTV: '',
    During: '',
    tokenname: '',
    denomination: '',
    projectwebsite: '',
    
    links: [
      {
        icon: 'mdi-record-circle-outline',
        text: 'basics',
        route: '0',
        test: true,
      },
      {
        icon: 'mdi-record-circle-outline',
        text: 'collateral settings',
        route: '1',
        test: true,
      },
      {
        icon: 'mdi-record-circle-outline',
        text: 'charge settings',
        route: '2',
        test: true,
      },
      {
        icon: 'mdi-record-circle-outline',
        text: 'pool construction period',
        route: '3',
        test: true,
      },
      {
        icon: 'mdi-record-circle-outline',
        text: 'review',
        route: '4',
        test: true,
      },
    ],
  },
  mutations: {
    changeItem(state,val) {
      state.itemselected = val
      console.log(val);
    },
    basicsSave(state,arr) {
      state.tokenname = arr[0];
      state.denomination = arr[1];
      state.projectwebsite = arr[2];
      // state.itemselected = 1
      state.links[0].test = false;
      state.links[1].test = false;
      
    },
    collateralSave(state,arr) {
      state.TokensImpawned = arr[0]
      state.LTV = arr[1]
      state.LiquidationLTV = arr[2]
      state.links[1].test = false;
      state.links[2].test = false;

    },
    chargeSave(state,arr) {
      state.Chargerate = arr[0]
      state.links[2].test = false;
      state.links[3].test = false;

    },
    poolconstructionSave(state,arr) {
      state.During = arr[0]
      state.links[3].test = false;
      state.links[4].test = false;

    }
  },
  actions: {
  },
  modules: {
  }
})
