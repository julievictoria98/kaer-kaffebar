<template>
  <div>
    <div
      @click="toggleAccordion"
      :class="accordionClass"
      class="flex items-center justify-between cursor-pointer p-4 border-b border-primary"
    >
      <h3 id="accordion">{{ question }}</h3>
      <img
        :class="isOpen ? 'rotate-90' : 'rotate-270'"
        src="../../public/images/brown-arrow.svg"
        alt="brown arrow"
      />
    </div>
    <p v-if="isOpen" class="transition-all duration-300 ease-in-out p-4">
      {{ answer }}
    </p>
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
