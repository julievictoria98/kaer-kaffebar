<template>
  <SubPageHero
    :text="text"
    :buttons="buttons"
    :image="imageSrc"
    title="Kær Unika"
    imageSrc="/illustrations/jewlery-illu.svg"
  />
  <div class="p-10 md:p-20">
    <h2 class="h4">Unika smykker der kan ses i caféen</h2>
    <Jewlery />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);

onMounted(async () => {
  const res = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/juliediverse98.wordpress.com/posts?_embed"
  );
  posts.value = await res.json();
});

const text = `Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed. Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed.`;

const imageSrc = "/images/brunch-plate.png";
</script>
