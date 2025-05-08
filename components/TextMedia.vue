<template>
  <div class="content" :class="layout" ref="box">
    <h2>{{ title }}</h2>

    <div>
      <!--   <div>
      <h2>{{ title }}</h2>
      <p class="mt-1">{{ text }}</p>
      <div class="mt-4 flex gap-8">
        <UiPrimaryButton
          v-for="(button, index) in buttons"
          :key="index"
          :text="button.text"
          :href="button.href"
        />
      </div>
    </div> -->
      <slot />
    </div>
    <!-- <div class="grid grid-cols-5 max-h-[400px] h-full"> -->
    <div class="" :class="imagelayout">
      <div class="">
        <img :src="imageUrl1" alt="brunch" class="w-full h-full object-cover" />
      </div>
      <div class="" v-if="imageUrl2">
        <img :src="imageUrl2" alt="brunch" class="w-full h-full object-cover" />
      </div>
      <div class="" v-if="imageUrl3">
        <img :src="imageUrl3" alt="brunch" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScrollFadeIn } from "@/composables/animations/gsap";

const box = ref(null);
useScrollFadeIn(box);

const props = defineProps({
  title: String,
  text: String,
  layout: {
    type: String,
    default: "tm-layout-1",
  },
  imagelayout: {
    type: String,
    default: "image-layout-1",
  },
  imageUrl1: {
    type: String,
    default: "/images/brunch-plate.png",
  },
  imageUrl2: {
    type: String,
    default: "",
  },
  imageUrl3: {
    type: String,
    default: "",
  },
  buttons: {
    type: Array,
    default: () => [
      {
        text: "LÆS MERE OM DETTE",
        href: "/contact",
      },
    ],
  },
});
</script>
