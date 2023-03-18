/* eslint-disable */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Cart ({{ counter }})</h2>
    <div class="product-con">
      <div class="product-image">
        <img :src="image" alt="Shoe" />
      </div>
      <hr />
      <span class="product-details">
        <span>
          <h6>Product:</h6>
          <h3>{{ product }}</h3>
          <h6>Price per item:</h6>
          <h4>${{ price }}</h4>
          <h6>Description:</h6>
          <h4>{{ description }}</h4>
          <h6>Total Payment</h6>
          <h1 style="color: greenyellow">${{ priceupdate }}</h1>
        </span>
        <div class="cart-con">
          <h3>
            <form style="align-items: center">
              <input
                v-model="qty"
                style="width: 50%"
                class="value"
                type="tel"
                placeholder="Input Qty"
              />
              <button
                @click.prevent="setValueHandler"
                style="
                  width: 30%;
                  margin-left: 40px;
                  height: auto;
                  background-color: orangered;
                  color: white;
                  height: auto;
                  text-align: center;
                "
              >
                set
              </button>
            </form>
            <h6>Press Enter</h6>
          </h3>
          <span
            @click="
              qtyInc = true;
              qtyDec = false;
              qtyClr = false;
            "
          >
            <button class="button1" @click="increment">
              + Quantity
              <div class="count-con">
                {{ counter }}
              </div>
            </button>
          </span>
          <span
            @click="
              qtyDec = true;
              qtyClr = false;
              qtyInc = false;
            "
          >
            <button
              class="button2"
              :class="{ disabledButton: !counter }"
              :disabled="!counter"
              @click="decrease"
            >
              - Remove
            </button>
          </span>
          <span
            @click="
              qtyDec = false;
              qtyInc = false;
              qtyClr = true;
            "
          >
            <button class="button3" @click="reset">X Clear</button>
          </span>
          <br />
          <Transition name="fade" appear>
            <button
              class="button4"
              :class="{ disabledButton: !counter }"
              :disabled="!counter"
              @click="showModal = true"
            >
              Checkout
            </button></Transition
          >
        </div>
      </span>
      <transition name="fade" appear>
        <div
          class="modal-overlay"
          v-if="showModal"
          @click="showModal = false"
        ></div>
      </transition>
      <Transition name="slide" appear>
        <div class="popup-con" v-if="showModal">
          <div class="popup-data">
            <h1>Success</h1>
            <p style="color: white">
              You have successfully bought {{ counter }} pieces of Phantom shoes
            </p>
            <button class="button5" @click="showModal = false">Close</button>
          </div>
        </div>
      </Transition>
      <Transition name="toast" appear>
        <div class="inc-alert" v-if="qtyInc">
          <h1>Item added</h1>
        </div>
      </Transition>
      <Transition name="toast" appear>
        <div class="inc-alert dec" v-if="qtyDec">
          <h1>Item Removed</h1>
        </div>
      </Transition>
      <Transition name="toast" appear>
        <div class="inc-alert clr" v-if="qtyClr">
          <h1>Cleared</h1>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
// import vuex from "vuex";

// vue.use(vuex);
import { ref } from "vue";
import image from "../assets/Subject.png";
import useCounter from "../components/counter";

