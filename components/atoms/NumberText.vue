<template>
  <article ref="box">
    <div class="flex">
      <div class="flex gap-4">
        <h4 class="text-tertiary text-7xl">{{ number }}.</h4>
        <div class="flex flex-col mt-6">
          <h5 class="font-mont h5">{{ title }}</h5>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import { useScrollFadeIn } from "@/composables/animations/gsap";

const box = ref(null);
useScrollFadeIn(box);

const props = defineProps({
  number: {
    type: Number,
  },
  text: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
