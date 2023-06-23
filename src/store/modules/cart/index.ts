import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    cart: [],
  }),

  actions: {
    addToCart(car) {
      this.cart.push(car);
    },

    deleteById(carId) {
      this.cart = this.cart.filter((car) => car.id !== carId);
    },
  },
});