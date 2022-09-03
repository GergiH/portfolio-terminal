<template>
  <HeaderPart />

  <TerminalView />
</template>

<script>
import HeaderPart from './components/HeaderPart.vue'
import TerminalView from './components/TerminalView.vue'

export default {
  name: 'App',
  components: {
    HeaderPart,
    TerminalView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  color: #1b1a20;
  margin-top: 60px;
}

.keep-spaces {
  white-space: pre-wrap;
}
</style>
