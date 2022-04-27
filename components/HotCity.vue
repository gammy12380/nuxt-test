<template>
  <div class="hotCity-wrap">
    <div class="hotCity">
      <h3>
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0L0 16.1905H20L10 0Z" fill="#FF1D6C" />
        </svg>
        熱門城市
      </h3>
      <div class="citys-box">
        <div
          class="citys-wrap"
          :class="[citysClass ? 'citys-first' : 'citys-second']"
        >
          <div class="citys" v-for="cityArr in cityArray" :key="cityArr">
            <div class="city">
              <img :src="city[cityArr].img" :alt="city[cityArr].en" class="cityImg" />
              <div class="bg-opacity"></div>
              <div class="position">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADbSURBVHgBpZKBEYIwDEVbzwE6Qt2ADWQEN2AEuwFuoBuIG7ABI+AGuAFuEH88eiLXxhbfXYBL83PJp1otICKDV4UoEHZKPxGt1vqmJCA+IkaKMyCqmLimdOp/xB7HWo0Pi/eg8mFfdls8nFDQItjUuaEe89Zigp7CZtnZinbKLemVtN/CJxeoGzfC+Ck5ww0egYPQv94HcncerYmscUUU0/7nWA03KGk9B29QR/l87s7KKcovN5C4ZIhPKgSlrdKpGDg0FL6ZHj4zSkJo8lsseNJkiWdN+P47qeYFO4udd29zpX8AAAAASUVORK5CYII="
                  alt="position_icon"
                />
                <h3>{{ city[cityArr].cn }}</h3>
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="!citysClass"
          class="arrow-left"
          @click="transformFn"
        ></button>
        <button v-else class="arrow-right" @click="transformFn"></button>
      </div>
    </div>
  </div>
</template>
<script>
import { city, cityArray } from "../store/city";
export default {
  name: "HotCity",
  data() {
    return {
      city,
      cityArray,
      citysClass: true,
    };
  },
  methods: {
    transformFn() {
      this.citysClass = !this.citysClass;
    },
  },
};
</script>
<style lang="scss" scoped>
.hotCity-wrap {
  margin: 50px 0;
  width: 100%;
  @include Center;
}
.hotCity {
  position: relative;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 20px;
    line-height: 20px;
    display: flex;
    svg {
      margin-right: 10px;
    }
  }
}
.citys-box {
  overflow: hidden;
}
.arrow-left,
.arrow-right {
  cursor: pointer;
  position: absolute;
  background: #0d0b0c;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
}
.arrow-left {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  &::before {
    content: "";
    display: block;
    position: absolute;
    @include positionCenter;
    border-right: 10px solid #fff;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
}
.arrow-right {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &::before {
    content: "";
    display: block;
    position: absolute;
    @include positionCenter;
    border-left: 10px solid #fff;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
}

.citys-first {
  transform: translateX(0%);
}
.citys-second {
  transform: translateX(-100%);
}
.citys-wrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 1050px;
  height: 250px;
  margin-bottom: 50px;
  padding: 5px;
  transition: 0.3s linear;
  .citys {
    cursor: pointer;
    width: calc(20% - 10px);
    background: #fff;
    height: 100%;
    padding: 12px;
    margin-left: 13px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    transition: 0.1s linear;
    &:first-child {
      margin-left: 0;
    }
    &:nth-child(3n + 2) {
      height: calc(50% - 8px);
      margin-bottom: 8px;
    }
    &:nth-child(3n) {
      height: 50%;
    }
    &:nth-child(7) {
      margin-left: 6.5px;
    }
    &:nth-child(n + 8) {
      height: 100%;
    }
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(12),
    &:nth-child(13) {
      height: 50%;
    }
    &:hover {
      padding: 0;
    }
  }
}

.city {
  position: relative;
  height: 100%;
  .cityImg {
    @include fillup;
    vertical-align: middle;
  }
  .bg-opacity {
    @include fillup;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.301);
  }
  .position {
    position: absolute;
    @include positionCenter;
    @include Center;
    flex-direction: column;
    h3 {
      color: #fff;
      font-size: 20px;
      margin: 10px 0;
    }
  }
}

@media screen and (max-width: 1199px) {
  .hotCity {
    width: 960px;
  }
  .citys-wrap {
    width: 800px;
    height: 200px;
  }
}
@media screen and (max-width: 991px) {
  .hotCity {
    width: 100%;
  }
  .citys-box{
    overflow: scroll;
  }
  .citys-wrap {
    width: 800px;
    height: 200px;
  }
  .arrow-left,.arrow-right{
    display: none;
  }
}
</style>