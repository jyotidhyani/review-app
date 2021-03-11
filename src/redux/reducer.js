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
      shouldBuy: true
    },
    {
      id: 2,
      userName: 'Rajas',
      title: 'All-new Echo Dot (4th Gen)',
      description: 'Love the new revamped version of Alexa. All you need to do is configure the devices via Alexa app and your good to go.',
      buyLink: 'https://www.amazon.in/gp/product/B084KSRFXJ/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71cnZADfwaL._SL1600_.jpg',
      shouldBuy: true
    },
    {
      id: 3,
      userName: 'Suneha',
      title: 'Yogarise Anti Skid and Durable Multicolour Yoga Mat',
      description: `Superb mat ....it's a must buy....good quality and good length`,
      buyLink: 'https://www.amazon.in/gp/product/B08KQDWSPD/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71CSjnz5aBL._SL1600_.jpg',
      shouldBuy: true
    },
    {
      id: 4,
      userName: 'VINEET',
      title: 'Cello Opalware Dazzle Tropical Lagoon Dinner Set',
      description: `Imagine while having dinner with your guests the plate breaks on its own after food is served on it. That’s exactly what happened in my case. If it cant handle warm food on it how will it survive inside a microwave? Bad purchase. Don’t buy.`,
      buyLink: 'https://www.amazon.in/gp/product/B0835F13HZ/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1',
      shouldBuy: false
    },
    {
      id: 5,
      userName: 'Sameer khan',
      title: 'NIVEA Shower Gel',
      description: `The Shower Gel is was not like it has to be, i had ordered the same item earlier that time the product was good, but this time i'm unhappy with the product.`,
      buyLink: 'https://www.amazon.in/gp/product/B077GSDMNB/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1',
      shouldBuy: false
    },
    {
      id: 6,
      userName: `Aayush Rathore`,
      title: 'Brado Jewellery Gold Plated American Diamond Necklace',
      description: 'Such a wonderful piece of jewel it is ❤️❤️❤️❤️The quality is nice for the money we pay. Looks good and shiney. Comes in a cute packaging, exactly as shown...i loved it',
      buyLink: 'https://www.amazon.in/gp/product/B01H711K2Q/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51KuaX0skCL._SL1600_.jpg',
      shouldBuy: true
    },
    {
      id: 7,
      userName: `Dhiren Pandya`,
      title: `DesiDiya® 3D 7 Color Changing Moon Night Lamp with Stand for Bedroom Lights for Adults and Kids Home Room Beautiful Indoor Lighting - 14CM`,
      description: `We spend almost every evening in balcony and we required one defuse warm yellow light which can brings mood and positivity. Now this is the item we ordered and to be honest while ordering we ware not sure how and what we gonna receive !!!
      But as packing received , packed in a perfact way ... It was easy to unfold stars if u go through the written instructions.. i fixed it with a white cable tie as shown in picture.and put alexa on task with bollywood 80's retro song..
      Guyz we are spending worth time with all those 11 stars .
      Product material is awsome !!!
      Wire and electronic chipset box is sturdy !!!
      All type of blinking and stable operations are awsome !!!!!
      Full leangth is around 110 inch approx ! As claimed .
      Superb !`,
      buyLink: 'https://www.amazon.in/gp/product/B08L1G7BQF/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Xxh6eQuvL._SX679_.jpg',
      shouldBuy: true
    },
    {
      id: 8,
      userName: `Ram Dwivedi`,
      title: 'How to Prepare for Logical Reasoning for CAT',
      description: 'Wide area of questions on reasoning.Good for a lot of practice.',
      buyLink: 'https://www.amazon.in/gp/product/9353167132/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41GD2RSKanL._SX381_BO1,204,203,200_.jpg',
      shouldBuy: true
    },
    {
      id: 9,
      userName: `Rajesh Mridha`,
      title: 'Logitech M90 Wired USB Mouse, 1000 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Black',
      description: `Well, I didn't expected it will perform that much 😼 Here is my experienced after using it for 3 years :
      ✔PROS:
      ☑ Extermly durable.
      ☑ No effect of water. Yes I tested it by cleaning it with water several times , hoping it will damage. But no effect !
      ☑ Passed drop test ( it fell from my computer desk several times) !
      ☑ Smooth & good for games ( not all )
      ☑ Good grip
      ☑ Cheap
      ❌CONS:
      ✖ Not so creative looking.
      ✖Not for the games in which you will click like a beast again & again.
      ✖ It is like old Nokia phones that you will feel boring using this years after years but still it will survive ! 😹
      🌟 Thank you for reading this. Hope it helped you. You are beautiful, you are worthy & you are loved, always ! 😺`,
      buyLink: 'https://www.amazon.in/gp/product/B003D8ZT0C/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61-xW5xl6-L._SX569_.jpg',
      shouldBuy: true
    },
    {
      id: 10,
      userName: `Debashish N.`,
      title: 'Portronics CLAMP X POR-926 Car-Vent Mobile Holder (Black)',
      description: `After researching on various types of mobile holders, decided to go for Portronics CLAMP-X AC vent mobile holder due to the below reasons-

      1. Can be clamped / unclamped onto any vent as and when required.
      2. Very sturdy and tight fitting which holds mobile even in the worst jerks / bumps.
      3. Size is perfect. Neither too big, nor too small.
      4. Better than the traditional sticky/suction fitting like many dashboard/glass mobile holders which tend to become loose after a certain period of time, or can get even get opened from heavy jerks.
      5. Chose not to go for magnetic holders as the magnet power might reduce over time.
      
      Very happy with the product and would definitely recommend to everyone. Hope the images I attached will be helpful for you.`,
      buyLink: 'https://www.amazon.in/gp/product/B07GNC2592/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OJBA5fSEL._SX569_.jpg',
      shouldBuy: true
    }
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      }
    default:
      return state;
  }
}

export default reducer;