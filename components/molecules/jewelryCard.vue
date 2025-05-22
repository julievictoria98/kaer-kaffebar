<template>
  <div
    class="flex flex-col gap-4 rounded-[20px] border-primary border-2 font-mont card"
  >
    <div class="w-full h-[350px]">
      <img
        :src="imageUrl"
        alt="earring"
        class="w-full h-full object-cover object-center rounded-t-[20px]"
        id="jewelry-image"
      />
    </div>
    <div class="p-4 flex justify-between items-center">
      <h3 class="h6 font-mont">
        {{ title }}
      </h3>
      <div v-html="text"></div>
      <p>{{ price }}</p>
    </div>
    <p>{{ text }}</p>
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
});
</script>

<style>
.card {
  height: 450px;
  width: 300px;
}
</style>
