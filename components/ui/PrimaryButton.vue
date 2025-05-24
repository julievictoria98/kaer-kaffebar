<template>
  <div
    class="group border-b pb-0.5 flex gap-2 items-center w-fit"
    :class="color === 'beige' ? 'border-secondary' : 'border-primary'"
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
      :src="
        color === 'beige'
          ? '/images/white-arrow.svg'
          : '/images/brown-arrow.svg'
      "
      alt="brown arrow pointing to the right"
      aria-hidden="true"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Click me",
  },
  href: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
  linkType: {
    type: String,
    default: "internal",
  },
});

console.log(props.color);
</script>
