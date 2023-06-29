

let map_places = document.getElementById('map')


  ymaps.ready(init);

  function init(){
    const map = new ymaps.Map('map', {
      center: [44.396631, 33.937235], // Москва
      zoom: 16
    });
    map.geoObjects
      .add(new ymaps.Placemark([ 44.397679, 33.936053], {
        iconCaption: 'Дримвуд',
      }, {
        iconColor: '#77b945',
        preset: 'islands#greenFamilyIcon',
      }))
  }
