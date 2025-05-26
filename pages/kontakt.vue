<template>
  <article>
    <SubPageHero
      title="Kontakt"
      text="Vi tilbyder en række forskellige aktiviteter, der kan tilpasses dine behov og ønsker. Uanset om du er på udkig efter en sjov dag med vennerne eller en romantisk aften med din partner, har vi noget for dig."
      :color="beige"
      :buttons="[
        {
          text: 'BOOK BORD',
          href: 'https://kaerkaffebar.superbexperience.com/',
          linkType: 'external',
        },
      ]"
      imageSrc="/illustrations/contact-illu.svg"
    />
  </article>
  <article>
    <TextMedia
      title="Arrangement hos os"
      layout="tm-layout-1"
      imageUrl1="/images/event.jpg"
      imageUrl2="/images/birthdaycake.jpg"
      imageUrl3="/images/baked-goods.png"
      imagelayout="image-layout-3"
      afterElement="orange2"
    >
      <Text
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
    <ContactForm />
  </article>
</template>

<script setup></script>
