<template>
  <article>
    <SubPageHero
      title="Afternoon Tea"
      text="En sanselig og afslappende oplevelse i elegante omgivelser -  perfekt til en hyggelig eftermiddag med ro, nærvær og forkælelse."
      :buttons="[
        {
          text: 'SE ALLE EVENTS',
          href: 'https://www.facebook.com/kaerkaffebar/',
          linkType: 'external',
        },
      ]"
    />
    <TextMedia
      title="Engelsk charme serveret"
      layout="tm-layout-2"
      imageUrl1="/images/afternoon-tea-bird-perspective.jpg"
      imageUrl3="/images/macarons.jpg"
      imageUrl2="/images/afternoon-tea-normal.jpg"
      imagelayout="image-layout-3"
      afterElement="orange2"
    >
      <Text
        text="Træd ind i en verden af ro og charme, hvor du kan nyde en klassisk teoplevelse med et moderne twist. Vores Afternoon Tea i Valby kombinerer britisk elegance med dansk hygge, serveret i stemningsfulde omgivelser, hvor detaljerne gør hele forskellen. Det handler ikke bare om te - det handler om at tage sig tid. Tid til at mærke, smage og nyde. Vi glæder os til at byde dig velkommen til en oplevelse, du sent vil glemme. <br><br>OBS: Skal forudbestilles ved at booke bord, og tilføje 'Afternoon Tea i kommentarfeltet. Tilbud: 225,- pr kuver</br>"
        :buttons="[
          {
            text: 'BOOK NU',
            href: 'https://kaer-kaffebar-1728904093.resos.com/booking',
            linkType: 'external',
          },
        ]"
      />
    </TextMedia>
    <AfternoonTeaNumbersText
      :content="NumbersContent"
      heading="Hvad vi tilbyder"
    />
  </article>
</template>

<script setup>
const NumbersContent = [
  {
    number: "1",
    title: "Hjemmebagte scones",
    text: "Serveres med hjemmelavet marmelade og flødeskum",
  },
  {
    number: "2",
    title: "Fine kager & chokoladetrøfler",
    text: "Fra klassiske macarons til lække banankage bagt med kærligheds",
  },
  {
    number: "3",
    title: "Økologisk engelsk te ad libitum",
    text: "Fra beroligende urtete til kraftige sorte teer",
  },
  {
    number: "4",
    title: "Finger sandwiches",
    text: "Tre forskellige slags",
  },
];

useHead({
  title: "Afternoon Tea | Kær Kaffebar",
  meta: [
    {
      name: "description",
      content:
        "Enjoy a cozy afternoon tea experience with homemade treats at Kær Kaffebar",
    },
  ],
});
</script>
