<template>
  <div class="accordion">
    <div class="accordion-sections">
      <div class="accordion-section">
        <input class="accordion-radio" type="radio" id="rd1" name="rd" checked>
        <label class="accordion-section-label" for="rd1">About</label>
        <div class="accordion-section-content">
          <img class="portrait-image portrait-image--inverted" src="~@/assets/portrait.jpg" />
          <div class="about-content">
            <h2 class="section-header">Horváth Gergely Zsolt</h2>
            <div v-if="props.commands" v-html="props.commands.about"></div>
          </div>
        </div>
      </div>
      <div class="accordion-section">
        <input class="accordion-radio" type="radio" id="rd2" name="rd">
        <label class="accordion-section-label" for="rd2">Career</label>
        <div class="accordion-section-content">
          <div v-if="props.commands" v-html="props.commands.career"></div>
        </div>
      </div>
      <div class="accordion-section">
        <input class="accordion-radio" type="radio" id="rd3" name="rd">
        <label class="accordion-section-label" for="rd3">Links</label>
        <div class="accordion-section-content">
          <ul class="graphical-ul" v-if="props.commands">
            <li v-for="link in props.commands.links" :key="link[0]">
              {{ link[0] }} - <a :href="link[1]" target="_blank">{{ link[1] }}</a>
            </li>
          </ul>
        </div>
      </div>
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

    onMounted(() => {
      setTimeout(() => aboutLink.value.click(), 500);
    });

    return {
      aboutLink,
      props
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../styles/GraphicalView.css">
/* @import "~@/styles/GraphicalView.css"; */
</style>
