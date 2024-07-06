$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>'
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-title_active)', function() {
        $(this)
          .addClass('catalog__tab-title_active').siblings().removeClass('catalog__tab-title_active')
          .closest('div.container').find('div.catalog__tab').removeClass('catalog__tab_active').eq($(this).index()).addClass('catalog__tab_active');
    }); 

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__info').eq(i).toggleClass('catalog-item__info_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });