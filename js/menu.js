export function menu(){
    let show_menu_btns = document.querySelectorAll('button.download.show')
    let close_menu_btns = document.querySelectorAll('button.download.close')

    let download_menu = document.querySelector('.download_menu')

    show_menu_btns.forEach(el=>{
        el.addEventListener('click', ()=>{
            download_menu.classList.add('show')
        })
    })

    close_menu_btns.forEach(el=>{
        el.addEventListener('click', ()=>{
            download_menu.classList.remove('show')
        })
    })
}