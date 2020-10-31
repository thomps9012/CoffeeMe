import Affogato from '../images/affogato.jpg';
import Breve from '../images/breve.jpg';
import BlackEye from '../images/blackEye.webp';
import CaffeAuLait from '../images/caffeAuLait.jpg';
import Cortado from '../images/cortado.jpg';
import Espresso from '../images/espresso.jpg';
import Iced from '../images/icedCoffee.jpg';
import Latte from '../images/latte.jpg';
import Machiatto from '../images/machiatto.jpg';
import RedEye from '../images/red-eye.jpg';
import Vienna from '../images/vienna.webp';
import Cappuccino from '../images/cappuccino.jpg';


export default{

    drinks: [
        {
            id: 1,
            name: "Affogato",
            image: Affogato,
            description: "An affogato is an Italian coffee-based dessert. It usually takes the form of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso.",
            coffee: "One shot of espresso",
            dairy: "Gelato or Ice Cream",
            recipe: "Pour the shot of espresso over the ice cream or gelato and enjoy before everything melts."
        },
        {
            id: 2,
            name: "Breve",
            image: Breve,
            description: "Caffe breve is an espresso-based coffee similar to a cappuccino, but with 1/2 and 1/2 instead of milk.",
            coffee: "One shot of espresso",
            dairy: "Half and Half",
            recipe: "To make a caffè breve, the half-and-half is first steamed and frothed. You then pull a shot of espresso (2 ounces) and place it into an appropriate cup. Pour in the hot half-and-half, holding back the foam. Then spoon the foam from the half-and-half over the top."
        },
        {
            id: 3,
            name: "Black Eye",
            image: BlackEye,
            description: "A black eye is a cup of normal drip coffee (either iced or hot) with a double shot of espresso.",
            coffee: "Two shots of espresso, and a cup of normal drip coffee",
            dairy: "Add milk or creamer to taste",
            recipe: "Pour the shots of espresso in your coffee and hold on for the ride!"
        },
        {
            id: 4,
            name: "Caffe Au Lait",
            image: CaffeAuLait,
            description: "Café au lait is coffee with hot milk added. It differs from white coffee, which is coffee with cold milk or other whiteners added.",
            coffee: "Drip or Pour over of your choice",
            dairy: "Warm Milk",
            recipe: "Pour the warm milk in your coffee and enjoy!"
        },
        {
            id: 5,
            name: "Cortado",
            image: Cortado,
            description: "A cortado is a beverage consisting of espresso mixed with a drizzle of warm milk to soften the taste and reduce the degree of bitterness of the coffee. The milk in a cortado is steamed, but not frothy.",
            coffee: "Espresso Shots of your choice",
            dairy: "Steamed Milk",
            recipe: "Pour the shots in a small cup / glass, add your steamed milke and relax"
        },
        {
            id: 6,
            name: "Iced Coffee",
            image: Iced,
            description: "Iced coffee is a great choice on a hot summer's day and can ",
            coffee: "Beans of your choice",
            dairy: "Add dairy if you choose.",
            recipe: "Grind the beans, boil water, tamp the beans in the machine and then press the water through."
        },
        {
            id: 7,
            name: "Espresso",
            image: Espresso,
            description: "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
            coffee: "Beans of your choice",
            dairy: "Add dairy if you choose.",
            recipe: "Grind the beans, boil water, tamp the beans in the machine and then press the water through."
        },
    ]
}