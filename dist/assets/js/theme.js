$('#banner').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    navigation: true,
    animateOut: 'fadeOut',
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

$('#featured-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#blogs').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('#new-arrival-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#best-seller-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#related-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#testimonial').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    navigation: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

// search toggler
$(".search-trigger").click(function () {
    $(".search-box").addClass("is-visible");
});

$(".close-btn").click(function () {
    $(".search-box").removeClass("is-visible");
});

// mini cart toggler
$(".mini-cart-btn").on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(".cart-list").slideToggle();
    $(".settings-list").slideUp();
});

// mini cart toggler
$(".settings-btn").on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(".settings-list").slideToggle();
    $(".cart-list").slideUp();
});

// sticky menu 
var $window = $(window);
$window.on('scroll', function () {
    var scroll = $window.scrollTop();
    if (scroll < 300) {
        $(".header").removeClass("is-sticky");
    } else {
        $(".header").addClass("is-sticky");
    }
});

// scroll to top
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.scroll-top').removeClass('not-visible');
    } else {
        $('.scroll-top').addClass('not-visible');
    }
});
$('.scroll-top').on('click', function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});

// Sidebar Category
var categoryChildren = $('.sidebar-category li .children');
categoryChildren.slideUp();
categoryChildren.parents('li').addClass('has-children');
$('.sidebar-category').on('click', 'li.has-children > a', function (e) {
    if ($(this).parent().hasClass('has-children')) {
        if ($(this).siblings('ul:visible').length > 0) $(this).siblings('ul').slideUp();
        else {
            $(this).parents('li').siblings('li').find('ul:visible').slideUp();
            $(this).siblings('ul').slideDown();
        }
    }
    if ($(this).attr('href') === '#') {
        e.preventDefault();
        return false;
    }
});

// product view mode change js
$('.product-view-mode a').on('click', function (e) {
    e.preventDefault();
    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');
    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid list').addClass(viewMode);
});

// Nice Select
$(document).ready(function () {
    $('.nice-select').niceSelect();
});

// Stock
$('.btn-number').click(function (e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function () {

    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

// quantity change js
$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
$('.pro-qty').append('<span class="inc qtybtn">+</span>');
$('.qtybtn').on('click', function () {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find('input').val(newVal);
});

// Checkout Page accordion
$("#create_pwd").on("change", function () {
    $(".account-create").slideToggle("100");
});

$("#ship_to_different").on("change", function () {
    $(".ship-to-different").slideToggle("100");
});

// Payment Method Accordion
$('input[name="paymentmethod"]').on('click', function () {
    var $value = $(this).attr('value');
    $('.payment-method-details').slideUp();
    $('[data-method="' + $value + '"]').slideDown();
});

// Login-Register
$(document).ready(function () {
    let signup = $(".links").find("li").find("#signup");
    let signin = $(".links").find("li").find("#signin");
    let reset = $(".links").find("li").find("#reset");
    let first_input = $("form").find(".first-input");
    let hidden_input = $("form").find(".input-block").find("#repeat-password");
    let signin_btn = $("form").find(".signin-btn");

    //----------- sign up ---------------------
    signup.on("click", function (e) {
        e.preventDefault();
        $(this).parent().parent().siblings("h1").text("SIGN UP");
        $(this).parent().css("opacity", "1");
        $(this).parent().siblings().css("opacity", ".6");
        first_input.removeClass("first-input-block").addClass("signup-input-block");
        hidden_input.css({
            "opacity": "1",
            "display": "block"
        });
        signin_btn.text("Sign up");
    });


    //----------- sign in ---------------------
    signin.on("click", function (e) {
        e.preventDefault();
        $(this).parent().parent().siblings("h1").text("SIGN IN");
        $(this).parent().css("opacity", "1");
        $(this).parent().siblings().css("opacity", ".6");
        first_input.addClass("first-input-block")
            .removeClass("signup-input-block");
        hidden_input.css({
            "opacity": "0",
            "display": "none"
        });
        signin_btn.text("Sign in");
    });

    //----------- reset ---------------------
    reset.on("click", function (e) {
        e.preventDefault();
        $(this).parent().parent().siblings("form")
            .find(".input-block").find(".input").val("");
    })
});