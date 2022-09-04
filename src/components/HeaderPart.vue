<template>
  <div class="header-background"></div>

  <div class="image-container">
    <img src="../assets/portrait.jpg" />
  </div>
</template>

<script>
export default {
  name: 'HeaderPart',
  props: {
    msg: String
  },
  setup() {

    return {
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border-radius: 50%;
  width: inherit;
}

.header-background {
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  border-bottom-left-radius: 55%;
  border-bottom-right-radius: 55%;
  height: 150px;
  left: 0px;
  overflow: hidden;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: -10;
}

.image-container {
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 4px 4px 10px -2px #7a7a7a;
  left: 40px;
  padding: 6px;
  position: absolute;
  height: 140px;
  top: 40px;
  width: 140px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  z-index: -5;
}
</style>
