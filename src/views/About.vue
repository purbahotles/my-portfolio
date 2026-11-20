<template>
  <section class="container mx-auto">
    <!-- About Me & Early Career -->
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <section
        v-for="block in introBlocks"
        :key="block.title"
        class="bg-primary-light p-8 m-5 rounded-lg shadow-lg"
      >
        <h2 class="text-4xl font-bold text-primary-dark">{{ block.title }}</h2>
        <p class="mt-4 text-lg text-primary/75">
          <template v-for="(part, i) in block.parts" :key="i">
            <strong v-if="part.strong">{{ part.text }}</strong>
            <span v-else>{{ part.text }}</span>
          </template>
        </p>
      </section>
    </div>

    <!-- Professional Experience -->
    <section class="bg-primary-light p-8 m-5 rounded-lg shadow-lg">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark text-center"
      >
        Professional Experience
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
        <ExperienceCard
          v-for="exp in experiences"
          :key="exp.title"
          :title="exp.title"
          :description="exp.description"
        />
      </div>
    </section>

    <!-- Skills and Technologies -->
    <section class="bg-primary-light p-8 m-5 rounded-lg shadow-lg">
      <h2 class="text-4xl font-bold text-primary-dark text-center">
        Skills and Technologies
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4">
        <SkillGroup
          v-for="group in skillGroups"
          :key="group.title"
          :title="group.title"
          :items="group.items"
        />
      </div>
    </section>
  </section>
</template>

<script setup>
import ExperienceCard from '../components/ExperienceCard.vue'
import SkillGroup from '../components/SkillGroup.vue'

/* ---------- About Me & Early Career ---------- */
const introBlocks = [
  {
    title: 'About Me',
    parts: [
      { text: 'Hello! I am a passionate and dedicated ' },
      { text: 'Software Developer', strong: true },
      {
        text:
          ' with over 7 years of professional experience in building scalable web and mobile applications. My expertise spans ',
      },
      {
        text:
          'Frontend Development, Full Stack Development, and Mobile Application Development',
        strong: true,
      },
      {
        text:
          ', with hands-on experience in Vue.js, React, React Native, Angular, Laravel, and Node.js. Throughout my career, I have contributed to various projects across fintech, financial services, insurance, and international businesses. My experience includes modernizing legacy applications, developing payment gateway interfaces, building enterprise dashboards, and creating cross-platform mobile applications. I am passionate about writing maintainable code, solving complex technical challenges, and delivering reliable user experiences.',
      },
    ],
  },
  {
    title: 'Early Career',
    parts: [
      {
        text:
          'My journey in the technology industry began during my university years, when I worked as a freelance designer from 2014 to 2018. During this period, I developed my visual design skills using Adobe Illustrator, Adobe Photoshop, and Figma. I frequently participated in online design competitions, which helped me develop creativity, visual communication, and attention to detail. This design background continues to influence my approach to frontend development, allowing me to combine technical implementation with thoughtful user interface design.',
      },
    ],
  },
]

/* ---------- Professional Experience ---------- */
const experiences = [
  {
    title:
      'Remote Frontend Developer at Confidential Fintech Company (August 2025 - August 2026):',
    description:
      'Worked remotely as a Frontend Developer on a QRIS Payment Gateway migration project, modernizing a legacy Angular application to Vue 3. Contributed to the migration process while maintaining application functionality and ensuring a smooth transition with zero downtime. Responsibilities included developing responsive payment interfaces, implementing reusable components, integrating RESTful APIs, and improving application maintainability. Worked with Vue 3, JavaScript, and modern frontend development practices while collaborating with team members in a remote working environment.',
  },
  {
    title:
      'Frontend Mobile Developer at Prudential Indonesia (April 2024 - April 2025):',
    description:
      'Worked as a Frontend Mobile Developer on PRUForce, a mobile application designed to support insurance agent activities and business operations. Developed and maintained mobile application interfaces using React Native, implemented reusable and modular UI components, and contributed to application development using Micro Frontend Architecture. Collaborated with cross-functional teams to build and maintain mobile application features for Android and iOS platforms.',
  },
  {
    title:
      'Senior Frontend Developer at PT. Pegadaian (December 2020 - April 2024):',
    description:
      'Developed complex dashboards and internal enterprise applications for employee operations. Contributed to LOS Prime (Loan Origin System), an application supporting loan applications and top-up loan processes, and PROMISE, a system used to manage delinquent and defaulted loans. Built and maintained frontend applications using Vue.js, TypeScript, Tailwind CSS, and Bootstrap. Also developed Progressive Web Applications (PWAs) and Single Page Applications (SPAs), focusing on responsive interfaces, application performance, maintainability, and improved user experience.',
  },
  {
    title:
      'Full Stack Developer at CPRVision Singapore (March 2019 - December 2020):',
    description:
      'Joined CPRVision Singapore, based in Batam, Indonesia, as part of the software development team. Developed web applications for international clients, including Gucci Singapore, Gucci Malaysia, Raffles Hotel, Small Luxury Hotels, Soneva, Guinness, Tiger Beer, Tiger Roar, Shiseido, Lancôme Paris, and Adidas. Worked with Laravel, Angular, React.js, and Vue.js to develop web application features and user interfaces. Also gained experience with Server-Side Rendering (SSR) to improve application performance and SEO. Worked extensively with Ubuntu Desktop and Ubuntu Server environments for application deployment and management.',
  },
]

/* ---------- Skills and Technologies ---------- */
const skillGroups = [
  {
    title: 'Design',
    items: [
      { name: 'Adobe Illustrator' },
      { name: 'Adobe Photoshop' },
      { name: 'Figma' },
      { name: 'UI/UX Design' },
      { name: 'Responsive Design' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      {
        name: 'Vue.js',
        children: [
          'Vue CLI',
          'Vuex',
          'Pinia',
          'Vue Router',
          'Nuxt.js',
          'Vuetify',
          'Quasar Framework',
          'BootstrapVue',
          'Jest',
          'Cypress',
        ],
      },
      {
        name: 'Angular',
        children: [
          'Angular CLI',
          'Angular Material',
          'Angular Universal',
          'Angular Elements',
          'Jasmine / Karma',
          'Angular Router',
        ],
      },
      { name: 'React.js' },
      { name: 'React Native' },
      { name: 'Vite' },
      { name: 'jQuery' },
      { name: 'LESS' },
      { name: 'Webpack' },
      { name: 'SASS / SCSS' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Single Page Applications (SPA)' },
      { name: 'Server-Side Rendering (SSR)' },
      { name: 'Progressive Web Apps (PWA)' },
      { name: 'Micro Frontend Architecture' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'NestJS' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'RESTful APIs' },
      { name: 'OAuth2 / JWT' },
      { name: 'GraphQL' },
      { name: 'Database Management' },
      { name: 'SQL & NoSQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    title: 'Tools and Platforms',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Bitbucket' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'SDLC Agile / Scrum' },
      { name: 'Unit Testing' },
      { name: 'CI/CD Pipelines' },
      { name: 'Webpack' },
      { name: 'Vite' },
      { name: 'NPM / Yarn' },
      { name: 'Ubuntu Desktop and Server' },
      { name: 'Linux Server Management' },
      { name: 'Nginx' },
      { name: 'PM2' },
      { name: 'OOP, MVC/MVVM' },
      { name: 'WordPress Development' },
      { name: 'WordPress Theme & Plugin' },
    ],
  },
]
</script>