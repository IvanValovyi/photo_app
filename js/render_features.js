export function render_features(){
    let all_features = [
        {
            name:'Fast',
            svg:'grim',
            color: '#ff9800'
        },{
            name:'Loved',
            svg:'heart',
            color: '#f44336'
        },{
            name:'Clarity',
            svg:'camera',
            color: '#d2be0e'
        },{
            name:'Power',
            svg:'power',
            color: '#4CAF50'
        },{
            name:'Sharp',
            svg:'diamond',
            color: '#fff'
        },{
            name:'Cloud',
            svg:'cloud',
            color: '#2196F3'
        },{
            name:'Global',
            svg:'earth',
            color: '#ffc107'
        },{
            name:'Storage',
            svg:'storage',
            color: '#00bcd4'
        },{
            name:'Safe',
            svg:'people',
            color: '#fdf5e6'
        },{
            name:'Stabile',
            svg:'shield',
            color: '#ff9800'
        },{
            name:'Connected',
            svg:'wifi',
            color: '#757575'
        },{
            name:'HD',
            svg:'picture',
            color: '#e91e63'
        }
    ]

    let features_list = document.querySelector('.features_list')

    all_features.forEach(el=>{
        features_list.innerHTML+=`
        <div class='feature'>
        <svg style="fill: ${el.color};">
            <use xlink:href="./images/sprite.svg#${el.svg}"></use>
        </svg>
        <p>${el.name}</p>
        </div>
        `
    })
}