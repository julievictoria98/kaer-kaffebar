<template>
  <div class="content text-media-small" :class="layout" ref="box">
    <div>
      <h2 class="h3">{{ title }}</h2>
      <slot />
    </div>
    <div
      class="orange1 h-auto max-h-56 max-w-56"
      :class="{ hidden: isImageHidden }"
    >
      <img :src="image" alt="brunch" class="object-cover" />
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
  },
  image: {
    type: String,
    default: "",
  },
  isImageHidden: {
    type: Boolean,
    default: false,
  },
});
</script>
