<template>
  <div>
    <Hero />
    <TextMedia
      title="Kaffe med omtanke"
      layout="tm-layout-1"
      imagelayout="image-layout-1"
      imageUrl1="/images/coffee-with-brandname.jpg"
      imageUrl2="/images/coffee-and-flower.png"
      afterElement="red1"
    >
      <MoleculesText
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        :buttons="[
          {
            text: 'LÆS OM AKTIVITETERNE',
            href: '/contact',
            linkType: 'internal',
          },
          { text: 'SE SMYKKER', href: '/learn-more', linkType: 'internal' },
        ]"
      />
    </TextMedia>
    <TextMedia
      title="Engelsk teter"
      layout="tm-layout-2"
      imageUrl1="/images/afternoon-tea-bird-perspective.jpg"
      imageUrl3="/images/macarons.jpg"
      imageUrl2="/images/afternoon-tea-normal.jpg"
      imagelayout="image-layout-3"
      afterElement="orange2"
    >
      <moleculesText
        text="Træd ind i en verden af ro og charme, hvor du kan nyde en klassisk teoplevelse med et moderne twist. Vores Afternoon Tea i Valby kombinerer britisk elegance med dansk hygge, serveret i stemningsfulde omgivelser, hvor detaljerne gør hele forskellen. Det handler ikke bare om te - det handler om at tage sig tid. Tid til at mærke, smage og nyde. Vi glæder os til at byde dig velkommen til en oplevelse, du sent vil glemme."
        :buttons="[
          {
            text: 'SE SMYKKER',
            href: 'https://kaer-kaffebar-1728904093.resos.com/booking',
            linkType: 'external',
          },
          {
            text: 'SE AKTIVITETER',
            href: 'https://kaer-kaffebar-1728904093.resos.com/booking',
            linkType: 'external',
          },
        ]"
      />
    </TextMedia>
    <TextMedia
      title="Kaffe med omtanke"
      layout="tm-layout-2"
      imageUrl2="/images/brunch-plate.png"
      imageUrl="/images/brunch-plate.png"
      afterElement="red1"
    >
      <MoleculesText
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        :buttons="[
          {
            text: 'LÆS OM AKTIVITETERNE',
            href: '/aktiviteter',
            linkType: 'internal',
          },
          { text: 'SE SMYKKER', href: '/smykker', linkType: 'internal' },
        ]"
      />
    </TextMedia>
    <TextMedia
      title="Et mødested for alle"
      layout="tm-layout-1"
      imageUrl1="/images/event.jpg"
      imageUrl2="/images/baked-goods.png"
      imageUrl3="/images/event.jpg"
      imagelayout="image-layout-3"
      afterElement="orange2"
    >
      <moleculesAccordion />
    </TextMedia>
    <ScrollingImagesAndText
      firstText="Hold dig opdatert med vores nyheder"
      seconText="Følg os på"
      link="https://example.com"
    />
  </div>
</template>
