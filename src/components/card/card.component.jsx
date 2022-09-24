
import { useEffect } from 'react';
import {CardContainer, CardContent, Img} from './card.styles'


const  clothes = [
    {
      "id": "2401",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Shirt_1.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Shirts",
      "name": "White Poplin Shirt",
      "amount": "2590"
    },
    {
      "id": "2402",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Shirt_2.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Shirts",
      "name": "Burgandy Flannel Shirt",
      "amount": "2340"
    },
    {
      "id": "2403",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Shirt_3.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Shirts",
      "name": "Red Flannel Shirt",
      "amount": "2390"
    },
    {
      "id": "2404",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Shirt_4.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Shirts",
      "name": "Green Flannel Shirt",
      "amount": "2120"
    },
    {
      "id": "2405",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Shirt_5.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Shirts",
      "name": "Blue Oxford Shirt",
      "amount": "1970"
    },
    {
      "id": "2406",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Hoodie_1.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Hoodies",
      "name": "Green Utility Hoodie",
      "amount": "2800"
    },
    {
      "id": "2407",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Hoodie_2.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Hoodies",
      "name": "White Utility Hoodie",
      "amount": "2600"
    },
    {
      "id": "2408",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Hoodie_3.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Hoodies",
      "name": "Gray Active Hoodie",
      "amount": "2700"
    },
    {
      "id": "2409",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Hoodie_4.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Hoodies",
      "name": "Green Active Camo Hoodie",
      "amount": "3100"
    },
    {
      "id": "2410",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Polo_1.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Polos",
      "name": "Burgundy Flex Polo",
      "amount": "950"
    },
    {
      "id": "2411",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Jeans_1.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Jeans",
      "name": "Blue Skinny Jeans",
      "amount": "2600"
    },
    {
      "id": "2412",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Jeans_2.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Jeans",
      "name": "Blue Distressed Jeans",
      "amount": "2600"
    },
    {
      "id": "2413",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Jeans_3.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Jeans",
      "name": "Black Knee Slash Jeans",
      "amount": "2600"
    },
    {
      "id": "2414",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Jeans_4.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Jeans",
      "name": "White Knee Slash Jeans",
      "amount": "2500"
    },
    {
      "id": "2415",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Jeans_5.jpg?alt=media",
      "brand": "American Eagle",
      "category": "Jeans",
      "name": "Khaki Slim Jeans",
      "amount": "2200"
    },
    {
      "id": "2416",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_1.jpg?alt=media",
      "brand": "Hollister",
      "category": "Shirts",
      "name": "Navy Oxford Shirt",
      "amount": "2250"
    },
    {
      "id": "2417",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_2.jpg?alt=media",
      "brand": "Hollister",
      "category": "Shirts",
      "name": "White Oxford Shirt",
      "amount": "2300"
    },
    {
      "id": "2418",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_3.jpg?alt=media",
      "brand": "Hollister",
      "category": "Shirts",
      "name": "Blue Poplin Shirt",
      "amount": "2200"
    },
    {
      "id": "2419",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_4.jpg?alt=media",
      "brand": "Hollister",
      "category": "Shirts",
      "name": "Red Poplin Shirt",
      "amount": "2200"
    },
    {
      "id": "2420",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_5.jpg?alt=media",
      "brand": "Hollister",
      "category": "Shirts",
      "name": "White Pattern Shirt",
      "amount": "1450"
    },
    {
      "id": "2421",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_1.jpg?alt=media",
      "brand": "Hollister",
      "category": "Hoodies",
      "name": "Gray Colorblock Hoodie",
      "amount": "2400"
    },
    {
      "id": "2422",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_2.jpg?alt=media",
      "brand": "Hollister",
      "category": "Hoodies",
      "name": "Pink Icon Hoodie",
      "amount": "2300"
    },
    {
      "id": "2423",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_3.jpg?alt=media",
      "brand": "Hollister",
      "category": "Hoodies",
      "name": "Navy Tie-Dye Icon Hoodie",
      "amount": "2550"
    },
    {
      "id": "2424",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_4.jpg?alt=media",
      "brand": "Hollister",
      "category": "Hoodies",
      "name": "Navy Colorblock Hoodie",
      "amount": "2100"
    },
    {
      "id": "2425",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Polo_1.jpg?alt=media",
      "brand": "Hollister",
      "category": "Polos",
      "name": "Burgundy Icon Polo",
      "amount": "1150"
    },
    {
      "id": "2426",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Polo_2.jpg?alt=media",
      "brand": "Hollister",
      "category": "Polos",
      "name": "Black Mint Icon Polo",
      "amount": "1250"
    },
    {
      "id": "2427",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Polo_3.jpg?alt=media",
      "brand": "Hollister",
      "category": "Polos",
      "name": "Pink Icon Polo",
      "amount": "1400"
    },
    {
      "id": "2428",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Jeans_1.jpg?alt=media",
      "brand": "Hollister",
      "category": "Jeans",
      "name": "Black Skinny Jeans",
      "amount": "2600"
    },
    {
      "id": "2429",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Jeans_2.jpg?alt=media",
      "brand": "Hollister",
      "category": "Jeans",
      "name": "Light Wash Skinny Jeans",
      "amount": "2500"
    },
    {
      "id": "2430",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Jeans_3.jpg?alt=media",
      "brand": "Hollister",
      "category": "Jeans",
      "name": "Wash Skinny Jeans",
      "amount": "2950"
    },
    {
      "id": "2431",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Shirt_1.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Shirts",
      "name": "Basic Check Shirt",
      "amount": "2900"
    },
    {
      "id": "2432",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Shirt_2.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Shirts",
      "name": "Basic Twill Shirt",
      "amount": "2700"
    },
    {
      "id": "2433",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Shirt_3.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Shirts",
      "name": "Striped Denim Shirt",
      "amount": "3120"
    },
    {
      "id": "2434",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Hoodie_1.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Hoodies",
      "name": "Sky Blue Hoodie",
      "amount": "2300"
    },
    {
      "id": "2435",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Hoodie_2.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Hoodies",
      "name": "Printed Hoodie",
      "amount": "2830"
    },
    {
      "id": "2436",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Hoodie_3.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Hoodies",
      "name": "Slogan Hoodie",
      "amount": "2490"
    },
    {
      "id": "2437",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Jeans_1.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Jeans",
      "name": "Blue Ripped Jeans",
      "amount": "2870"
    },
    {
      "id": "2438",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Jeans_2.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Jeans",
      "name": "Black Ripped Jeans",
      "amount": "2930"
    },
    {
      "id": "2439",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Jeans_3.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Jeans",
      "name": "Blue Bleached Jeans",
      "amount": "2600"
    },
    {
      "id": "2440",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Pb_Jeans_4.jpg?alt=media",
      "brand": "Pull & Bear",
      "category": "Jeans",
      "name": "Grey Skinny Jeans",
      "amount": "2700"
    },
    {
      "id": "2441",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Shirt_1.jpg?alt=media",
      "brand": "Zara",
      "category": "Shirts",
      "name": "Abstract Print Shirt",
      "amount": "2490"
    },
    {
      "id": "2442",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Shirt_2.jpg?alt=media",
      "brand": "Zara",
      "category": "Shirts",
      "name": "Abstract Print Shirt",
      "amount": "2370"
    },
    {
      "id": "2443",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Shirt_3.jpg?alt=media",
      "brand": "Zara",
      "category": "Shirts",
      "name": "Geometric Print Shirt",
      "amount": "2640"
    },
    {
      "id": "2444",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Shirt_4.jpg?alt=media",
      "brand": "Zara",
      "category": "Shirts",
      "name": "Geometric Shirt",
      "amount": "2900"
    },
    {
      "id": "2445",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Shirt_5.jpg?alt=media",
      "brand": "Zara",
      "category": "Shirts",
      "name": "Stiped Print Shirt",
      "amount": "2190"
    },
    {
      "id": "2446",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Shirt_6.jpg?alt=media",
      "brand": "Zara",
      "category": "Shirts",
      "name": "Striped Textured Shirt",
      "amount": "2780"
    },
    {
      "id": "2447",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Jeans_1.jpg?alt=media",
      "brand": "Zara",
      "category": "Jeans",
      "name": "Blue Ripped Jeans",
      "amount": "3200"
    },
    {
      "id": "2448",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Jeans_2.jpg?alt=media",
      "brand": "Zara",
      "category": "Jeans",
      "name": "Grey Cropped Jeans",
      "amount": "3450"
    },
    {
      "id": "2449",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Jeans_3.jpg?alt=media",
      "brand": "Zara",
      "category": "Jeans",
      "name": "Paint Splatter Jeans",
      "amount": "4200"
    },
    {
      "id": "2450",
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Zara_Jeans_4.jpg?alt=media",
      "brand": "Zara",
      "category": "Jeans",
      "name": "Blue Ripped Jeans",
      "amount": "3350"
    }
  ];


  const clickHandler = ()=> {
    alert('some has klicked the button')
  }

  

const Card = ()=>{
  
    
    return(
        <CardContainer>
            {clothes.sort(() => Math.random() - 0.5).map(data => {
                    return(
                        <CardContent onClick={clickHandler} key={data.id}>
                            <Img src={data.imageURL} alt="image" />
                            <span>{data.brand}</span>
                            <span>{data.category}</span>
                            <span> {data.amount}</span>
                        </CardContent>
                    )
                })
            }
            

        </CardContainer>
    )
}

export default Card