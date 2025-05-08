<template>
  <div>
    <Hero />
    <TextMedia
      title="Kaffe med omtanke"
      layout="tm-layout-1"
      imagelayout="image-layout-1"
      imageUrl1="/images/brunch-plate.png"
      imageUrl2="/images/brunch-plate.png"
    >
      <MoleculesText
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        :buttons="[
          { text: 'LÆS OM AKTIVITETERNE', href: '/contact' },
          { text: 'SE SMYKKER', href: '/learn-more' },
        ]"
      />
    </TextMedia>
    <TextMedia
      title="Kaffe med omtanke"
      layout="tm-layout-2"
      imageUrl2="/images/brunch-plate.png"
      imageUrl="/images/brunch-plate.png"
    >
      <MoleculesText
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        :buttons="[
          { text: 'LÆS OM AKTIVITETERNE', href: '/contact' },
          { text: 'SE SMYKKER', href: '/learn-more' },
        ]"
      />
    </TextMedia>
    <TextMedia
      title="Et mødested for alle"
      layout="tm-layout-3"
      imagelayout="image-layout-2"
      imageUrl1="/images/brunch-plate.png"
      imageUrl2="/images/cake-bun.jpg"
      imageUrl3="/images/brunch-plate.png"
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
