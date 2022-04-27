import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import Attractions from './modules/Attractions';
import Delicacy from './modules/Delicacy';

Vue.use(Vuex);

export const state = () => ({
    header: null,
    activity: [],
    scenicSpot: [],
    hotel: [],
    restaurant: [],
    modalSwitch: false,
    modalData: null,
    searchData: [],
    searchCounty: null,
    searchType: null,
})

export const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        actions,
        getters,
        modules: {
            delicacy: Delicacy,
            attractions: Attractions,
        }
    })
}
