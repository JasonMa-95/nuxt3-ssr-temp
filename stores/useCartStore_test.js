/**
 * 购物车
 */
export const useCartStore = defineStore("gvi-mall-cart", {
  state: () => ({
    list: [
      { id: 1, name: "商品1", price: 10, num: 1, isSelected: true },
      { id: 2, name: "商品2", price: 20, num: 2, isSelected: false },
      { id: 3, name: "商品3", price: 30, num: 3, isSelected: true },
      { id: 4, name: "商品4", price: 40, num: 4, isSelected: false },
    ],
  }),

  getters: {
    doubleNum: (state) => state.num * 2,
    sum: (state) => {
      let total = 0;
      state.list.forEach((item) => {
        if (item.isSelected) {
          total += item.price * item.num;
        }
      });
      return total;
    },
  },

  actions: {
    updateItemNum(id, num) {
      console.log("updateItemNum---id, num =>", id, num);

      this.list.forEach((item) => {
        if (item.id === id) {
          item.num = num;
        }
      });
      console.log("sum", this.sum);
    },
  },
});
