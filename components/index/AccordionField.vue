<template>
  <div>
    <div
      @click="toggleAccordion"
      :class="accordionClass"
      class="flex items-center justify-between cursor-pointer p-2 border-b border-primary"
    >
      <h3 id="accordion">{{ question }}</h3>
      <img
        :class="isOpen ? 'rotate-[270deg]' : 'rotate-90'"
        src="/images/brown-arrow.svg"
        alt="brown arrow pointing up/down"
      />
    </div>
    <div
      :class="[
        'transition-all duration-300 ease-in-out overflow-hidden',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <p class="p-2 m-0">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  question: String,
  answer: String,
});

const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const accordionClass = computed(() => {
  return isOpen.value ? "accordion-open" : "accordion-closed";
});
</script>
