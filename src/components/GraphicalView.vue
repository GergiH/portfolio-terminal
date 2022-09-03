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
  name: 'GraphicalView',
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

</style>
