$.productGallery = function () {
    $(".thumbnail").on({
        mouseenter: function () {
            $(this).css({
                'cursor': 'pointer'
            })
            var imgsrc = $(this).attr('src');

            var indexSmall = imgsrc.lastIndexOf("-small");
            var bigImage = imgsrc.slice(0, indexSmall);

            var indexExt = imgsrc.lastIndexOf(".");
            var ext = imgsrc.slice(indexExt);

            $("#mainImg img").attr("src", bigImage + ext);
            $("#mainImg a").attr("href", bigImage + ext);
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default'
            })
        },
    });
}