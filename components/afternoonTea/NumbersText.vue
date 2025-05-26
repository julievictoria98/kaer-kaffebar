<template>
  <article class="content">
    <h3 class="col-span-full">{{ heading }}</h3>
    <AfternoonTeaNumberText
      v-for="(item, index) in content"
      :key="index"
      :number="item.number"
      :title="item.title"
      :text="item.text"
      :class="getGridClasses(index)"
    />
  </article>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Array,
    default: () => [
      {
        number: 1,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        number: 2,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        number: 3,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  heading: {
    type: String,
    default: "Lorem ipsum dolor sit amet",
  },
});
function getGridClasses(index) {
  const patterns = [
    "md:col-span-4 md:col-start-1 md:row-start-2 col-span-full",
    "lg:col-start-7 lg:col-span-4 md:col-span-5 md:col-start-6 row-start-3 col-span-full mt-10",
    "lg:col-start-2 lg:col-span-4 md:col-span-5 md:col-start-2 md:row-start-4 col-span-full mt-10",
    "lg:col-start-6 lg:col-span-4 md:col-span-5 md:col-start-6 md:row-start-8 col-span-full mt-10",
  ];
  return patterns[index % patterns.length];
}
</script>
