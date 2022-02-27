/* This is the High School Pass Percent Chart.js Script reference code */
/* Reference for Chart.js be: https://cdn.jsdelivr.net/npm/chart.js@3.6.0/dist/chart.min.js */
let myChart = document.getElementById("myChart").getContext('2d');
                        let lineChart = new Chart(myChart,{
                        type:'line',
                                    data:{
                                        labels:['17','18','19','20','21'],
                                        datasets:[{
                                            label:'High School Results',
                                            label:'Pass Percent',
                                            data:[
                                                61.04,
                                                96.15,
                                                87.09,
                                                62.06,
                                                100
                                        ],
                                        backgroundColor:[
                                        'rgba(255,99,132,0.6)',
                                        'rgba(255,99,132,0.6)',
                                        'rgba(255,99,132,0.6)',
                                        'rgba(255,99,132,0.6)',
                                        'rgba(255,99,132,0.6)'
                                    ],
                                    borderWidth:1,
                                    borderColor:'#777',
                                    hoverBorderWidth:'#000'
                                }]
                            },
                            options:{
                                title:{
                                    display:true,
                                    text:'Sampaje High School Final Results',
                                    fontSize:25
                                },
                                legend:{
                                    position:'right'
                                }
                            }

                        });
/* This is the PU Section Pass percent js reference code */
let myChart1 = document.getElementById("myChart1").getContext('2d');
                        let lineChart1 = new Chart(myChart1,{
                        type:'line',
                                    data:{
                                        labels:['18','19','20','21'],
                                        datasets:[{
                                            label:'Pass Percent PU',
                                            data:[
                                                94,
                                                100,
                                                93.5,
                                                100
                                        ],
                                        backgroundColor:[
                                        'rgba(255,99,132,0.6)',
                                        'rgba(255,99,132,0.6)',
                                        'rgba(255,99,132,0.6)',
                                        'rgba(255,99,132,0.6)'
                                    ],
                                    borderWidth:1,
                                    borderColor:'#777',
                                    hoverBorderWidth:'#000'
                                }]
                            },
                            options:{
                                title:{
                                    display:true,
                                    text:'Sampaje PU College Final Results',
                                    fontSize:15
                                },
                                legend:{
                                    position:'right'
                                }
                            }

                        });
/* Gallery js reference code. */
/* Gallery Swiper.js reference link: https://unpkg.com/swiper/swiper-bundle.min.js */
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
 
/* vanilla js for the div menu to 'follow' until the end */
  window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}