export default {
  name: "productCounter",
  props: {
    msg: String,
  },

  data() {
    return {
      inputquantity: "",
      product: "Phantom Men Shoe",
      description:
        "Red Men sports shoes. Durable and efficient. can be used for all sporting Events",
      price: "102",
      image: image,
      link: "#",
      disabled: true,
      update: "",
      showModal: false,
      qtyInc: false,
      qtyDec: false,
      qtyClr: false,
    };
  },

  computed: {
    priceupdate() {
      return this.$store.getters.counter * this.price;
    },
    qt() {
      return this.$store.getters.qtyInc;
    },
  },
  setup() {
    const { counter, increment, decrease, reset, setValue } = useCounter();
    const qty = ref("");

    function setValueHandler() {
      setValue(+qty.value);
    }
    return {
      counter,
      increment,
      decrease,
      reset,
      setValueHandler,
      qty,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
}
h3 {
  margin: 10px 0 0;
  margin-bottom: 20px;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  list-style-type: none;
}
a {
  color: #42b983;
}
h6 {
  color: rgb(247, 92, 92);
  padding: 1px;
  margin-bottom: 5px;
  margin-top: 1px;
}
h4 {
  margin-top: 1px;
  margin-bottom: 20px;
}
input {
  background-color: orange;
  border: 2px solid orange;
}
button {
  padding: 15px;
  width: 60%;
  margin: 10px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.782);
  cursor: pointer;
}
button:hover {
  scale: 110%;
  transition: 0.2s ease-out;
}
.button1 {
  position: relative;
  margin-top: 5%;
  margin-right: 7%;
  color: black;
  background-color: rgb(249, 120, 21);
}
.button3 {
  background-color: transparent;
  margin-left: 3%;
  color: red;
  box-shadow: none;
}
.button4 {
  margin-top: 5%;
  background-color: red;
  color: white;
}
.button5 {
  background-color: rgb(255, 115, 0);
  color: white;
  width: 30%;
  text-align: center;
}
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
.count-con {
  top: -0;
  margin-top: -10%;
  margin-left: 80%;
  position: absolute;
  color: red;
  font-size: 15px;
  width: 8%;
  padding: 10%;
  height: auto;
  text-align: center;
  border-radius: 100%;
  background-color: white;
}

.product-con {
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.product-details {
  background-color: rgba(25, 2, 49, 0.736);
  padding: 20px;
  width: 90%;
  margin: 10px;
  text-align: left;
  display: flex;
}
.product-details p {
  font-size: 20px;
}
form {
  margin-left: 10px;
}
.value {
  background-color: rgba(0, 0, 0, 0.653);
  border: 2px solid orange;
  width: 30px;
  padding: 15px;
  color: white;
  border-radius: 10px;
}
.product-image {
  width: 400px;
  margin: 50px;
  height: 250px;
  padding: 20px;
  background-color: #ea00232c;
  border-radius: 50%;
  padding: 10px;
  margin-right: 100px;
  position: relative;
}
.product-image img {
  position: absolute;
}
.product-image img {
  margin-right: 100px;
  left: 0;
  width: 120%;
}
.popup-con {
  border: 2px solid orange;
  width: 30%;
  height: 30%;
  background-color: rgba(11, 9, 9, 0.876);
  position: absolute;
  border-radius: 30px;
  margin-left: 25%;
  z-index: 99;
  padding: 30px;
  /* position: fixed; */
}
.inc-alert {
  font-size: 6px;
  position: absolute;
  color: white;
  background-color: green;
  padding: 8px;
  border-radius: 10px;
}
.dec {
  background-color: red;
}
.clr {
  background-color: white;
  color: red;
}
.popup-data {
  color: lime;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(-60%);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 0.3s ease;
}
.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60%);
}
.toast-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.542);
}
@media (min-width: 350px) and (max-width: 950px) {
  form {
    margin-left: 40px;
  }
  .inc-alert {
    z-index: 99;
    position: fixed;
    top: 0;
    margin-left: 30%;
    margin-top: 20%;
  }
  .popup-con {
    position: fixed;
    top: 0;
    margin: 0 auto;
    margin-top: 50%;
    width: 60%;
    height: 30%;
  }
  .product-con {
    display: block;
  }
  .product-image {
    width: 220px;
    height: 250px;
    padding: 20px;
    background-color: #ea00232c;
    border-radius: 50%;
    margin-right: 100px;
    position: relative;
  }
  .product-image img {
    margin: auto;
    width: 100%;
  }
  .product-details {
    margin: auto;
    display: block;
  }
  .cart-con {
    margin: auto;
    margin-left: 30px;
  }
  button {
    width: 80%;
  }
}
</style>
