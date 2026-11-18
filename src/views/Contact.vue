<template>
  <section class="min-h-[75vh] flex items-center justify-center px-5 py-12">
    <div class="w-full max-w-5xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-sm font-semibold uppercase tracking-widest text-primary-dark">
          Get In Touch
        </p>

        <h1 class="text-4xl sm:text-5xl font-bold text-primary-dark mt-3">
          Contact Me
        </h1>

        <p class="mt-5 text-base sm:text-lg text-primary opacity-75 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects,
          and potential collaborations. Feel free to reach out through any
          of the platforms below.
        </p>
      </div>

      <!-- Contact Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <!-- Email -->
        <a
          href="mailto:purbahotles@gmail.com"
          class="contact-card"
        >
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>

          <h2 class="contact-title">Email</h2>
          <p class="contact-description">Get in touch via email</p>
          <span class="contact-value">purbahotles@gmail.com</span>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/hotles-purba/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">
            <i class="fab fa-linkedin-in"></i>
          </div>

          <h2 class="contact-title">LinkedIn</h2>
          <p class="contact-description">Connect professionally</p>
          <span class="contact-value">View LinkedIn Profile</span>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/purbahotles"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">
            <i class="fab fa-github"></i>
          </div>

          <h2 class="contact-title">GitHub</h2>
          <p class="contact-description">Explore my repositories</p>
          <span class="contact-value">View GitHub Profile</span>
        </a>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/6285159447307"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">
            <i class="fab fa-whatsapp"></i>
          </div>

          <h2 class="contact-title">WhatsApp</h2>
          <p class="contact-description">Send me a direct message</p>
          <span class="contact-value">+62 851-5944-7307</span>
        </a>

        <!-- Phone -->
        <a
          href="tel:+6285159447307"
          class="contact-card"
        >
          <div class="contact-icon">
            <i class="fas fa-phone"></i>
          </div>

          <h2 class="contact-title">Phone</h2>
          <p class="contact-description">Call me directly</p>
          <span class="contact-value">+62 851-5944-7307</span>
        </a>

        <!-- CV -->
        <a
          href="https://drive.google.com/file/d/1yjKEuG0T93j9sDaeYXGhDGTvWK5Seo-z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">
            <i class="fas fa-file-pdf"></i>
          </div>

          <h2 class="contact-title">Resume / CV</h2>
          <p class="contact-description">View my latest resume</p>
          <span class="contact-value">
            View CV <i class="fas fa-external-link-alt ml-1"></i>
          </span>
        </a>

      </div>

      <!-- Footer Message -->
      <div class="text-center mt-12">
        <p class="text-sm text-primary opacity-60">
          Thank you for visiting my portfolio. I look forward to hearing from you.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-card {
  @apply flex flex-col items-center text-center p-7 rounded-xl;
  @apply bg-primary-light border border-primary-light shadow-sm;
  @apply transition-all duration-300 ease-in-out;
  @apply hover:shadow-lg hover:-translate-y-1;
}

.contact-icon {
  @apply flex items-center justify-center;
  @apply w-16 h-16 rounded-full mb-5;
  @apply bg-primary-dark text-white;
  @apply text-2xl;
  @apply transition-all duration-300;
}

.contact-card:hover .contact-icon {
  @apply scale-110;
}

.contact-title {
  @apply text-xl font-bold text-primary-dark;
}

.contact-description {
  @apply text-sm text-primary opacity-60 mt-2;
}

.contact-value {
  @apply text-sm font-semibold text-primary-dark mt-4;
  @apply break-all;
}
</style>
