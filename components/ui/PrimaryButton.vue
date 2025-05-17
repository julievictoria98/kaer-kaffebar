<template>
  <div
    class="group border-b border-primary pb-0.5 flex gap-2 items-center w-fit cursor-pointer"
  >
    <div v-if="linkType === 'internal'">
      <NuxtLink :to="href" class="primary-button">
        {{ text }}
      </NuxtLink>
    </div>
    <div v-else-if="linkType === 'external'">
      <a :href="href" class="primary-button" target="_blank">
        {{ text }}
      </a>
    </div>
    <img
      class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      src="../../public/images/brown-arrow.svg"
      alt="brown arrow"
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
  color: {
    type: String,
    default: "beige",
  },
  linkType: {
    type: String,
    default: "internal",
  },
});
</script>

<style></style>
