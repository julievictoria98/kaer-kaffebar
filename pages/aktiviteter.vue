<template>
  <SubPageHero
    title="Aktiviteter"
    text="Vi tilbyder en række forskellige aktiviteter, der kan tilpasses dine behov og ønsker. Uanset om du er på udkig efter en sjov dag med vennerne eller en romantisk aften med din partner, har vi noget for dig."
    :buttons="[
      {
        text: 'SE ALLE EVENTS',
        href: 'https://www.facebook.com/kaerkaffebar/',
        linkType: 'external',
      },
    ]"
    imageSrc="/illustrations/activities-illu.svg"
  />
  <TextMediaSmall
    title="Løbeklub"
    image="/images/run-club.jpg"
    layout="layout-1"
  >
    <Text
      text="Kær Klubben's løbeklub i Valby har fokus på det sociale og på at samle lokalsamfundet, samtidig med at vi bevæger os. Ruten i søndermarken er 2,5 km, så alle kan være med. Er man hurtig, kan man nå den 2 gange!"
      :buttons="[
        {
          text: 'TILMED DIG HER',
          href: '/aktiviteter',
          linkType: 'internal',
        },
      ]"
    />
  </TextMediaSmall>
  <TextMediaSmall
    title="Strikkeklub"
    image="/images/knitting-and-coffee.jpg "
    layout="layout-2"
  >
    <Text
      text="Hækleklubben er endelig kommet over stepperne og pigerne gir den gas med garnet  find dem her onsdage fra kl 15.00"
    />
  </TextMediaSmall>
</template>
