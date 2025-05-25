<template>
  <div>
    <Hero />
    <TextMedia
      title="Økologisk Kaffe"
      layout="tm-layout-1"
      imagelayout="image-layout-1"
      imageUrl1="/images/coffee-with-brandname.jpg"
      imageUrl2="/images/coffee-and-flower.png"
      afterElement="red1"
      altText1="Kaffe med brandnavn"
      altText2="Kaffe med blomst"
    >
      <MoleculesText
        text="Vores kaffe på kær kaffebar i Valby, er brygget med økologiske bønner fra Just Coffee. Just Coffee’s risteri ligger i Roskilde og handler bæredygtigt med bønderne om bønnerne fra Sydamerika. Alle vores kaffedrikke er brygget på deres Sol&Måne Espresso kaffe, som er en mørkristet arabica af hele bønner fra Colombia, Nicaragua, Honduras og Etiopien. Vælg roligt Kær Kaffebar for lækker økologisk kaffe i Valby. <br /><br/> For at sikre den høje kvalitet, den gode smag og bæredygtighed - er mælken også nøje udvalgt. Vi har valgt at arbejde med den Økologiske Thise Mælk, som giver kaffen en skøn skum og rundhed. Så når du skal bruge kaffe i Valby, er du her garanteret de bedste råvarer"
        :buttons="[
          {
            text: 'LÆS OM JUST COFFES PRINCIPPER',
            href: 'https://www.justcoffee.dk/',
            linkType: 'external',
          },
        ]"
      />
    </TextMedia>
    <TextMedia
      title="Mere end en kaffebar"
      layout="tm-layout-2"
      imageUrl1="/images/jewlery.jpg"
      altText1="earring"
      imageUrl2="/images/run-club.jpg"
      altText2="two people with running shirts on that has the company name on the back"
      imageUrl3="/images/knitting-and-coffee.jpg"
      altText3="two people sitting at a table knitting with coffee cups beside them"
      imagelayout="image-layout-3"
      afterElement="orange2"
    >
      <moleculesText
        text="Hos Kær Kaffebar handler det ikke kun om kaffe - det handler om at skabe et varmt og indbydende fællesskab for alle i lokalsamfundet. Her mødes vi til hyggelige aktiviteter som løbeklub og strikkeklub, hvor både nye og gamle ansigter kan finde fællesskab og gode samtaler. Det er et sted, hvor alle kan føle sig velkomne og finde et frirum i en travl hverdag.<br/><br/>Ud over hyggelige samlinger har vi også et udvalg af smukke, håndlavede smykker, Kær Unika. Du kan se udvalget af smykker på hjemmesiden her eller du kan svinge forbi cafeen og se for dig selv. Smykkerne er skabt med omtanke og giver dig mulighed for at tage en lille del af Kær Kaffebar med hjem."
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
    <!--     <TextMedia
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
    </TextMedia> -->
    <TextMedia
      title="Spørgsmål og svar"
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
      altText1="Matcha"
      altText2="Pie"
      altText3="Pies"
      altText4="Pink Milkshake"
    />
  </div>
</template>
