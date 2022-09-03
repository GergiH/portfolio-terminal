<template>
  <TerminalView />
</template>

<script>
import TerminalView from './components/TerminalView.vue'

export default {
  name: 'App',
  components: {
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
