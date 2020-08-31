const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();

let dataObj = {
    total: 5,
    "items": [{
        "id": "1476620",
        "name": "TV LED 50\" - Samsung Crystal UHD 50TU7125, Smart TV, 4K Real y HDR10+, Compatible con Asistentes de Voz",
        "description": "Los paneles Crystal UHD con resolución 4K de Samsung, están construidos con nanopartículas inorgánicas cristalinas y 16 bits, lo cual les permite reproducir hasta 1.000 millones de colores y, al ser inorgánicas, no se degradan con el tiempo. ¿Quieres el televisor 4K perfecto para tu día a día?",
        "image": "/images/TV-LED-50_----Samsung-Crystal-UHD-50TU7125--Smart-TV--4K-Real-y-HDR10---Compatible-con-Asistentes-de-Voz.png",
        "price": "489"

    }, {
        "id": "1465208",
        "name": "Convertible 2 en 1 - Microsoft Surface Pro 7, 12.3\", Intel® Core™ i5-1035G4, 8 GB RAM, 128 GB, W10",
        "description": "Todo lo que necesitas en un solo equipo; la versatilidad del convertible 2 en 1 Microsoft, SRFC PRO7 te dejará impactado. Úsalo como una tablet, un portátil o una pantalla con soporte; su diseño ligero y cambiante permite llevar siempre contigo un ordenador de gran potencia allá donde vayas.",
        "image": "/images/Convertible-2-en-1----Microsoft-Surface-Pro-7--12.png",
        "price": "999"

    }, {
        "id": "1469615",
        "name": "Móvil - Xiaomi Redmi Note 8 Pro, Gris, 128 GB, 6 GB RAM, 6.53\" Full HD+, Helio G90T, 4500 mAh, Android",
        "description": "Si necesitas un móvil versátil y funcional al mismo tiempo que no quieres renunciar al rendimiento, no te pierdas la oportunidad de hacerte con tu móvil Xiaomi Redmi Note 8 Pro, de 6 GB de RAM y 128 GB de capacidad. Tecnología y componentes de calidad a tu alcance.",
        "image": "/images/Móvil---Xiaomi-Redmi-Note-8-Pro--Gris--128-GB--6-GB-RAM--6.png",
        "price": "211"

    }, {
        "id": "1455587",
        "name": "Frigorífico combi - AEG RCB63826TW, 43 dB, No Frost, 349 l, Clase energética A++, Blanco",
        "description": "Frigorífico combi Dynamic Air de libre instalación de 2.00 mts, sistema de refrigeración independiente Twintech, display LED en puerta, Cajón FreshBox, puerta arqueada, tirador de acero, Blanco, Clase A++.",
        "image": "/images/Frigorífico-combi---AEG-RCB63826TW--43-dB--No-Frost--349-l--Clase-energética-A----Blanco.png",
        "price": "799"

    }, {
        "id": "1468941",
        "name": "Consola - PS4 Pro 1TB + God of War + Horizon: Zero Dawn Complete",
        "description": "Nada volverá a ser igual cuando pruebes la PS4 Pro de 1 TB. Esta consola, desarrollada por Sony te proporciona una experiencia de entretenimiento única. No sólo podrás jugar a otro nivel, con mejores gráficos y mayor fluidez, si no que podrás disfrutar de tus películas y series favoritas de Netflix y otras app similares.",
        "image": "/images/Consola---PS4-Pro-1TB---God-of-War---Horizon_-Zero-Dawn-Complete.png",
        "price": "429"

    }]
};
let data = JSON.stringify(dataObj);
app.get('/products', function (req, res) {
    res.send(data);
});
app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(8080, () => console.log('Listening'));