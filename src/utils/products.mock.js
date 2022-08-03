const products = [{
    id:1,
    title:"Vela Adelita",
    price:1500,
    img:'/assets/vela1.jpg',
    stock: 8,
    description:"Vela de soja en recipiente de vidrio con tapa de bambo. Contiene 80 GRS de cera de soja ",
    category:"Velas de Soja",
    sale:false
},
{   id:2,
    title:"Vela Mara",
    price:1200,
    img:'/assets/velaAlma.jpg',
    stock:3,
    description:"Vela de soja en recipiente de vidrio redondeado",
    category:"Velas de Soja",
    sale:false
},
{   id:3,
    title:"Vela Esperanza",
    price:1700,
    img:'/assets/velaEsperanza.jpg',
    stock:7,
    description:"Vela de soja en recipiente de vidrio con tapa incluida.",
    category:"Velas de Soja",
    sale:false
},
{   id:4,
    title:"Velón Valentina",
    price:1800,
    img:'/assets/velaMilagros.jpg',
    stock:4,
    description:"Recipiente de 1 litro cónico de vidrio. Incluye 1,500 kg de vela de soja",
    category:"Velas de Soja",
    sale:false
},
{
    id:5,
    title:"Vela Máxima",
    price:850,
    img:'/assets/velaMaxima.jpg',
    stock:6,
    description:"Vela de soja en recipiente de ceramica. Medidas: 9.5 x 6 cm. Peso 330 gr",
    category:"Velas de Soja",
    sale:false
},
{
    id:6,
    title:"Vela Bubble",
    price:500,
    img:'/assets/velaBuble.jpg',
    stock:8,
    description:"Vela cúbica hecha con circunferencias. Conultar disponibilidad de colores",
    category:"Velas de Soja",
    sale:false
},
{
    id:7,
    title:"Maceta Isabel",
    price:1045,
    img:'/assets/macetaIsabel.jpg',
    stock:8,
    description:"Maceta de ceramica con drenaje. Medidas: 11 x 11 x 10 cm ",
    category:"Macetas",
    sale:false
},
{
    id:8,
    title:"Maceta Sol Brillante",
    price:1120,
    img:'/assets/macetaSolBrillante.jpg',
    stock:7,
    description:"Maceta de cerámica con textura en relieve trabajada a mano",
    category:"Macetas",
    sale:false
},
{
    id:9,
    title:"Maceta Rosa Viejo",
    price:1340,
    img:'/assets/macetaRosaViejo.jpg',
    stock:10,
    description:"Maceta de cerámica con textura en relieve trabajada a mano",
    category:"Macetas",
    sale:false
},
{
    id:10,
    title:"Maceta Calabaza",
    price:1200,
    img:'/assets/macetaCalabaza.jpg',
    stock:4,
    description:"Maceta de cerámica con textura en relieve trabajada a mano, ahuecada y profunda",
    category:"Macetas",
    sale:false
},
{
    id:11,
    title:"Maceta Cielo",
    price:1500,
    img:'/assets/macetaCielo.jpg',
    stock:9,
    description:"Maceta de cerámica con textura en relieve trabajada a mano y con distintivo en borde.",
    category:"Macetas",
    sale:false
},
{
    id:12,
    title:"Maceta Panal",
    price:1000,
    img:'/assets/macetaPanal.jpg',
    stock:12,
    description:"Maceta de ceramica con drenaje. Trabajada a mano .Medidas: 9 x 9 x 10 ",
    category:"Macetas",
    sale:false
},
{
    id:13,
    title:"Maceta Geo",
    price:1850,
    img:'/assets/macetaGeo.jpg',
    stock:2,
    description:"Maceta geometrica a medida.",
    category:"Macetas",
    sale:false
},
{
    id:14,
    title:"Farol Monique",
    price:10900,
    img:'/assets/farolesMonique.jpg',
    stock:15,
    description:"Faroles natural wood mas detalle de cúpula labrada. Se recomienda utilizarlo para interiores. Contiene lugar de guardado, ideal para velas. Medidas: (Chico)15, 5 cm x 41 cm - (Mediano) 24 x 70 cm - (Grande: 32 x 103 cm)",
    category:"Faroles",
    sale:false
},
{
    id:15,
    title:"Farol Alison",
    price:10500,
    img:'/assets/farolAlison.jpg',
    stock:20,
    description:"Farol combinado en metal y madera. Ideal para interiores o galerias. Altura:(Chico) 34 cm, (Mediano) 53 cm, (Grande) 73 cm",
    category:"Faroles",
    sale:false
},
{
    id:16,
    title:"Farol Led",
    price:3500,
    img:'/assets/farolLed.jpg',
    stock:12,
    description:"Farol de metal con labrado simple blanco. No incluye pilas. Disponible en tres tamaños. Altura:(Chico) 23 cm, (Mediano) 35 cm, (Grande) 45 cm",
    category:"Faroles",
    sale:false
},
{
    id:17,
    title:"Farol Hanoi",
    price:7500,
    img:'/assets/farolHanoi.jpg',
    stock:15,
    description:"Farol 100% bamboo importado de la India. Incluye portavela de vidrio. Disponible en tres tamaños. Altura:(Chico) 21 cm, (Mediano) 35 cm, (Grande) 50 cm",
    category:"Faroles",
    sale:false
},
{
    id:18,
    title:"Farol Abril",
    price:5800,
    img:'/assets/farolAbril.jpg',
    stock:2,
    description:"Farol combinado en bamboo y natural wood. Ideal para interiores. Medidas: 24 x 37 cm",
    category:"Faroles",
    sale:false
},
{
    id:19,
    title:"Candelabro Cristal Dorado",
    price:7200,
    img:'/assets/portavelasCristal.jpg',
    stock:10,
    description:"Metal labrado a mano. El precio es por unidad. Medidas: 11 x 43 cm ",
    category:"Portavelas",
    sale:false
},
{
    id:20,
    title:"Candelabro Cristal Plateado",
    price:7200,
    img:'/assets/portavelasCristalPlateado.jpg',
    stock:8,
    description:"Metal labrado a mano. El precio es por unidad. Medidas: 11 x 43 cm ",
    category:"Portavelas",
    sale:false
},
{
    id:21,
    title:"Portavelas Luna",
    price:3400,
    img:'/assets/portavelasLuna.jpg',
    stock:6,
    description:"Vidrio trabajado con acuarela blanca. Medida: 15 cm ",
    category:"Portavelas",
    sale:false
},
{
    id:22,
    title:"Portavelas Catalina",
    price:2800,
    img:'/assets/portavelasCatalina.jpg',
    stock:14,
    description:"Portavelas de vidrio trabajo. Diseño exclusivo. Medidas: 12,5 X 12,5 X 13,5",
    category:"Portavelas",
    sale:false
},
{
    id:23,
    title:"Portavelas Combo Cristal",
    price:9200,
    img:'/assets/portavelasComboCristal.jpg',
    stock:8,
    description:"Combo de portavelas en acero. Ideales para decorar el salón. El chico mide 10 x 8 cm y el grande 12 x 11 cm ",
    category:"Portavelas",
    sale:false
},
{
    id:24,
    title:"Portavelas Cleo",
    price:1900,
    img:'/assets/portavelasCleo.jpg',
    stock:4,
    description:"Chapa labrada a mano. Medidas: 13.5 x 17 cm ",
    category:"Portavelas",
    sale:false
},
]

export default products