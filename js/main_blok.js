export function render_main_blok(){
    let all_blok = [
        {
            img:'main1.jpg',
            title:'Take photos with our app',
            text:'Super simple installment: free of charge',
            color:'#4CAF50'
        },{
            img:'main2.jpg',
            title:'CLICK! Fast and Easy',
            text:'Choose from thousands of features',
            color:'#f44336'
        },{
            img:'main3.jpg',
            title:'Smart Design',
            text:'Customize photos as you go',
            color:'#3f51b5'
        }
    ]

    let main_blok =  document.querySelector('.main_blok .slider')
    main_blok.style.left = '0%'
    let left = 0
    let take_tour_btn = document.querySelector('button.take_tour')

    all_blok.forEach(el=>{
        let blok = document.createElement('div')
        blok.className = 'slider_blok'

        blok.innerHTML = `
        <div class='download_blok'>
            <h1 class='subtitle'>${el.title}</h1>
            <p>${el.text}</p>
            <button class='download show' style='background: ${el.color}'>
            <span>Download</span>
            <svg>
                <use xlink:href="./images/sprite.svg#android"></use>
            </svg>
            <svg>
                <use xlink:href="./images/sprite.svg#apple"></use>
            </svg>
            <svg>
                <use xlink:href="./images/sprite.svg#windows"></use>
            </svg>
            </button>
        </div>
        <img src='./images/${el.img}' alt='main_image'/>
        `
        main_blok.append(blok)
    })

    take_tour_btn.addEventListener('click', ()=>{
        left<=100? left+=100 : left = 0
        main_blok.style.left = `-${left}%`
    })
}