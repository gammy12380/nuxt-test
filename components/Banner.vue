<template>
  <div class="banner-container">
    <div class="banner-wrap" v-if="!bannerImg.backNone">
      <div class="banner" :class="bannerImg">
        <div class="search-container">
          <div class="banner-title" v-if="!bannerImg.backNone">
            <h2>
              <img
                src="@/assets/imgs/welcome_to_taiwan.svg"
                alt="welcome_to_taiwan"
                b
              />
            </h2>
            <span>台北、台中、台南、屏東、宜蘭……遊遍台灣</span>
          </div>
          <div class="search-wrap">
            <input type="text" placeholder="搜尋關鍵字" />
            <div class="search-type">
              <select name="searchType" id="searchType" v-model="search.type">
                <option selected disabled>類別</option>
                <option v-for="(type, index) in select.type" :key="index">
                  {{ type }}
                </option>
              </select>
              <select
                name="searchCounty"
                id="searchCounty"
                v-model="search.county"
              >
                <option selected disabled>不分縣市</option>
                <option
                  selected
                  v-for="(county, index) in select.countys"
                  :key="index"
                  :value="county.en"
                >
                  {{ county.county }}
                </option>
              </select>
              <button @click="searchHandler">
                <img src="@/assets/imgs/search.svg" alt="searchBtn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-wrap banner-bus" v-else>
      <div class="search-wrap-bus">
        <div class="search-type">
          <select name="searchType" id="searchType">
            <option selected disabled>選擇縣市</option>
          </select>
          <select name="searchCounty" id="searchCounty">
            <option selected disabled>選擇路線</option>
          </select>
          <button>
            <img src="@/assets/imgs/search.svg" alt="searchBtn" />
          </button>
        </div>
      </div>
      <div class="bus-station">
        <div class="station">往蘭萍</div>
        <div class="station">往大溪</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { ADD_SEARCHTYPE } from "../store/mutations-type";
export default {
  name: "Banner",
  data() {
    return {
      bannerImg: {
        bannerIndex: this.$route.path === "/" || this.$route.path === "/search",
        bannerDelicacy: this.$route.path === "/delicacy",
        backNone: this.$route.path === "/attractions",
      },
      search: {
        type: "類別",
        county: "不分縣市",
      },
      select: {
        type: ["景點", "活動", "餐廳", "住宿"],
        countys: [
          { county: "臺北市", en: "Taipei" },
          { county: "新北市", en: "NewTaipei" },
          { county: "桃園市", en: "Taoyuan" },
          { county: "台中市", en: "Taichung" },
          { county: "台南市", en: "Tainan" },
          { county: "高雄市", en: "Kaohsiung" },
          { county: "基隆市", en: "Keelung" },
          { county: "新竹市", en: "Hsinchu" },
          { county: "新竹縣", en: "HsinchuCounty" },
          { county: "苗栗縣", en: "MiaoliCounty" },
          { county: "彰化縣", en: "ChanghuaCounty" },
          { county: "南投縣", en: "NantouCounty" },
          { county: "雲林縣", en: "YunlinCounty" },
          { county: "嘉義縣", en: "ChiayiCounty" },
          { county: "嘉義市", en: "Chiayi" },
          { county: "屏東縣", en: "PingtungCounty" },
          { county: "宜蘭縣", en: "YilanCounty" },
          { county: "花蓮縣", en: "HualienCounty" },
          { county: "台東縣", en: "TaitungCounty" },
          { county: "金門縣", en: "KinmenCounty" },
          { county: "澎湖縣", en: "PenghuCounty" },
          { county: "連江縣", en: "LienchiangCounty" },
        ],
      },
    };
  },
  methods: {
    ...mapMutations({ searchType: ADD_SEARCHTYPE }),
    ...mapActions([
      "searchScenicSpot",
      "searchActivity",
      "searchHotel",
      "searchRestaurant",
    ]),
    searchHandler() {
      if (this.search.type !== "類別" && this.search.county !== "不分縣市") {
        this.searchType(this.search);
        this.checkSearch();
        this.$router.push("/search");
      } else {
        return alert("請選擇要搜尋的景點和縣市");
      }
    },
    checkSearch() {
      switch (this.search.type) {
        case "景點":
          this.searchScenicSpot();
          break;
        case "活動":
          this.searchActivity();
          break;
        case "餐廳":
          this.searchHotel();
          break;
        case "住宿":
          this.searchRestaurant();
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin borderbox() {
  border-radius: 5px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
}
.banner-container {
  @include Center;
}
.banner-wrap,
.search-container {
  @include Center;
  flex-direction: column;
  font-family: "Noto Sans TC";
}

.banner-wrap {
  width: 1200px;
  position: relative;
  padding: 30px;
  margin-bottom: 30px;
  background: #fff;
  &::before,
  &::after {
    content: "";
    display: block;
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 50px;
    background: #0d0b0c;
    opacity: 0.3;
    filter: blur(4px);
  }
  &::before {
    left: 10px;
    transform: rotate(-5deg);
  }
  &::after {
    right: 10px;
    transform: rotate(5deg);
  }
}
.banner-bus {
  padding-bottom: 0;
}
.banner {
  @include Center;
  width: 100%;
  height: 490px;
}
.bannerIndex {
  background: url("@/assets/imgs/Banner_Taiwan.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bannerDelicacy {
  background: url("@/assets/imgs/Banner_Food.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.backNone {
  background: none;
  height: auto;
}
.banner-title {
  margin: 15px 0;
}
.search-container {
  @include Center;
  flex-direction: column;
  span {
    width: 100%;
    color: #fff;
    text-align: start;
  }
  .search-wrap {
    width: 100%;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      font-size: 16px;
      padding: 8.5px 24px;
      line-height: 16px;
      outline: none;
      border: none;
      @include borderbox;
    }
  }
}
.search-type {
  width: 100%;
  display: flex;
  align-items: center;
  select {
    @include borderbox;
    width: 219px;
    height: 40px;
    margin: 15px 0;
    outline: none;
    border: none;
    font-size: 16px;
    padding: 8.5px 24px;
  }
  select:nth-of-type(1),
  select:nth-of-type(2) {
    margin-right: 8px;
  }
  button {
    @include Center;
    background: #ff1d6c;
    height: 40px;
    width: 40px;
    border-radius: 10px;
    padding: 0;
    border: none;
    line-height: 24px;
    cursor: pointer;
    svg {
      @include fillup;
    }
  }
}
.bus-station {
  display: flex;
  justify-content: space-around;
  .station {
    width: 250px;
    text-align: center;
    margin-top: 30px;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 4px solid #ff1d6c;
    &:nth-of-type(1) {
      margin-right: 30px;
    }
  }
}

@media screen and (max-width: 1199px) {
  .banner-wrap {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .banner-wrap {
    background: none;
    margin-top: 30px;
    margin-bottom: 0;
    &::before,
    &::after {
      display: none;
    }
    .banner {
      width: 100%;
      height: 100%;
      background: none;
    }
    .banner-title {
      display: none;
    }
  }
}
</style>