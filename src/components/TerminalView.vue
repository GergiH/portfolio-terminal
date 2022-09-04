<template>
  <div id="terminal-window">
    <div class="top">
        <div class="btns">
            <span class="circle red"></span>
            <span class="circle yellow"></span>
            <span class="circle green"></span>
        </div>
        <div class="title">
          <strong>Terminal</strong>
        </div>
    </div>

    <div class="body">
      <ul>
        <li v-for="(line, index) in lines" :key="line + index" v-html="line" />
      </ul>

      <div class="command-line-container">
        <div id="prompt" class="keep-spaces">{{ prompt }}</div>
        <input id="command-line" v-model="command" @keyup.enter="handleCommand" autofocus />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

const PROMPTPATH = '[visitor@gergih-portfolio] ';

export default {
  name: 'TerminalView',
  props: {
    commands: {},
    commandNames: {}
  },
  setup(props) {
    const command = ref('');
    const lines = ref([]);
    const prompt = ref(new Date().toLocaleString() + PROMPTPATH);

    const getPrompt = () => {
      return new Date().toLocaleString() + PROMPTPATH;
    };

    // First few lines, also explaining the 'help' command
    const setInitialLines = () => {
      lines.value.push('Interactive terminal, made by');
      lines.value.push(String.raw`<span class="keep-spaces">_  _ ____ ____ _  _ ____ ___ _  _    ____ ____ ____ ____ ____ _    _   _ </span>`);
      lines.value.push(String.raw`<span class="keep-spaces">|__| |  | |__/ |  | |__|  |  |__|    | __ |___ |__/ | __ |___ |     \_/  </span>`);
      lines.value.push(String.raw`<span class="keep-spaces">|  | |__| |  \  \/  |  |  |  |  |    |__] |___ |  \ |__] |___ |___   |   </span>`);
      lines.value.push('For available commands use \'<span class="help-command">help</span>\'');
      lines.value.push('<br/>');
    };

    const handleCommand = () => {
      setContent();
      prompt.value = getPrompt();
      command.value = "";
    };

    const handleInvalidCommand = () => {
      return `'${command.value}' is an invalid command, use ${props.commandNames.help} to get all valid commmands.`;
    };

    const setContent = () => {
      lines.value.push(`<span class="keep-spaces">${getPrompt()}</span><span>${command.value}</span>`);

      switch (command.value) {
        case props.commandNames.about:
          lines.value.push(props.commands.about);
          break;
        case props.commandNames.career:
          lines.value.push(props.commands.career);
          break;
        case props.commandNames.clear:
          lines.value = [];
          // setInitialLines();
          break;
        case props.commandNames.help:
          for (const description of props.commands.help)
          {
            lines.value.push(`<li><span class="help-command">${description[0]}</span> - ${description[1]}</li>`);
          }
          break;
        case props.commandNames.links:
          lines.value.push(props.commands.links);
          break;
        case '':
        case undefined:
          break;
        default:
          lines.value.push(handleInvalidCommand(command));
          break;
      }
    };

    onMounted(() => {
      setInitialLines();
    })

    return {
      command,
      getPrompt,
      handleCommand,
      lines,
      prompt
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

textarea:focus, input:focus{
  outline: none;
}

#terminal-window :deep(.help-command) {
  color: #ab98dd;
}

#terminal-window {
  background: #191323;
  border: 1px solid #000000;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 0px 10px 0px #242424;
  color: #cccccc;
  font-family: "Roboto Mono", "Ubuntu Mono", "Fira Code", "Cascadia Code", Consolas, "SF Mono", "DejaVu Sans Mono", monospace;
  height: 400px;
  margin: auto;
  text-align: left;
  width: 800px;
}

#prompt {
  display: inline-block;
  color: #cccccc;
  font-family: inherit;
  margin: 0;
  padding: 0;
}

#command-line {
  color: #f9e46b;
  background: #191323;
  border: 0px;
  flex: 2;
  font-family: inherit;
  overflow: hidden;
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
}

#terminal-window > .top {
  background: #3e4045;
  border: 1px solid #787a7d;
  border-bottom-color: #000000;
  border-radius: 5px 5px 0 0;
  color: #fcfcfd;
  padding: 5px;
}

#terminal-window > .top > .title {
  text-align: center;
}

#terminal-window > .body {
  overflow: hidden;
  padding: 8px;
}

.btns {
  padding-top: 1px;
  position: absolute;
}

.circle {
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  border-radius: 15px;
  height: 12px;
  margin-left: 2px;
  width: 12px;
}

.red {
  background: #EC6A5F; border-color: #D04E42;
}

.green {
  background: #64CC57; border-color: #4EA73B;
}

.yellow {
  background: #F5C04F; border-color: #D6A13D;
}

.command-line-container {
  display: flex;
}
</style>
