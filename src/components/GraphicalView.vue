<template>
  <div id="panels">
    <div class='accordion'>
      <div class='accordion__item'>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper eget nisl vitae vulputate. Integer nulla leo, laoreet sed sapien ut, sollicitudin gravida ante. Nunc tortor est, posuere sit amet tincidunt eget, dictum quis nunc. Vestibulum malesuada lectus eu dignissim facilisis. Vestibulum sit amet venenatis eros. In iaculis euismod feugiat. Praesent sed facilisis augue. Aenean a vulputate turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In semper iaculis velit, a ornare velit. Etiam in nunc ante. Cras nec dolor eget magna efficitur gravida a at ante. Donec ut neque vel turpis varius lobortis et et massa. Nam lobortis erat vel erat molestie, non ullamcorper ipsum suscipit. Sed vel ornare nibh.

Sed congue leo vitae efficitur auctor. Ut hendrerit, mi nec facilisis pulvinar, arcu nisl suscipit dui, et iaculis felis diam eu nulla. Nunc at ultrices ligula, in ultricies metus. Maecenas vitae massa vel mauris venenatis pharetra id vitae dolor. Morbi rutrum cursus risus ut finibus. Maecenas euismod purus tellus, sit amet pellentesque augue egestas quis. Praesent ultrices justo eu tortor ultricies viverra. Integer porttitor molestie mi non tristique. Vivamus porttitor dolor vulputate maximus egestas. Nam turpis tortor, congue porta nisl a, dignissim lacinia dolor. Fusce ultrices libero nulla, posuere fermentum neque iaculis bibendum. Nullam nisi ipsum, malesuada vel varius ut, tempus vitae nunc. Praesent odio lectus, ultricies vitae odio a, aliquet venenatis nunc. Duis ornare, sem pulvinar venenatis elementum, ligula neque dapibus nisl, sit amet pulvinar sapien eros a enim. Fusce gravida diam sit amet elementum interdum.
        </p>
      </div>
      <div class='accordion__item'>
        <h3>Career</h3>
      </div>
      <div class='accordion__item' :style="{ backgroundImage: 'url(' + require('@/assets/portrait.jpg') + ')' }">
        <h3>Links</h3>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';

export default {
  name: 'GraphicalView',
  props: {
    commands: {},
    COMMANDNAMES: {}
  },
  setup() {

    return {
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#panels {
  display: flex;
  margin: auto;
  width: 900px;
}

.accordion {
  width: 40%;
  height: 100%;
  margin: auto;
  padding: 2em;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.accordion__item {
  flex-basis: 10%;
  height: 100%;
  margin-bottom: 1em;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: helvetica;
  background-color: #e6f8ff;
  cursor: pointer;
  box-shadow: 2px 2px .3em #67adb5;
  transition:
    flex-grow .3s linear,
    background-color 0.1s ease-in
}

.accordion__item:hover {
    background-color: #cde9f7;
    flex-grow: 3;
}

.accordion__item:active {
  box-shadow: 1px 1px .1em #67adb5;
  background-color: #bde6fc;
  color: white;
}
</style>
