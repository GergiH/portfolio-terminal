<template>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border-radius: 50%;
  width: inherit;
}

.image-container {
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 4px 4px 14px -2px #7a7a7a;
  padding: 10px;
  height: 140px;
  width: 140px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
</style>
