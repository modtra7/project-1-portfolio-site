$(() => {
    const $sections = $('.section')
    const $sectBtns = $('.controls')
    const $sectBtn = $('.control')
    const $allSections = $('.main-content')

    const pickPage = () => {
        for (let i = 0; i < $sectBtn.length; i++) {
            $sectBtn[i].on('click', function() {
                let currentBtn = $('.active-btn')
                currentBtn[0].className = currentBtn[0].className.replace('.active-btn', '')
                $(this).className += ' active-btn'
            })
        }
    }
    pickPage()
})