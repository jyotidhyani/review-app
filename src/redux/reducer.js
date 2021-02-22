import actionTypes from './actionTypes';

const INITIAL_STATE = {
  reviews: [
    {
      id: 1,
      userName: 'KPR',
      title: 'Wipro WiFi Enabled Smart LED Bulb',
      description: 'The bulb is ok. There are no instructions on how to control the bulb using Alexa. The different commands required to increase brightness, decrease brightness are obvious, but things like how to set the colour temperature is a trial and error.',
      buyLink: 'https://www.amazon.in/gp/product/B07PD4DW17/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61-j2h5o8mL.jpg',
      shouldBuy: 1
    },
    {
      id: 2,
      userName: 'Rajas',
      title: 'All-new Echo Dot (4th Gen)',
      description: 'Love the new revamped version of Alexa. All you need to do is configure the devices via Alexa app and your good to go.',
      buyLink: 'https://www.amazon.in/gp/product/B084KSRFXJ/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71cnZADfwaL._SL1600_.jpg',
      shouldBuy: 1
    },
    {
      id: 3,
      userName: 'Suneha',
      title: 'Yogarise Anti Skid and Durable Multicolour Yoga Mat',
      description: `Superb mat ....it's a must buy....good quality and good length`,
      buyLink: 'https://www.amazon.in/gp/product/B08KQDWSPD/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71CSjnz5aBL._SL1600_.jpg',
      shouldBuy: 1
    },
    {
      id: 4,
      userName: 'VINEET',
      title: 'Cello Opalware Dazzle Tropical Lagoon Dinner Set',
      description: `Imagine while having dinner with your guests the plate breaks on its own after food is served on it. That’s exactly what happened in my case. If it cant handle warm food on it how will it survive inside a microwave? Bad purchase. Don’t buy.`,
      buyLink: 'https://www.amazon.in/gp/product/B0835F13HZ/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1',
      shouldBuy: 0
    },
    {
      id: 5,
      userName: 'Sameer khan',
      title: 'NIVEA Shower Gel',
      description: `The Shower Gel is was not like it has to be, i had ordered the same item earlier that time the product was good, but this time i'm unhappy with the product.`,
      buyLink: 'https://www.amazon.in/gp/product/B077GSDMNB/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1',
      shouldBuy: '0'
    },
    {
      id: 6,
      userName: `Aayush Rathore`,
      title: 'Brado Jewellery Gold Plated American Diamond Necklace',
      description: 'Such a wonderful piece of jewel it is ❤️❤️❤️❤️The quality is nice for the money we pay. Looks good and shiney. Comes in a cute packaging, exactly as shown...i loved it',
      buyLink: 'https://www.amazon.in/gp/product/B01H711K2Q/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51KuaX0skCL._SL1600_.jpg',
      shouldBuy: '1'
    }
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;