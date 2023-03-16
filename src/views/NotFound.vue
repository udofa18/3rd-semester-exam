<template>
  <div class="notfound-con">
    <h1 class="notfound-head">Sorry, you stumbled on the Wrong block</h1>
    <h3>
      Click
      <router-link class="here" to="/"> Here</router-link> to go back to
      homepage :)
    </h3>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    msg: String,
  },
};
</script>
<style>
.notfound-con {
  margin-top: 10%;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.715);
  height: 50vh;
}

.here {
  color: orange;
}
@media (min-width: 350px) and (max-width: 950px) {
  .notfound-con {
    margin-top: 30%;
    margin-bottom: 30%;
  }
}
</style>
