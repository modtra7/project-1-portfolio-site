$(() => {

    // === sticky banner === //

    $(window).scroll(() => {
        const $banner = $('.banner')
        scroll = $(window).scrollTop()
        if (scroll >= 100){
            $banner.addClass('sticky')
        }else {
            $banner.removeClass('sticky')
        }
    })


    // === Resume Modal === //

    const $open = $('#open')
    const $modal = $('#modal')
    const $close = $('#close')

    const openModal = () => {
        $modal.css('display', 'block')
    }
    $open.on('click', openModal)

    const closeModal = () => {
        $modal.css('display', 'none')
    }
    $close.on('click', closeModal)


    // === Portfolio Carousel === //

    let currentImgIndex = 0
    const numOfImgs = $('.carousel-imgs').children().length - 1

    // Next //
    $('.next').on('click', () => {
        $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex < numOfImgs){
            currentImgIndex++
        }else{
            currentImgIndex = 0
        }

        $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'block')
    })

    // Previous //
    $('.previous').on('click', () => {
        $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex > 0) {
            currentImgIndex--
        }else{
            currentImgIndex = numOfImgs
        }
        $('.carousel-imgs').children().eq(currentImgIndex).css('display', 'block')
    })
})