// /* Booking */
// let block_booking = document.querySelectorAll('.js-booking');
//
//
// block_booking.forEach(block => {
//
//   // Date Picker Input
//   let calendar_input = block.querySelector('.booking__calendar');
//   let booking_button = block.querySelector('.booking__button');
//
//
//   let booking_link = "", arrival_date = "", leave_date = "", room = "";
//
//
//   if ( calendar_input ) {
//
//     const picker = new Litepicker({
//       element: document.getElementById('checkin'),
//       elementEnd: document.getElementById('checkout'),
//       singleMode: false,
//       autoApply: true,
//       format: 'D MMMM',
//       lang: "ru-RU",
//       minDate: new Date(),
//       position: 'left auto',
//       numberOfMonths: 2,
//       numberOfColumns: 2,
//       showTooltip: false,
//       setup: (picker) => {
//         picker.on('selected', (date1, date2) => {
//           arrival_date = date2.format('DD/MM/YYYY')
//           leave_date = date2.format('DD/MM/YYYY')
//         });
//       },
//       plugins: ['mobilefriendly'],
//       mobilefriendly: {
//         breakpoint: 668,
//       },
//     });
//   }
//
//   // Create link from inputs
//   booking_button.addEventListener('click', (e)=>{
//
//     let link = "/booking/?&arrivalDate="+arrival_date+"&departureDate="+leave_date
//     console.log(link)
//
//     window.open(link, '_blank')
//   })
//
// })
