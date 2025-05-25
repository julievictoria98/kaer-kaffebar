<template>
  <div
    class="group pb-0.5 flex gap-2 justify-items-center items-center w-fit cursor-pointer"
  >
    <NuxtLink :to="href" class="primary-button">
      {{ text }}
    </NuxtLink>
    <img
      class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      src="../../public/images/white-arrow.svg"
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
});
</script>

<style></style>
