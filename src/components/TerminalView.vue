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
      <ul class="terminal-ul" v-if="windowWidth >= 800">
        <li v-for="(line, index) in lines" :key="line.message + index" v-html="line.prompt + line.message" />
      </ul>
      <ul class="terminal-ul" v-if="windowWidth < 800">
        <li v-for="(line, index) in lines" :key="line.message + index" v-html="line.smallPrompt + line.message" />
      </ul>

      <div class="command-line-container">
        <div id="prompt" class="keep-spaces">{{ windowWidth >= 800 ? prompt : '~ ' }}</div>
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
import { ref, onMounted, onUnmounted, toRefs } from 'vue';

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
    const windowWidth = ref(window.innerWidth);
    const cmdIdx = ref(-1);
    const inputtedCommandsRef = toRefs(props).inputtedCommands;

    const getPrompt = () => {
      return `${convertDateToString(new Date())} ${PROMPTPATH}`;
    };

    // First few lines, also explaining the 'help' command
    const setInitialLines = () => {
      if (windowWidth.value >= 800) {
        lines.value.push({
          prompt: '',
          smallPrompt: '',
          message: 'Interactive terminal, made by'
        });
        lines.value.push({
          prompt: '',
          smallPrompt: '',
          message: String.raw`<span class="keep-spaces">_  _ ____ ____ _  _ ____ ___ _  _    ____ ____ ____ ____ ____ _    _   _ </span>`
        });
        lines.value.push({
          prompt: '',
          smallPrompt: '',
          message: String.raw`<span class="keep-spaces">|__| |  | |__/ |  | |__|  |  |__|    | __ |___ |__/ | __ |___ |     \_/  </span>`
        });
        lines.value.push({
          prompt: '',
          smallPrompt: '',
          message: String.raw`<span class="keep-spaces">|  | |__| |  \  \/  |  |  |  |  |    |__] |___ |  \ |__] |___ |___   |   </span>`
        });
      } else {
        lines.value.push({
          prompt: '',
          smallPrompt: '',
          message: 'Interactive terminal, made by: Horváth Gergely Zsolt'
        });
      }

      lines.value.push({
        prompt: '',
        smallPrompt: '',
        message: 'For available commands use \'<span class="help-command">help</span>\''
      });
      lines.value.push({
        prompt: '',
        smallPrompt: '',
        message: '<br/>'
      });
    };

    const handleCommandHistory = (isDownArrow) => {
      if (cmdIdx.value === -1) {
        cmdIdx.value = inputtedCommandsRef.value.length;
      }

      if (isDownArrow) {
        cmdIdx.value = cmdIdx.value === inputtedCommandsRef.value.length - 1
          ? cmdIdx.value = inputtedCommandsRef.value.length - 1
          : cmdIdx.value += 1;
      } else {
        cmdIdx.value = cmdIdx.value === 0
          ? cmdIdx.value = 0
          : cmdIdx.value -= 1;
      }

      command.value = inputtedCommandsRef.value[cmdIdx.value];
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
      lines.value.push({
        prompt: `<span class="keep-spaces">${getPrompt()}</span>`,
        smallPrompt: '~ ',
        message: `<span>${command.value}</span>`
      });

      switch (command.value) {
        case props.commandNames.about:
          lines.value.push({
            prompt: '',
            smallPrompt: '',
            message: props.commands.about
          });
          break;
        case props.commandNames.career:
          lines.value.push({
            prompt: '',
            smallPrompt: '',
            message: props.commands.career
          });
          break;
        case props.commandNames.clear:
          lines.value = [];
          // setInitialLines();
          break;
        case props.commandNames.help:
          for (const description of props.commands.help) {
            lines.value.push({
              prompt: '',
              smallPrompt: '',
              message: `<li><span class="help-command">${description[0]}</span> - ${description[1]}</li>`
            });
          }
          break;
        case props.commandNames.links:
          for (const link of props.commands.links) {
            lines.value.push({
              prompt: '',
              smallPrompt: '',
              message: `<li>${link[0]} - <a href="${link[1]}" target="_blank">${link[1]}</a></li>`
            });
          }
          break;
        case '':
        case undefined:
          break;
        default:
          lines.value.push({
            prompt: '',
            smallPrompt: '',
            message: handleInvalidCommand(command)
          });
          break;
      }
    };

    const resizeListener = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      setInitialLines();
      window.addEventListener('resize', resizeListener);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resizeListener);
    });

    return {
      command,
      getPrompt,
      handleCommand,
      handleCommandHistory,
      inputtedCommandsRef,
      lines,
      prompt,
      terminalBody,
      windowWidth
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../styles/TerminalView.css">
/* @import "~@/styles/TerminalView.css" */
</style>
