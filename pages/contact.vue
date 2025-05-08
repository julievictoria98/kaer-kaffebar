<template>
  <article>
    <SubPageHero
      :text="text"
      :buttons="buttons"
      :image="imageSrc"
      title="Kontakt"
      imageSrc="/illustrations/afternoon-tea-illu.svg"
    />
  </article>
</template>

<script setup>
const text = `Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed. Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed.`;
const buttons = [
  { text: "LÆS OM AKTIVITETERNE", href: "/contact" },
  { text: "SE SMYKKER", href: "/learn-more" },
];
const imageSrc = "/images/brunch-plate.png";
</script>
