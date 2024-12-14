const products = [ 
    {
        id:"31456",
        name: "Electric guitar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste molestiae aliquam ullam a dicta laborum praesentium quo tenetur velit repellat doloribus voluptates aspernatur, ex quas qui delectus. Explicabo, delectus!",
        image: "https://www.maxiaxi.de/media/catalog/product/cache/3e7997d40e92deb713a3463981f7aa3d/1/7/173236_co3_rgb.webp",
        Price:300,
        Stock: 30,
        Category: "Guitar",
    },
    {
        id:"32456",
        name: "Acustic guitar",
        description: "",
        image: "https://www.kirstein.de/out/pictures/generated/product/1/540_450_75/0f6fd8647cc4f3b4b314447d5803f1b2_1.jpg",
        Price:300,
        Stock: 30,
        Category: "Guitar",
    },
    {
        id:"33456",
        name: "Elektron Digitakt",
        description: "",
        image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_58/589677/19114413_800.jpg",
        Price:3002,
        Stock: 60,
        Category: "Drums",
    },        {
        id:"34456",
        name: "Roland TR-909",
        description: "",
        image: "https://i.ebayimg.com/images/g/uiAAAOSwMwFjpjrQ/s-l1200.jpg",
        Price:10000,
        Stock: 90,
        Category: "Drums",
    },
    {
        id:"35456",
        name: "Pioneer Cdj- 3000",
        description: "",
        image: "https://r2.gear4music.com/media/59/596920/600/preview.jpg",
        Price:2300,
        Stock: 20,
        Category: "Dj-Controller",
    }, 
    {
        id:"36456",
        name: "Pioneer Cdj- 2000 nexus 2",
        description: "",
        image: "https://www.colognestreetmarket.de/wp-content/uploads/2020/03/2A530D09-C173-437E-98EA-54EF9F25378E-768x768.webp",
        Price:2300,
        Stock: 20,
        Category: "Dj-Controller",
    },            
    {
        id:"37456",
        name: "Beyerdynamic DT-990 Pro",
        description: "",
        image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_10/106865/18443258_800.jpg",
        Price:3003,
        Stock: 60,
        Category: "Headphones",
    },
    {
        id:"38456",
        name: "Beyerdynamic DT-1990 Pro",
        description: "",
        image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_60/601698/19537732_800.jpg",
        Price:32003,
        Stock: 40,
        Category: "Headphones",
    }
]

const GetProducts = ()=> {
return new Promise((resolve, reject) => {
    setTimeout (()=>{
        resolve (products)
    }, 2000)
        
    })
}

export {GetProducts}