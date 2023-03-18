<template>
  <div class="hello">
    <div class="img-div">
      <img :src="image" />
    </div>
    <div class="text-con">
      <h1>{{ msg }}</h1>

      <p>
        Welcome to our Online Marketplace. We are the best sellers of American
        sneakers and boots.You can order in bulk and we diliver to any location
        worldwide
      </p>
      <router-link class="nav-item" to="/counter">
        <button>Buy Product</button></router-link
      >
    </div>
  </div>
</template>

<script>
import image from "../assets/Subject3.png";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      image: image,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: auto;
  height: 100%;
  width: 90%;
  display: flex;
  padding-top: 60px;
}
.text-con {
  text-align: left;
}
h1 {
  width: 30;
  color: rgb(248, 110, 30);
  font-size: 50px;
}
p {
  margin: auto;
  /* width: 30%; */
  font-size: 20px;
}
img {
  /* position: absolute; */
  width: 80%;
  padding-top: 20px;
  left: 0;
  margin-left: -60px;
  box-shadow: 30px solid black[];
}
.img-div {
  position: relative;
  margin-left: 500px;
  margin: 20px;
  width: 100%;
}
button {
  cursor: pointer;
  left: 0;
  margin-top: 40px;
  padding: 20px;
  background-color: red;
  border-radius: 10px;
  color: white;
  border: none;
}
@media (min-width: 350px) and (max-width: 950px) {
  h1 {
    width: 100%;
    color: orange;
    font-size: 40px;
  }
  .hello {
    margin: auto;
    width: 20;
    display: block;
    padding-top: 60px;
  }
  .text-con {
    text-align: center;
    margin-bottom: 15%;
  }
  .img-div {
    display: contents;
  }
  img {
    /* position: absolute; */
    width: 50%;
    padding-top: 5px;
    margin-left: 50px;
    box-shadow: 30px solid black[];
  }
}
</style>
