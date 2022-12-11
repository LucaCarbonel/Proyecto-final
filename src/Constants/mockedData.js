const USER = [
  {  
    nombre:"Ben",
    apellido:"Tennyson",
    email: "user@gmail.com",
    empresa: "oneTree",
    password: "12345678",
    img_perfil: "data:image/jpeg;base64,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",
    ubicacion: {},
    cuenta: 150,
    rol: "generico",
  },  
  {  
    nombre:"recolector",
    apellido:"generico",
    email: "recolector@gmail.com",
    empresa: "Anima",
    password: "12345678",
    img_perfil: "http://www.dondereciclo.org.ar/blog/wp-content/uploads/2013/05/cartonero4-lores.jpg",
    ubicacion: {},
    cuenta: 0,
    rol: "recolector",
  },
  {  
    nombre:"beneficiario",
    apellido:"generico",
    email: "beneficiario@gmail.com",
    empresa: "McDonalds",
    password: "12345678",
    img_perfil: "https://contacto-rapido.com/img_pages/contacto-kfc.png",
    ubicacion: {},
    cuenta: 0,
    rol: "beneficiario",
  },
  {  
    nombre:"Alberto",
    apellido:"Fernandez",
    email: "user2@gmail.com",
    empresa: "oneTree",
    password: "12345678",
    img_perfil: "data:image/jpeg;base64,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",
    ubicacion: {},
    cuenta: 130,
    rol: "generico",
  },
  {  
    nombre:"Mark",
    apellido:"Suckenberg",
    email: "user3@gmail.com",
    empresa: "oneTree",
    password: "12345678",
    img_perfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4Qe6-vQNZSFgs5c9bRN-sw6He1AUlfHQJg&usqp=CAU",
    ubicacion: {},
    cuenta: 170,
    rol: "generico",
  },
  {  
    nombre:"Jhonny",
    apellido:"Deep",
    email: "user4@gmail.com",
    empresa: "oneTree",
    password: "12345678",
    img_perfil: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Johnny_Depp_2020.jpg/220px-Johnny_Depp_2020.jpg",
    ubicacion: {},
    cuenta: 100,
    rol: "generico",
  },
]

const BENEFITS = [
  {
    descripcion:"Los mejores Churros en KFC a un 30% de descuento.",
    empresa:"McDonald",
    imagen:"https://as01.epimg.net/epik/imagenes/2020/06/08/portada/1591616374_194956_1591616478_noticia_normal_recorte1.jpg",
    precio:"150",
  },
  {
    descripcion:"Boxers de baño con un descuento de 30$URU hasta terminar stock.",
    empresa:"Chanel",
    imagen:"https://www.modaes.com/files/000_2016/renner/renner-tienda-brasil-728.jpg",
    precio:"100",
  },
  {
    descripcion:"Por cada transaccion en tokens desencallaremos una ballena.",
    empresa:"GreenPeace",
    imagen: "https://ichef.bbci.co.uk/news/800/cpsprodpb/2A3F/production/_95151801_mediaitem95151800.jpg.webp",
    precio:"50",
  },
  {
    descripcion:"Un video del bananero con tu nombre y apellido",
    empresa:"SAPEEE",
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqGAIJthFRX1o_nR4e5uQM7upS3JG0bTlOQ&usqp=CAU",
    precio:"150",
  },
  {
    descripcion:"50% de descuento en la compra de ecoplacas.",
    empresa:"EcoLoops",
    imagen:"https://www.plasticoscomerciales.com/wp-content/uploads/2018/03/plancha-transparente.jpg",
    precio:"100",
  },
  {
    descripcion:"Un pokemon legenadrio shiny para pokemon go.",
    empresa:"Pokemon GO",
    imagen:"https://pbs.twimg.com/media/FFDqtEGXoAkQcg5?format=jpg&name=medium",
    precio:"500",
  },
] 
const MARKERS = [
  {
    lng: -56.20830134607882,
    lat: -34.81482291964686,
    name: "Alber Tito",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 999999999,
    address: "Soca 2345"
  },
  {
    lng: -56.22540730067676,
    lat: -34.81235200255058,
    name: "Super Mercado",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 111111111,
    address: "Saravia 5678"
  },
  {
    lng: -56.195971344853255,
    lat: -34.88488886008642,
    name: "Tienda Japon",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 222222222,
    address: "Mendoza 2443"
  },
  {
    lng: -56.248641389032166,
    lat: -34.87707133912555,
    name: "Anima",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 333333333,
    address: "Burdeos 1234"
  }
]

const BENEFITS = [
  {
    descripcion:"Los mejores Churros en KFC a un 30% de descuento.",
    empresa:"McDonald",
    imagen:"https://as01.epimg.net/epik/imagenes/2020/06/08/portada/1591616374_194956_1591616478_noticia_normal_recorte1.jpg",
    precio:"150",
  },
  {
    descripcion:"Boxers de baño con un descuento de 30$URU hasta terminar stock.",
    empresa:"Chanel",
    imagen:"https://www.modaes.com/files/000_2016/renner/renner-tienda-brasil-728.jpg",
    precio:"100",
  },
  {
    descripcion:"Por cada transaccion en tokens desencallaremos una ballena.",
    empresa:"GreenPeace",
    imagen: "https://ichef.bbci.co.uk/news/800/cpsprodpb/2A3F/production/_95151801_mediaitem95151800.jpg.webp",
    precio:"50",
  },
  {
    descripcion:"Un video del bananero con tu nombre",
    empresa:"SAPEEE",
    imagen:"https://970universal.com/wp-content/uploads/2020/12/f608x342-588537_618260_0.jpeg",
    precio:"150",
  },
  {
    descripcion:"50% de descuento en la compra de ecoplacas.",
    empresa:"EcoLoops",
    imagen:"https://www.plasticoscomerciales.com/wp-content/uploads/2018/03/plancha-transparente.jpg",
    precio:"100",
  },
  {
    descripcion:"Un pokemon legenadrio shiny para pokemon go.",
    empresa:"Pokemon GO",
    imagen:"https://pbs.twimg.com/media/FFDqtEGXoAkQcg5?format=jpg&name=medium",
    precio:"500",
  },
] 
const MARKERS = [
  {
    lng: -56.20830134607882,
    lat: -34.81482291964686,
    name: "Alber Tito",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 999999999,
    address: "Soca 2345"
  },
  {
    lng: -56.22540730067676,
    lat: -34.81235200255058,
    name: "Super Mercado",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 111111111,
    address: "Saravia 5678"
  },
  {
    lng: -56.195971344853255,
    lat: -34.88488886008642,
    name: "Tienda Japon",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 222222222,
    address: "Mendoza 2443"
  },
  {
    lng: -56.248641389032166,
    lat: -34.87707133912555,
    name: "Anima",
    url: 'https://media.ambito.com/p/cf3728afe9f3ee11f1de90de42384309/adjuntos/239/imagenes/037/445/0037445218/fireshot-capture-1328-avanza-un-acuerdo-entre-supermercados-en-uruguay-bae-negocios_-wwwbaenegocioscom_-696x413png.png',
    phone: 333333333,
    address: "Burdeos 1234"
  }
]

export {
  USER,
  BENEFITS,
  MARKERS,
}