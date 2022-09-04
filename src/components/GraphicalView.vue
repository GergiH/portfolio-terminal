<template>
  <div id="panels">
    <div class="accordion">
      <section id="about">
        <h2><a ref="aboutLink" href="#about" :onclick="showImage">About</a></h2>

        <div class="section-content">
          <div class="inline-block" v-if="isVisible">
            <img class="portrait-image portrait-image--small" src="~@/assets/portrait.jpg" />
          </div>
          <div class="p-l-2 inline-block">
            <h3 class="section-header">Horváth Gergely Zsolt</h3>
            <div v-if="props.commands" v-html="props.commands.about"></div>
          </div>
        </div>
      </section>
      <section id="career">
        <h2><a href="#career" :onclick="hideImage">Career</a></h2>
        <div class="section-content">
          <div v-if="props.commands" v-html="props.commands.career"></div>
        </div>
      </section>
      <section id="links">
        <h2><a href="#links" :onclick="hideImage">Links</a></h2>
        <div class="section-content">
          <ul class="graphical-ul" v-if="props.commands">
            <li v-for="link in props.commands.links" :key="link[0]">
              {{ link[0] }} - <a :href="link[1]" target="_blank">{{ link[1] }}</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'GraphicalView',
  props: {
    commands: {}
  },
  setup(props) {
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
      props,
      showImage
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@/styles/GraphicalView.css";
</style>
