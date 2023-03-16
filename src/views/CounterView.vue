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
            Input Quantity:
            <input class="value" @keydown.enter="setValueHandler" type="tel" />

            <h6>Press Enter</h6>
          </h3>
          <button class="button1" @click="increment">
            + Quantity
            <div class="count-con">{{ counter }}</div>
          </button>

          <button
            class="button2"
            :class="{ disabledButton: !counter }"
            :disabled="!counter"
            @click="decrease"
          >
            - Remove
          </button>
          <button class="button3" @click="reset">X Clear</button>
          <br />
          <button
            class="button4"
            :class="{ disabledButton: !counter }"
            :disabled="!counter"
            v-on:click="c"
          >
            Checkout
          </button>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
// import vuex from "vuex";

// vue.use(vuex);
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
    };
  },

  computed: {
    priceupdate() {
      return this.$store.getters.counter * this.price;
    },
  },
  setup() {
    const { counter, increment, decrease, reset, setValue } = useCounter();
    function setValueHandler(payload) {
      console.log(+payload?.target?.value);
      setValue(+payload?.target?.value);
    }
    return { counter, increment, decrease, reset, setValueHandler };
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
.value {
  background-color: rgba(0, 0, 0, 0.653);
  border: none;
  width: 30px;
  padding: 10px;
  color: white;
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
@media (min-width: 350px) and (max-width: 950px) {
  .product-con {
    display: block;
  }
  .product-image {
    width: 200px;
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
    margin-left: 50px;
  }
}
</style>
