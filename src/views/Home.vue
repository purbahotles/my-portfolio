```vue
<template>
  <section class="min-h-[85vh] flex items-center justify-center px-5 py-12">
    <div class="w-full max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="relative w-full max-w-md">
            <div class="absolute inset-0 bg-primary-dark opacity-10 rounded-2xl rotate-3"></div>

            <div class="relative bg-primary-light border border-primary-light rounded-2xl shadow-xl overflow-hidden">
              <img
                src="../assets/photo-profile.svg"
                alt="Hotles Purba - Software Developer"
                class="w-full h-auto object-cover"
              />
            </div>

            <div class="absolute -bottom-5 -left-5 bg-primary-light border border-primary-light rounded-xl shadow-lg p-4">
              <h3 class="text-2xl font-bold text-primary-dark">7+</h3>
              <p class="text-sm text-primary opacity-75">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <!-- Introduction -->
        <div class="order-2 lg:order-1 text-center lg:text-left">

          <p class="text-primary-dark font-semibold text-sm sm:text-base uppercase tracking-widest mb-4">
            Hello, I'm
          </p>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
            Hotles Purba
          </h1>

          <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-dark mt-4">
            Software Developer
          </h2>

          <p class="text-base sm:text-lg text-primary opacity-75 mt-6 leading-relaxed">
            A passionate Software Developer with over 7 years of professional
            experience in building scalable web and mobile applications.
            Specialized in Frontend Development, Full Stack Development,
            and Mobile Application Development.
          </p>

          <p class="text-base text-primary opacity-75 mt-4 leading-relaxed">
            Experienced in modernizing legacy applications, developing
            enterprise solutions, building payment gateway interfaces,
            and delivering responsive user experiences using modern
            JavaScript technologies.
          </p>

          <!-- Main Technologies -->
          <div class="mt-7">
            <p class="text-sm font-semibold text-primary-dark mb-3">
              Core Technologies
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-2">
              <span
                v-for="technology in technologies"
                :key="technology"
                class="px-4 py-2 rounded-full text-sm font-medium bg-primary-light border border-primary-light text-primary-dark"
              >
                {{ technology }}
              </span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <router-link
              to="/about"
              class="px-6 py-3 rounded-lg bg-primary-dark text-white font-semibold hover:opacity-80 transition duration-300"
            >
              About Me
            </router-link>


            <router-link
              to="/projects"
              class="px-6 py-3 rounded-lg border border-primary-dark text-primary-dark font-semibold hover:bg-primary-dark hover:text-white transition duration-300"
            >
              Projects
            </router-link>

            <router-link
              to="/contact"
              class="px-6 py-3 rounded-lg border border-primary-dark text-primary-dark font-semibold hover:bg-primary-dark hover:text-white transition duration-300"
            >
              Contact Me
            </router-link>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      technologies: [
        "Vue.js",
        "React",
        "React Native",
        "Angular",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Laravel",
      ],
    };
  },
};
</script>
```