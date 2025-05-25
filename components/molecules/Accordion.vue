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
    question: "Kan man booke bord?",
    answer: "Ja, blot tryk her",
  },
  {
    question: "Er kærkaffebar børnevenlig?",
    answer:
      "Ja selvfølgelig,Der er højstole til rådighed for de helt små og så er der også farveblyanter og spil for hele familien.",
  },
  {
    question: "Er kærkaffebar handicapvenlig?",
    answer:
      "Vi er ihvertfald så heldige at der ikke er noget trappetrin op til hovedindgangen, så det er nemt at komme til. Og så er vores personale altid klar på at hjælpe, hvor vi kan.",
  },
  {
    question: "Kan jeg sidde med min bærbare computer?",
    answer:
      "Ja. Brug højbordet. Vi håber på, at vores gæster der sidder og arbejder med bærbar, er opmærksomme på ikke at optage for meget plads, hvis man kan se at der begynder at mangle pladser. Så må man f.eks. meget gerne sætte sig flere sammen på ét bord, så man ikke optager mere plads end nødvendigt.",
  },
  {
    question: "Har i wifi?",
    answer: "Jep!",
  },
  {
    question: "Har i koffeinfri kaffe?",
    answer: "Jep!",
  },
  {
    question: "Har i veganske mad og kaffe?",
    answer:
      "Jep! Der er havremælk til kaffen og så har vi flere veganske muligheder på menuen. Matcha Chia Grød, Bolle med smør, Avokado på Surdejsbrød og vores Falafel Sala",
  },
  {
    question: "Telefonnummer?",
    answer: "51984435",
  },
];
</script>
