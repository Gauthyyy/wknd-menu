import { MenuData } from '../types/menu';

export const MENU_DATA: MenuData = {
  categories: [
    {
      id: "rolls",
      name: "Rolls",
      items: [
        {
          id: "r1",
          name: "Chilly Chicken Rumali",
          price: 80,
          type: "non-veg",
          description: "Spicy Indo-Chinese chilly chicken tossed with peppers wrapped in soft rumali roti.",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "r2",
          name: "Zinger Chicken Roll",
          price: 110,
          type: "non-veg",
          isSignature: true,
          description: "Ultra crispy fried chicken zinger strips, layered with special spicy garlic mayo.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8OzvKobLXbBgadjBvSdFUg7V5CW71MbS_7ICwh6-QC8RgLSBY-Zd8HpB9L4JdC3AfEzs8Zwka0LqEnVPi_C3MFrLqYQtN1GLpzZQcsH2WhFE17vyFNVudJ-ro5iHT3t9iOfLrPXz3qLp-ipgm4ViXGogzsqUZeXjbvm3SraWTKfP4Sbh-Kun1iz0zDMD--yn8PSaxol-XPmXTVrxO3Vb_Tf_TlaqaeT-Bi2YigdF88d_QhjAcXilZZA"
        },
        {
          id: "r3",
          name: "Pepper Chicken Roll",
          price: 80,
          type: "non-veg",
          description: "Succulent black pepper roast chicken wrapped with fresh chopped onions.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJqTanI93oWC_JrjGoF-iGp04CG1hGMt_tABBoFWMpjYa1ySvW78d2qC-d2goAlLpOkw2B1a9U4hicoTOMol3gKg6fVF1STV_Ww71dImYUo4St2DCWUgIhFUcaFucUzBwF0Pcpm-qwxp4Rn47oqgYu2m3w-ttBJcK4lHoRrndTES_brInZht5Zybb5parMBeUGg9GOzI8pWqgKGpxvkBH33luPsRW9LcYBjQGZk6M5sG8xemPZxuTGw"
        },
        {
          id: "r4",
          name: "Veg Roll",
          price: 70,
          type: "veg",
          description: "Garden fresh crispy veg patty rolled with tangy mint mint chutney and onion rings.",
          image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "r5",
          name: "Falafel Roll",
          price: 70,
          type: "veg",
          description: "Crispy chickpea falafel balls with garlic tahini glaze and pickled veggies.",
          image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "r6",
          name: "Jumbo Roll",
          price: 150,
          type: "non-veg",
          isSignature: true,
          description: "Double loaded grilled chicken, fried egg, cheese slice & signature house sauces.",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "sandwiches",
      name: "Sandwich",
      items: [
        {
          id: "s1",
          name: "Chicken Sandwich",
          price: 90,
          type: "non-veg",
          description: "Shredded spiced chicken with creamy mayo toasted between soft white bread.",
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "s2",
          name: "Veg Sandwich",
          price: 70,
          type: "veg",
          description: "Fresh cucumbers, tomatoes, cheese slice and mint butter spread.",
          image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "s3",
          name: "Egg Sandwich",
          price: 70,
          type: "egg",
          description: "Double fluffy egg omelette toasted sandwich with crushed pepper.",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "s4",
          name: "Chicken Club",
          price: 130,
          type: "non-veg",
          isSignature: true,
          description: "Triple decker sandwich with chicken breast, fried egg, lettuce, and melted cheese.",
          image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "s5",
          name: "Zinger Chicken Sandwich",
          price: 150,
          type: "non-veg",
          isSignature: true,
          description: "Giant spicy crispy chicken breast fillet with melted cheddar & thousand island dressing.",
          image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "burgers-loaded",
      name: "Burgers & Loaded",
      items: [
        {
          id: "b1",
          name: "Chicken Burger",
          price: 100,
          type: "non-veg",
          description: "Juicy fried chicken patty with iceberg lettuce and secret WKND sauce.",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "b2",
          name: "Veg Burger",
          price: 80,
          type: "veg",
          description: "Crispy potato corn herb patty topped with liquid cheese sauce.",
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "b3",
          name: "Zinger Burger",
          price: 180,
          type: "non-veg",
          isSignature: true,
          description: "Massive extra crispy chicken zinger stacker with jalapeños and spicy mayo.",
          image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "b4",
          name: "Cheese Burger",
          price: 160,
          type: "veg",
          description: "Double paneer/cheese patty dripping with rich cheddar melt.",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "b5",
          name: "Double Patty Burger",
          price: 150,
          type: "non-veg",
          isSignature: true,
          description: "Two stacked chicken patties layered with caramelized onions & cheese.",
          image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "f1",
          name: "Normal Fries",
          price: 70,
          type: "veg",
          description: "Classic golden salted French fries served piping hot.",
          image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "f2",
          name: "Peri Peri Fries",
          price: 100,
          type: "veg",
          description: "Golden fries tossed generously in flaming spicy peri peri seasoning.",
          image: "https://images.unsplash.com/photo-1630384060421-cb3f1e575778?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "f3",
          name: "Cheese Fries",
          price: 120,
          type: "veg",
          description: "Crispy fries drenched in warm liquid cheddar cheese sauce.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATSQhKyRf0rw2TR42jwk6uuzho5QTquebn617cmbjdm6IYGK0vUvlECoweGB8Oh8U41_w79SDY2ycRCkChSFyCwqVfp_i2bTtJcysa9djPjcuCBssxacq-T5jt9-x0VZIJqozjMIBDaDCw8bjrNvH8D6g6sF33lYmL7VDAn67g5T7s3ApX-NonBMQhBOaVVl4fbt4Q64Qb89drAaaMQVT8qGV8V5Q4sGQJRCWOGPKe3UE8oqNyUsJqoQ"
        },
        {
          id: "f4",
          name: "Loaded Fries",
          price: 180,
          type: "non-veg",
          isSignature: true,
          description: "Bed of Peri Peri fries topped with shredded spicy chicken, jalapeños & house sauce.",
          image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "f5",
          name: "Cheese Loaded Fries",
          price: 200,
          type: "non-veg",
          isSignature: true,
          description: "Ultimate party snack: Loaded chicken fries topped with double molten cheese blend.",
          image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "kulukki",
      name: "Kulukki",
      subgroups: [
        {
          title: "Spicy Kulukki",
          items: [
            {
              id: "k1",
              name: "Pachamanga Kulukki",
              price: 60,
              type: "veg",
              isSignature: true,
              description: "Raw green mango crushed with basil seeds, green chillies & lemon juice.",
              image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k2",
              name: "Passion Fruit Kulukki",
              price: 60,
              type: "veg",
              description: "Tangy exotic passion fruit shaken with ice, green chilli, and basil seeds.",
              image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k3",
              name: "Orange Kulukki",
              price: 60,
              type: "veg",
              description: "Fresh orange juice shaken with a spicy chilli kick and sabja seeds.",
              image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k4",
              name: "Pineapple Kulukki",
              price: 60,
              type: "veg",
              description: "Sweet pineapple pulp shaken with ice, mint and green chilli slit.",
              image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k5",
              name: "Grape Kulukki",
              price: 60,
              type: "veg",
              description: "Crushed black grape delight served frosty with signature kulukki spice blend.",
              image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80"
            }
          ]
        },
        {
          title: "Sweet Kulukki",
          items: [
            {
              id: "k6",
              name: "Milk Sarbath",
              price: 50,
              type: "veg",
              isSignature: true,
              description: "Traditional nannari syrup milk sarbath with chilled sago & sabja seeds.",
              image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k7",
              name: "Boost Kulukki",
              price: 50,
              type: "veg",
              description: "Chocolate malt Boost powder shaken in ice cold creamy milk.",
              image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k8",
              name: "Horlicks Kulukki",
              price: 50,
              type: "veg",
              description: "Classic Horlicks milk cooler shaken with crushed ice.",
              image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k9",
              name: "Strawberry Kulukki",
              price: 50,
              type: "veg",
              description: "Sweet strawberry milk shake infused with nannari syrup & sabja.",
              image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=600&q=80"
            },
            {
              id: "k10",
              name: "Butterscotch Kulukki",
              price: 50,
              type: "veg",
              description: "Rich butterscotch praline flavor shaken cold in creamy milk.",
              image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
            }
          ]
        }
      ]
    },
    {
      id: "mojitos-limes",
      name: "Mojito & Lime",
      items: [
        {
          id: "m1",
          name: "Blue Karaoke Mojito",
          price: 90,
          isSignature: true,
          type: "veg",
          description: "Electric blue curacao flavor muddled with fresh mint, lime, and sparkling soda.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr7sapvzcUo2TNSHi4nPsGpWKWVQDuCsEvb6U7WFIWoQgWMG3iTkXV24p0vzVLCu1xl7RMWjM5UV2_d6MGyD4bCXM6idw5zZJKGoTtGtpt2LcwHhh4NhvCoXf9Kx-7NndsQlPXJFSlxegZ-AekdLASMKPiJNd2pGeKBsTRvNCIU37a60miRtcLEWgYlKaFUbqFacTL8HSWHdk9y7jT9Nm-FPaaXtEv-AwtPCaw1jv8bnj2yyAN8WBFWw"
        },
        {
          id: "m2",
          name: "Mango Mojito",
          price: 90,
          type: "veg",
          description: "Ripe Alphonso mango puree muddled with mint leaves and fizzy soda.",
          image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m3",
          name: "Green Apple Mojito",
          price: 90,
          type: "veg",
          description: "Crisp green apple syrup with fresh lime wedges and crushed mint.",
          image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m4",
          name: "Orange Mojito",
          price: 90,
          type: "veg",
          description: "Zesty fresh orange slices muddled with crushed ice and mint.",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m5",
          name: "Passion Fruit Mojito",
          price: 90,
          type: "veg",
          description: "Tangy tropical passion fruit soda cooler with lime.",
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m6",
          name: "Strawberry Mojito",
          price: 90,
          type: "veg",
          description: "Juicy strawberry chunks muddled with lemon and mint.",
          image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m7",
          name: "Watermelon Mojito",
          price: 90,
          type: "veg",
          description: "Refreshing fresh watermelon juice muddled with garden mint.",
          image: "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "l1",
          name: "Normal Lime",
          price: 25,
          type: "veg",
          description: "Classic chilled sweet & salt fresh lime juice.",
          image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "l2",
          name: "Grape Lime",
          price: 30,
          type: "veg",
          description: "Chilled dark grape juice infused with fresh lime twist.",
          image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "l3",
          name: "Mint Lime",
          price: 30,
          type: "veg",
          description: "Fresh crushed garden mint blended into tangy lime soda.",
          image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "l4",
          name: "Pineapple Lime",
          price: 30,
          type: "veg",
          description: "Sweet pineapple flavor blended with sour lemon twist.",
          image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "shakes",
      name: "Shakes & Signatures",
      items: [
        {
          id: "sh1",
          name: "Apple Shake",
          price: 70,
          type: "veg",
          description: "Fresh red apple blended with chilled whole milk and vanilla cream.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh2",
          name: "Shamam Shake",
          price: 70,
          type: "veg",
          description: "Creamy cantaloupe melon shake chilled with crushed ice.",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh3",
          name: "Dates Shake",
          price: 80,
          type: "veg",
          description: "Nutritious Arabian dates blended with thick cold milk.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh4",
          name: "Chikoo Shake",
          price: 70,
          type: "veg",
          description: "Sweet Sapota fruit thick shake with vanilla ice cream.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh5",
          name: "Papaya Shake",
          price: 80,
          type: "veg",
          description: "Ripe golden papaya blended into a smooth energy shake.",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh6",
          name: "Mango Shake",
          price: 70,
          type: "veg",
          description: "Rich Alphonso mango pulp thick shake.",
          image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh7",
          name: "Kitkat Shake",
          price: 70,
          type: "veg",
          description: "Crunchy KitKat chocolate bars blended into thick milk & chocolate drizzle.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh8",
          name: "Snickers Shake",
          price: 80,
          type: "veg",
          description: "Peanut caramel Snickers bar milkshake topped with nuts.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh9",
          name: "Pomegranate Shake",
          price: 70,
          type: "veg",
          description: "Antioxidant rich ruby pomegranate blended with sweet milk.",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh10",
          name: "Sharjah Shake",
          price: 70,
          type: "veg",
          isSignature: true,
          description: "Famous college hangout banana boost shake with dates & nuts.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh11",
          name: "Vanilla Shake",
          price: 70,
          type: "veg",
          description: "Classic Madagascar vanilla bean milk shake.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh12",
          name: "Cold Coffee",
          price: 80,
          type: "veg",
          isSignature: true,
          description: "Chilled espresso whip blended with thick milk & chocolate drizzle.",
          image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh13",
          name: "Dark Fantasy Shake",
          price: 70,
          type: "veg",
          description: "Melt-in-mouth Dark Fantasy chocolate cookies thick shake.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh14",
          name: "Oreo Shake",
          price: 70,
          type: "veg",
          description: "Original Oreo cookies crushed & blended with vanilla ice cream.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh15",
          name: "Avocado Shake",
          price: 80,
          type: "veg",
          isSignature: true,
          description: "Butter-smooth fresh avocado blended with honey and cold milk.",
          image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "sh16",
          name: "Strawberry Shake",
          price: 70,
          type: "veg",
          description: "Pink strawberry ice cream thick shake.",
          image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "ss1",
          name: "Roasted Cashew (Signature)",
          price: 100,
          type: "veg",
          isSignature: true,
          description: "Ultra rich milk shake loaded with slow-roasted crispy cashew nuts.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "ss2",
          name: "Kadi Shake / Dry Fruits (Signature)",
          price: 90,
          type: "veg",
          isSignature: true,
          description: "Loaded dry fruits (almonds, cashews, raisins, figs) crushed into thick milk.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "ss3",
          name: "Mixed Cocktail (Signature)",
          price: 70,
          type: "veg",
          isSignature: true,
          description: "Multi-fruit signature fusion shake layer with seasonal fruits.",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "ss4",
          name: "Double Mix (Signature)",
          price: 70,
          type: "veg",
          isSignature: true,
          description: "Dual-layer fruit shake combining mango and avocado goodness.",
          image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "ss5",
          name: "Tender Coconut (Signature)",
          price: 60,
          type: "veg",
          isSignature: true,
          description: "Pure tender coconut pulp and water blended into a refreshing cold shake.",
          image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "juices",
      name: "Fresh Juices",
      items: [
        {
          id: "j1",
          name: "Mosambi Juice",
          price: 50,
          type: "veg",
          description: "Freshly squeezed sweet lime juice served ice cold.",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j2",
          name: "Watermelon Juice",
          price: 50,
          type: "veg",
          description: "Pure 100% natural cold-pressed watermelon juice.",
          image: "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j3",
          name: "Orange Juice",
          price: 60,
          type: "veg",
          description: "Squeezed fresh orange juice loaded with vitamin C.",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j4",
          name: "Pineapple Juice",
          price: 50,
          type: "veg",
          description: "Tangy sweet fresh pineapple juice.",
          image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j5",
          name: "Grape Juice",
          price: 50,
          type: "veg",
          description: "Chilled fresh black grape juice.",
          image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j6",
          name: "Pomegranate Juice",
          price: 60,
          type: "veg",
          description: "Freshly pressed ruby red pomegranate juice.",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j7",
          name: "Shamam Juice",
          price: 60,
          type: "veg",
          description: "Hydrating muskmelon juice.",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j8",
          name: "Mango Juice",
          price: 60,
          type: "veg",
          description: "Natural mango juice juice served cold.",
          image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "j9",
          name: "Apple Juice",
          price: 60,
          type: "veg",
          description: "Freshly extracted crisp apple juice.",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "fj1",
          name: "Fresh Orange",
          price: 90,
          type: "veg",
          isSignature: true,
          description: "No added sugar 100% pure premium orange extract.",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "fj2",
          name: "Fresh Carrot",
          price: 80,
          type: "veg",
          description: "Healthy cold pressed Ooty carrot juice.",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "fj3",
          name: "Fresh Pineapple",
          price: 100,
          type: "veg",
          description: "Pure undiluted fresh pineapple extract juice.",
          image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "fj4",
          name: "ABC Juice (Apple Beetroot Carrot)",
          price: 80,
          type: "veg",
          isSignature: true,
          description: "The Miracle Detox Drink: Apple, Beetroot & Carrot freshly cold-pressed.",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
        }
      ]
    }
  ]
};
