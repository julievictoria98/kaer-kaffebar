<template>
  <article>
    <SubPageHero
      :text="text"
      :buttons="buttons"
      :image="imageSrc"
      title="Kær Unika"
      imageSrc="/illustrations/jewlery-illu.svg"
    />
    <JeweleryJewlery />
  </article>
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

const text =
  "Hos Kær Unika er materialerne nøje udvalgt med fokus på udseende, holdbarhed og allergivenlighed. Smykkerne er lavet af 925 sterling sølv og 18k forgyldt stål, mens naturlige materialer som ferskvandsperler, krystaller, ædelsten, ben og træ sikrer unikke designs.";

const imageSrc = "/images/brunch-plate.png";

useHead({
  title: "Smykker | Kær Kaffebar",
  meta: [
    {
      name: "description",
      content:
        "Check out our unique jewelry collection, handcrafted with care and attention to detail.",
    },
  ],
});
</script>
