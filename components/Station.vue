<template>
  <div class="container">
    <div class="station-wrap">
      <div class="station-update">*每隔15秒自動更新</div>
      <div class="station">
        <div class="station-item">
          <div class="station-time">未發車</div>
          <div class="station-name">台北車站</div>
        </div>
        <div class="station-item">
          <div class="station-time">未發車</div>
          <div class="station-name">台北車站</div>
        </div>
        <div class="station-item">
          <div class="station-time">未發車</div>
          <div class="station-name">台北車站</div>
        </div>
        <div class="station-item">
          <div class="station-time">未發車</div>
          <div class="station-name">台北車站</div>
        </div>
        <div class="station-item">
          <div class="station-time">未發車</div>
          <div class="station-name">台北車站</div>
        </div>
        <div class="station-item">
          <div class="station-time">未發車</div>
          <div class="station-name">台北車站</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  dta() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 100px 0;
  @include Center;
  .station-wrap {
    @include Center;
    flex-direction: column;
    width: 1200px;
    padding: 50px 75px;
    background: #fff;
    position: relative;
    &::before,
    &::after {
      content: "";
      display: block;
      z-index: -1;
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 30px;
      background: #0d0b0c;
      opacity: 0.3;
      filter: blur(4px);
    }
    &::before {
      left: 10px;
      transform: rotate(-7deg);
    }
    &::after {
      right: 10px;
      transform: rotate(7deg);
    }
  }
}
.station-update {
  text-align: end;
  width: 100%;
}
.station {
  display: flex;
  flex-direction: column;
  .station-item {
    display: flex;
    .station-time {
      text-align: center;
      border: 2px solid #0d0b0c;
      border-radius: 5px;
      width: 145px;
      padding: 10px 15px;
    }
    .station-name {
      text-align: center;
      width: 145px;
      padding: 10px 15px;
    }
  }
}
</style>