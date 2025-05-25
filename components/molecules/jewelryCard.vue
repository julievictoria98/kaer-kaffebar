<template>
  <div
    class="flex flex-col gap-4 border-quaternary border-2 font-mont card p-5 rounded-lg"
  >
    <div class="w-full h-[350px]">
      <img
        :src="imageUrl"
        alt="earring"
        class="w-full h-full object-cover object-center"
        id="earring"
      />
    </div>
    <div class="p-4 flex justify-between items-center">
      <h3 class="h6 font-mont">
        {{ title }}
      </h3>
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
