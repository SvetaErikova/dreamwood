//
// let map = document.getElementById('map')
// let block_with_map = document.querySelector('.content_contacts')
//
// if ( block_with_map && map ) {
//   ymaps.ready(init);
//
//   function init() {
//     let map_settings = {};
//
//     if (  typeof SITE_MAP_SETTINGS === 'undefined' || SITE_MAP_SETTINGS === null ){
//       map_settings = {
//         coords: [44.843170, 33.604412],
//         title: "Заголовок",
//         text: "Описание вашего отеля",
//         link: "/",
//         image: "/assets/img/1.jpg",
//         mark: "",
//       };
//
//     } else {
//       map_settings = {...SITE_MAP_SETTINGS}
//     }
//
//
//     var map = new ymaps.Map("map", {
//         center: [44.843170, 33.604412],
//         zoom: 15,
//         controls: ['routeButtonControl']
//       }, {
//         searchControlProvider: 'yandex#search'
//       }),
//
//       placemark = new ymaps.Placemark(map_settings.coords, {
//           balloonContentHeader: "Жемчужина ",
//           balloonContent: "<a href='https://yandex.ru/maps/?ll=33.604466%2C44.842974&mode=routes&rtext=~44.843170%2C33.604412&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDY2NjYyODI1EpMB0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQmtGA0YvQvCwg0JHQsNGF0YfQuNGB0LDRgNCw0LnRgdC60LjQuSDRgNCw0LnQvtC9LCDRgdC10LvQviDQn9C10YHRh9Cw0L3QvtC1LCDQndCw0LHQtdGA0LXQttC90LDRjyDRg9C70LjRhtCwLCAyIgoN62oGQhVoXzNC&z=18.68' target='_blank'>проложить маршрут</a>",
//           // offset: [50, -30]
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: '/assets/img/icons/placemark.svg',
//           iconImageSize: [48, 56],
//           iconImageOffset: [-24, -56],
//           closeButton: false,
//           hideIconOnBalloonOpen: false,
//           balloonOffset: [100, 40]
//         }
//       );
//
//     map.geoObjects.add(placemark);
//
//     // Открываем балун на карте (без привязки к геообъекту).
//     placemark.balloon.open();
//
//     map.behaviors.disable('scrollZoom');
//
//
//   }
// }
