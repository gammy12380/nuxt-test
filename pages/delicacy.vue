<template>
  <div>
    <Banner />
    <HotFood />
    <HotStay />
    <Search />
  </div>
</template>
<script>
export default {
  name: "delicacy",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  async fetch({ store }) {
    await Promise.all([store.dispatch('getHotel'), store.dispatch('getRestaurant')])
  },
};
</script>