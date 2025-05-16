<template>
  <div class="flex flex-col gap-4 sm:flex-row">
    <div>
      <h3>
        {{ title }}
      </h3>
      <div v-html="text"></div>
      <p>{{ price }}</p>
    </div>
    <img
      src="/public/images/jewlery.jpg"
      alt="earring"
      class="max-h-50 w-max-v-50"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  text: String,
  price: String,
  imageUrl: {
    type: String,
    default: "/images/brunch-plate.png",
  },
  altText: {
    type: String,
    default: "Brunch plate",
  },
  layout: {
    type: String,
    default: "tm-layout-1",
  },
  imagelayout: {
    type: String,
    default: "image-layout-1",
  },
});
</script>
