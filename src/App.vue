<template>
  <HeaderPart />

  <Transition>
    <div class="portrait-image-container" v-if="isTerminalView">
      <img class="portrait-image" src="~@/assets/portrait.jpg" />
    </div>
  </Transition>

  <Transition>
    <TerminalView v-if="isTerminalView" :commands="commands" :command-names="COMMANDNAMES" />
  </Transition>
  <Transition>
    <GraphicalView v-if="!isTerminalView" :commands="commands" />
  </Transition>

  <div class="button-wrapper" data-tooltip="Switch layout">
    <button class="layout-switcher" :onclick="toggleView" v-html="buttonIcon" />
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

    const toggleView = () => {
      isTerminalView.value = !isTerminalView.value;
      handleButtonIcon();
    };

    const handleButtonIcon = () => {
      if (isTerminalView.value) {
        buttonIcon.value = '<svg class="svg-icon" viewBox="0 0 20 20" style="width:80%;height:80%;"><path fill="#F7F7F7" d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645"></path></svg>';
      } else {
        buttonIcon.value = '<svg class="svg-icon" viewBox="0 0 20 20" style="width:80%;height:80%;"><path fill="#F7F7F7" d="M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541"></path></svg>';
      }
    };

    handleButtonIcon();

    return {
      buttonIcon,
      commands,
      COMMANDNAMES,
      isTerminalView,
      toggleView
    };
  }
}
</script>

<style>
@import "~@/styles/App.css"
</style>
