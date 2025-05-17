<template>
  <article>
    <SubPageHero
      :text="text"
      :buttons="buttons"
      :image="imageSrc"
      title="Kontakt"
      imageSrc="/illustrations/contact-illu.svg"
    />
  </article>
  <article>
    <TextMedia
      title="Arrangement hos os"
      layout="tm-layout-1"
      imageUrl1="/images/event.jpg"
      imageUrl2="/images/baked-goods.png"
      imageUrl3="/images/event.jpg"
      imagelayout="image-layout-3"
      afterElement="orange2"
    >
      <MoleculesText
        text="Skal du planlægge en fødselsdag, et
      firmaevent, en produktlancering eller et PR-arrangement? Hos Kær Kaffebar
      i Valby tilbyder vi den perfekte ramme til både private og professionelle
      begivenheder. Vores hyggelige café med smuk indretning og solrige
      udendørspladser skaber en varm og imødekommende atmosfære, hvor dine
      gæster kan føle sig godt tilpas.<br /><br />Vi tilbyder mulighed for at
      reservere hele caféen, og vores engagerede personale sørger for, at alt
      forløber glat - uanset om du ønsker en uformel sammenkomst eller et
      skræddersyet PR-event. Der er desuden mulighed for specialmenuer, der
      afspejler dit brands identitet og behov.<br /><br />Lad os også stå for
      forplejningen: Vi tilbyder både catering og kager på bestilling, så du kan
      fokusere på dine gæster og nyde arrangementet.<br /><br />Kontakt os i dag
      for at høre mere om muligheder, priser og ledige datoer - og lad os sammen
      skabe en oplevelse, dine gæster vil huske.<br /><br />Skriv en sms til 81610900
      for mere information."
      />
    </TextMedia>
  </article>
  <article>
    <Form />
  </article>
</template>

<script setup>
const text = `Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed. Håndlavede smykker, hvor matrialerne er udlavgt med fokus på look, holdbarhed og allergivenlighed.`;
const buttons = [
  {
    text: "BOOK BORD",
    href: "https://kaerkaffebar.superbexperience.com/",
    linkType: "external",
  },
  { text: "HOLD ARRANGEMENT", href: "/learn-more" },
];
const imageSrc = "/images/brunch-plate.png";
</script>
