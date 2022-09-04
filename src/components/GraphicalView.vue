<template>
  <div id="panels">
    <div class="accordion">
      <section id="about">
        <h2><a ref="aboutLink" href="#about" :onclick="showImage">About</a></h2>

        <div class="section-content">
        <div class="inline-block" v-if="isVisible">
          <img class="portrait-image portrait-image--small" src="~@/assets/portrait.jpg" />
        </div>
        <div class="inline-block">
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, 
        </div>
      </div>
      </section>
      <section id="career">
        <h2><a href="#career" :onclick="hideImage">Title Two</a></h2>
        <div class="section-content"><p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p></div>
      </section>
      <section id="links">
        <h2><a href="#links" :onclick="hideImage">Title Three</a></h2>
        <div class="section-content"><p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p></div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'GraphicalView',
  props: {
    commands: {},
    COMMANDNAMES: {}
  },
  setup() {
    const aboutLink = ref(null);
    const isVisible = ref(true);

    const hideImage = () => {
      isVisible.value = false;
    };

    const showImage = () => {
      isVisible.value = true;
    }

    onMounted(() => {
      setTimeout(() => aboutLink.value.click(), 500);
    });

    return {
      aboutLink,
      hideImage,
      isVisible,
      showImage
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@/styles/GraphicalView.css"
</style>
