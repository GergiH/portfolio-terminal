<template>
  <HeaderPart
    :is-terminal-view="isTerminalView"
    @toggle-ui-switch="toggleUISwitch"
  />

  <div
    :class="{'background': true, 'terminalview-bg': isTerminalView, 'graphicalview-bg': !isTerminalView }"
  >
    <div class="main-content-container">
      <Transition name="terminalview">
        <TerminalView
          v-if="isTerminalView"
          :commands="commands"
          :command-names="COMMANDNAMES"
          :inputted-commands="inputtedCommands"
          @set-inputted-commands="setInputtedCommands"
        />
      </Transition>
      <Transition name="graphicalview">
        <GraphicalView v-if="!isTerminalView" :commands="commands" />
      </Transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import HeaderPart from './components/HeaderPart.vue';
import GraphicalView from './components/GraphicalView.vue';
import TerminalView from './components/TerminalView.vue';

const COMMANDNAMES = {
  about: 'about',
  career: 'career',
  clear: 'clear',
  help: 'help',
  links: 'links'
};

const LINKNAMES = {
  github: 'GitHub',
  linkedin: 'LinkedIn'
};

const calculateYears = (fromDate) => {
  const currentDate = new Date();
  const diffDate = currentDate - fromDate;
  const ageDate = new Date(diffDate);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const calculateAge = () => {
  return calculateYears(new Date(1990, 1, 1));
};

const calculateCareerAge = () => {
  return calculateYears(new Date(2016, 1, 1));
};

export default {
  name: 'App',
  components: {
    HeaderPart,
    GraphicalView,
    TerminalView
  },
  setup() {
    const isTerminalView = ref(true);
    const buttonIcon = ref('');
    const commands = {
      about: `A ${calculateAge()} years old software developer from Hungary. Basically interested in any topic, ranging from programming through cooking to psychology. When not coding, he's either watching random animal videos, gaming, having a drink with friends, or watching sports.`,
      career: `
        <div>${calculateCareerAge()} years of IT experience (in order) - in <strong>languages</strong>: C#, JavaScript, Python, MSSQL, PostgreSQL; in <strong>frameworks</strong>: ASP .NET, React, Django, (minimal) Vue. Mainly have worked with REST APIs, SOAP services, GitHub/GitLab, Jenkins pipelines, MVC pattern, xUnit, Visual Studio, VSCode, Vim, Windows, Linux. <i>(For more information, visit my Links)</i></div>
        <br/>
        <div>Open source projects:</div>
        <ul class="graphical-ul">
          <li><a href="https://github.com/IFRCGo/go-api/" target="_blank">IFRC GO Backend (Django)</a></li>
          <li><a href="https://github.com/IFRCGo/go-frontend/" target="_blank">IFRC GO Frontend (React)</a></li>
        </ul>`,
      clear: '',
      // Keeping these as arrays instead of objects/dictionaries as these are only used for rendering in loops
      help: [
        [COMMANDNAMES.about, 'Short and personal bio'],
        [COMMANDNAMES.career, 'High level overview of career path'],
        [COMMANDNAMES.clear, 'Clears the terminal'],
        [COMMANDNAMES.help, 'Lists all available commands'],
        [COMMANDNAMES.links, 'List of personal profiles']
      ],
      links: [
        [LINKNAMES.github, 'https://github.com/GergiH/'],
        [LINKNAMES.linkedin, 'https://www.linkedin.com/in/gergi-hrv/']
      ]
    };
    const inputtedCommands = ref([]);

    const setInputtedCommands = (command) => {
      // If we don't want duplicated commands in the history, but in this case it's not always chronological,
      // especially if some of the commands repeat
      // if (inputtedCommands.value && !inputtedCommands.value.find(elem => elem === command)) {
      //   inputtedCommands.value.push(command);
      // }

      inputtedCommands.value.push(command);
    };

    const toggleUISwitch = () => {
      isTerminalView.value = !isTerminalView.value
    };

    return {
      buttonIcon,
      commands,
      COMMANDNAMES,
      inputtedCommands,
      isTerminalView,
      setInputtedCommands,
      toggleUISwitch
    };
  }
}
</script>

<style>
@import "~@/styles/App.css"
</style>
