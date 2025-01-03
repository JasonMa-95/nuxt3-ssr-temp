/**
 * 购物车
 */
import { ref, reactive, computed, watch } from "vue";

export const useCartStore = defineStore(
  "gvi-mall-cart",
  () => {
    // 状态
    const state = reactive({
      list: [
        {
          id: 1,
          name: "商品1",
          price: 10,
          quantity: 1,
          img: "https://data-file-platform.s3.ap-southeast-1.amazonaws.com/gvi-us-2024-06-25MTcxOTMwMTkwMzQ2MA%3D%3D.png",
          isSelected: true,
        },
        {
          id: 2,
          name: "商品2",
          price: 20,
          quantity: 2,
          img: "https://data-file-platform.s3.ap-southeast-1.amazonaws.com/gvi-us-2024-06-25MTcxOTMwMTkwMzQ2MA%3D%3D.png",
          isSelected: false,
        },
        {
          id: 3,
          name: "商品3",
          price: 30,
          quantity: 3,
          img: "https://data-file-platform.s3.ap-southeast-1.amazonaws.com/gvi-us-2024-06-25MTcxOTMwMTkwMzQ2MA%3D%3D.png",
          isSelected: true,
        },
        {
          id: 4,
          name: "商品4",
          price: 40,
          quantity: 4,
          img: "https://data-file-platform.s3.ap-southeast-1.amazonaws.com/gvi-us-2024-06-25MTcxOTMwMTkwMzQ2MA%3D%3D.png",
          isSelected: false,
        },
      ],
    });

    // 计算属性
    const sum = computed(() => {
      let total = 0;
      state.list.forEach((item) => {
        if (item.isSelected) {
          total += item.price * item.quantity;
        }
      });
      return total;
    });

    // 方法
    const updateItemQuantity = (id, quantity) => {
      console.log("updateItemQuantity---id, quantity =>", id, quantity);

      state.list.forEach((item) => {
        if (item.id === id) {
          item.quantity = quantity;
        }
      });
      console.log("sum", sum.value);
    };

    return {
      state,
      sum,
      updateItemQuantity,
    };
  }
  // {
  //   persist: true,
  // }
);
