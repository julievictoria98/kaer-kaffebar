<template>
  <article class="flex flex-col gap-4">
    <div v-for="(item, index) in accordionItems">
      <atomsAccordionField
        :key="index"
        :question="item.question"
        :answer="item.answer"
        :isOpen="item.isOpen"
      />
    </div>
  </article>
</template>

<script setup>
const accordionItems = [
  {
    question: "What is the purpose of this project?",
    answer:
      "The purpose of this project is to provide a comprehensive guide to building a web application using Nuxt.js and Tailwind CSS.",
  },
  {
    question: "How do I install the dependencies?",
    answer:
      "You can install the dependencies by running npm install in the root directory of the project.",
  },
  {
    question: "How do I run the development server?",
    answer:
      "You can run the development server by running npm run dev in the root directory of the project.",
  },
  {
    question: "How do I run the development server?",
    answer:
      "You can run the development server by running npm run dev in the root directory of the project.",
  },
  {
    question: "How do I run the development server?",
    answer:
      "You can run the development server by running npm run dev in the root directory of the project.",
  },
  {
    question: "How do I run the development server?",
    answer:
      "You can run the development server by running npm run dev in the root directory of the project.",
  },
];
</script>
