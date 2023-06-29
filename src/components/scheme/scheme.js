
/*
0 - Дефолтный компонент и пример для заполнения,
открывается если нет актуального id
*/

let SCHEME_PLACEMARKS = {
  0: {
    title: "Название объекта",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности и продающее его пользователю",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  1: {
    title: "Корпус Солнечный",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    images: ["/assets/img/1.jpg","/assets/img/2.jpg","/assets/img/3.jpg"],
    link: "/",
  },
  2: {
    title: "Кинотеатр",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  3: {
    title: "Спортплощадка",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  4: {
    title: "Спортплощадка",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  5: {
    title: "Костровая площадка",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  6: {
    title: "Корпус Приморский",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  7: {
    title: "Спорткомплекс",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  8: {
    title: "СПИР",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  9: {
    title: "Корпус Космос",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  10: {
    title: "Бювет с мин.водой",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  11: {
    title: "Костровая площадка",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  12: {
    title: "Открытый басейн",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  13: {
    title: "Медцентр",
    subtitle: "Краткое описание объекта, раскрывающее его основные особенности",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  14: {
    title: "Костровая площадка",
    subtitle: "Бар с прохладительными напитками",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  15: {
    title: "Корпус Сокол",
    subtitle: "Раздевалки, туалеты, душевые",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  16: {
    title: "Костровая площадка",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sed.",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  17: {
    title: "Пляж",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sed.",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  18: {
    title: "Часовня",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sed.",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  19: {
    title: "Спортплощадка",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sed.",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },
  20: {
    title: "Спортплощадка",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sed.",
    description: "",
    schedule: "",
    images: ["/assets/img/1.jpg"],
    link: "/",
  },

}


/* Блок со схемой свг и плейсмарками */
let block_with_scheme = document.querySelectorAll('.content_scheme');


block_with_scheme.forEach(scheme => {
  let svg = scheme.querySelector('.scheme_svg');

  if ( svg ) {

    let placemarks = svg.querySelectorAll('[data-placemark]');

    placemarks.forEach(pm => {

      function getCoords(pm){
        return  pm.getBBox();
      }
      function getCoeff(){
        return  scheme.querySelector('svg').getBoundingClientRect().width / 1760
      }

      window.addEventListener('resize', ()=>{
        let coords = getCoords(pm)
        let coeff = getCoeff()
        tooltip.style.cssText = `left:${(coords.x*coeff)+(pm.getBBox().width / 2)}px;top:${coords.y*coeff}px;`
      })

      let tooltip = document.createElement('div');
      let tooltip_title = document.createElement('h3')

      scheme.querySelector('.scheme').append(tooltip);
      tooltip.append(tooltip_title)

      tooltip.classList.add('scheme--tooltip');

      let title;
      SCHEME_PLACEMARKS[pm.dataset.placemark_id] ? title = SCHEME_PLACEMARKS[pm.dataset.placemark_id].title : title = SCHEME_PLACEMARKS[0].title
      tooltip_title.textContent = title;

      let coords = getCoords(pm);
      let coeff = getCoeff();

      tooltip.style.cssText = `left:${(coords.x*coeff)+(pm.getBBox().width / 2)}px;top:${(coords.y*coeff)}px;`

      pm.addEventListener('mouseover', (e)=>{
        tooltip.classList.add('is_active')
      })

      pm.addEventListener('mouseleave', (e)=>{
        tooltip.classList.remove('is_active')
      })

    })


    // /* PanZoom for scheme */
    // const scheme_panzoom = new Panzoom(scheme.querySelector("#scheme_panzoom"), {
    //   maxScale: 2,
    //   step: 0.5,
    //   click: false,
    //   wheel: false,
    // });
    //
    // scheme_panzoom.toggleZoom()
    //
    // let zoom_in_button = scheme.querySelector('.js-zoom_in');
    // zoom_in_button.addEventListener('click', (e)=>{
    //   scheme_panzoom.zoomIn();
    //   checkZoom()
    // })
    //
    // let zoom_out_button = scheme.querySelector('.js-zoom_out')
    // zoom_out_button.addEventListener('click', (e)=>{
    //   scheme_panzoom.zoomOut();
    //   checkZoom()
    // })
    //
    //
    // function checkZoom(){
    //   !scheme_panzoom.canZoomOut() ? zoom_out_button.style.opacity = "0.3" : zoom_out_button.style.opacity = "1";
    //   !scheme_panzoom.canZoomIn() ? zoom_in_button.style.opacity = "0.3" : zoom_in_button.style.opacity = "1";
    // }
    // checkZoom();

  }
})

