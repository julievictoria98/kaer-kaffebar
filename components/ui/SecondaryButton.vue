<template>
  <div
    class="group pb-0.5 flex gap-2 justify-items-center items-center w-fit cursor-pointer"
  >
    <div v-if="linkType === 'internal'">
      <NuxtLink :to="href" class="primary-button" tabindex="0">
        {{ text }}
      </NuxtLink>
    </div>
    <div v-else-if="linkType === 'external'">
      <a
        :href="href"
        class="primary-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="External link: {{ text }}"
      >
        {{ text }}
      </a>
    </div>
    <img
      class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      src="/images/white-arrow.svg"
      alt="white arrow pointing to the right"
      aria-hidden="true"
    />
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Click me",
  },
  href: {
    type: String,
    required: true,
  },
  linkType: {
    type: String,
    default: "internal",
  },
});
</script>
