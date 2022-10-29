<template>
  <div
    :class="{ 'header-bar': true, 'header-bar--inverted': !isTermView }"
  >
    <div class="content">
      <div :class="{ 'personal-container': true, 'personal-container--inverted': !isTermView }">
        <Transition name="portrait">
          <img
            class="portrait-image"
            src="~@/assets/portrait.jpg"
            v-if="isTermView"
          />
        </Transition>
        <div :class="{ 'personal-text-container': true, 'personal-text-container--inverted': !isTermView }">
          <h2>Gergely Horvath</h2>
          <h3 :class="{ 'text-muted--inverted': !isTermView }">Software Developer</h3>
        </div>
      </div>
      <div class="layout-switcher-container">
        <p
          :class="{ 'text-lg text-muted mb-1': true, 'text-muted--inverted': !isTermView }"
        >
          Change UI
        </p>
        <div class="switch-container">
          <label class="switch">
            <input
              type="checkbox"
              v-model="isTermView"
              @change="handleUISwitch"
              :true-value="false"
              :false-value="true"
            />
            <span class="slider round"></span>
          </label>
          <span class="text-lg">{{ isTermView ? 'Terminal' : 'Visual' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue';

export default {
  name: 'HeaderPart',
  props: {
    isTerminalView: Boolean
  },
  setup(props, context) {
    const isTermView = toRefs(props).isTerminalView; // required for updating the value from props

    const handleUISwitch = () => context.emit('toggleUiSwitch');

    return {
      handleUISwitch,
      isTermView
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@/styles/HeaderPart.css";
</style>
