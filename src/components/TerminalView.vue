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

      <div id="prompt">{{ prompt }}</div>
      <input id="command-line" v-model="command" @keyup.enter="handleCommand" autofocus />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

const COMMANDNAMES = {
  about: 'about',
  career: 'career',
  clear: 'clear',
  help: 'help',
  links: 'links'
};

export default {
  name: 'TerminalView',
  props: {},
  setup() {
    const command = ref('');
    const lines = ref([]);
    const prompt = `${new Date().toLocaleString()} - [visitor@gergih-portfolio] `;

    const commands = {
      about: 'qwe',
      career: '',
      clear: '',
      help: [
        [COMMANDNAMES.about, 'Short and personal bio'],
        [COMMANDNAMES.career, 'High level overview of career path'],
        [COMMANDNAMES.clear, 'Clears the terminal'],
        [COMMANDNAMES.help, 'Lists all available commands'],
        [COMMANDNAMES.links, 'List of personal profiles']
      ],
      links: [
        ['github', 'https://github.com/GergiH/'],
        ['linkedin', 'https://www.linkedin.com/in/gergi-hrv/']
      ]
    };

    const handleCommand = () => {
      setContent();

      command.value = "";

      return;
    };

    const handleInvalidCommand = () => {
      return `'${command.value}' is an invalid command, use ${COMMANDNAMES.help} to get all valid commmands.`;
    };

    const setContent = () => {
      lines.value.push(`<span class="keep-spaces">${prompt} ${command.value}</span>`);

      switch (command.value) {
        case COMMANDNAMES.about:
          lines.value.push(commands.about);
          break;
        case COMMANDNAMES.career:
          lines.value.push(commands.career);
          break;
        case COMMANDNAMES.clear:
          lines.value = [];
          break;
        case COMMANDNAMES.help:
          for (const description of commands.help)
          {
            lines.value.push(`<li><span class="help-command">${description[0]}</span> - ${description[1]}</li>`);
          }
          break;
        case COMMANDNAMES.links:
          lines.value.push(commands.links);
          break;
        case '':
        case undefined:
          break;
        default:
          lines.value.push(handleInvalidCommand(command));
          break;
      }
    };

    return {
      command,
      commands,
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
  border-radius: 10px 10px 0 0;
  color: #cccccc;
  font-family: Hack, "Cascadia Code", Consolas, "SF Mono", "DejaVu Sans Mono", monospace;
  height: 400px;
  margin: auto;
  text-align: left;
  width: 900px;
}

#prompt {
  display: inline-block;
  color: #cccccc;
  font-family: inherit;
  margin: 0;
  padding: 0;
  width: 49%;
}

#command-line {
  color: #f9e46b;
  background: #191323;
  border: 0px;
  display: inline-block;
  font-family: inherit;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 50%;
  -webkit-appearance: none;
}

#terminal-window > .top {
    background: #E8E6E8;
    border-radius: 5px 5px 0 0;
    color: black;
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
</style>
