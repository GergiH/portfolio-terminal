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

    <div class="body" ref="terminalBody">
      <ul class="terminal-ul">
        <li v-for="(line, index) in lines" :key="line + index" v-html="line" />
      </ul>

      <div class="command-line-container">
        <div id="prompt" class="keep-spaces">{{ prompt }}</div>
        <input
          id="command-line"
          v-model="command"
          @keyup.enter="handleCommand"
          @keyup.up="handleCommandHistory(false)"
          @keyup.down="handleCommandHistory(true)"
          autocomplete="off"
          autofocus
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

const PROMPTPATH = '[visitor@gergih-portfolio] ';

const convertDateToString = (date) => {
  return date.toISOString().slice(0, 19).replace("T", " ");
};

export default {
  name: 'TerminalView',
  props: {
    commands: Object,
    commandNames: Object,
    inputtedCommands: Object
  },
  setup(props, context) {
    const command = ref('');
    const lines = ref([]);
    const prompt = ref(`${convertDateToString(new Date())} ${PROMPTPATH}`);
    const terminalBody = ref(null);
    let cmdIdx = ref(0);

    const getPrompt = () => {
      return `${convertDateToString(new Date())} ${PROMPTPATH}`;
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

    const handleCommandHistory = (isDownArrow) => {
      console.log(props.inputtedCommands.value);
      if (isDownArrow) {
        cmdIdx.value = cmdIdx.value === props.inputtedCommands.value.length - 1
          ? cmdIdx.value
          : cmdIdx.value++;
      } else {
        cmdIdx.value = cmdIdx.value === 0
          ? cmdIdx.value
          : cmdIdx.value--;
      }

      command.value = props.inputtedCommands.value[cmdIdx];
    };

    const handleCommand = async () => {
      await setContentAsync();
      prompt.value = getPrompt();

      // Handle the list of commands in the App component, so we always have the history
      context.emit('setInputtedCommands', command.value);

      command.value = '';

      terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
    };

    const handleInvalidCommand = () => {
      return `'${command.value}' is an invalid command, use ${props.commandNames.help} to get all valid commmands.`;
    };

    const setContentAsync = async () => {
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
            for (const description of props.commands.help) {
              lines.value.push(`<li><span class="help-command">${description[0]}</span> - ${description[1]}</li>`);
            }
            break;
          case props.commandNames.links:
            for (const link of props.commands.links) {
              lines.value.push(`<li>${link[0]} - <a href="${link[1]}" target="_blank">${link[1]}</a></li>`);
            }
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
      handleCommandHistory,
      lines,
      prompt,
      terminalBody
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@/styles/TerminalView.css"
</style>
