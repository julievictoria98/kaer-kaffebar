<template>
  <div>
    <IndexHero />
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
      <Text
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
      <Text
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
    <TextMediaSmall
      title="I humør til noget englesk?"
      image="/images/run-club.jpg"
      layout="layout-1"
      :isImageHidden="true"
    >
      <Text
        text="Træd ind i stemningen med en klassisk English Tea - varm, afslappende og perfekt til en hyggelig stund."
        :buttons="[
          {
            text: 'LÆS MERE HER',
            href: '/afternoon-tea',
            linkType: 'internal',
          },
        ]"
      />
    </TextMediaSmall>
    <TextMediaSmall
      title="Se hvad der er på menuen
"
      image="/images/knitting-and-coffee.jpg "
      layout="layout-2"
      :isImageHidden="true"
    >
      <Text
        text="Start dagen med øko barista-kaffe og lækker morgenmad
      - måske vores populære Kær Brunch Tallerken? Til frokost har vi
      smørrebrød, salater og sandwich. Og ja, alt bagværk er friskbagt - fra
      surdejsboller til chokoladecookies. "
        :buttons="[
          {
            text: 'SE HELE MENUEN',
            href: '/menu',
            linkType: 'internal',
          },
        ]"
      />
    </TextMediaSmall>
    <TextMedia
      title="Spørgsmål og svar"
      layout="tm-layout-1"
      imageUrl1="/images/chess-and-coffee.jpg"
      imageUrl2="/images/cafe-atmosphere.jpg"
      imageUrl3="/images/ekstrakøb.png"
      imagelayout="image-layout-3"
      afterElement="red2"
    >
      <IndexAccordion />
    </TextMedia>
    <IndexScrollingImagesAndText
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
