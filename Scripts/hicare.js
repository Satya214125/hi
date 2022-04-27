$(document).ready(function () {
    $('.clients-slick').slick({
        infinite: true,
        autoplay: true,
        speed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.services-slick').slick({
        infinite: true,
        autoplay: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //$('.testislick2').slick({
    //    slidesToShow: 4,
    //    slidesToScroll: 1,
    //    autoplay: true,
    //    autoplaySpeed: 20000,
    //});
    //missedcall();

    $(".feature").find(".btn-readmore").click(function () {
        if ($(this).hasClass("expanded")) {
            $(this).text("Read More");
            $(this).removeClass("expanded");
            $(this).closest(".feature").find(".dv-feature-content").removeClass("expanded").slideUp();
        } else {
            //$(".feature").find(".btn-readmore").text("Read More");
            //$(".feature").find(".btn-readmore").removeClass("expanded");
            //$(".feature").find(".dv-feature-content").removeClass("expanded").slideUp();
            $(this).text("Close");
            $(this).addClass("expanded");
            $(this).closest(".feature").find(".dv-feature-content").addClass("expanded").slideDown();
        }
    });

    $(".missed-content").find(".btn-click").click(function () {

        $(".missed-content").fadeOut();
        $(".missed-form").fadeIn();
        return false;
    });

    $(".missed-form").find(".btnClose").click(function () {

        $(".missed-form").fadeOut();
        $(".missed-content").fadeIn();
        return false;
    });

    $('.txtMobile').keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            // $("#errmsg").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });

    $(".btn-addLead").click(function () {
        debugger
        var currentId = $(this).closest(".dv-lead-form").attr("id");
        var gclid = GetParameterValues('gclid');

        var utm_source = GetParameterValues('utm_source');
        var utm_medium = GetParameterValues('utm_medium');
        var utm_campaign = GetParameterValues('utm_campaign');
        var utm_term = GetParameterValues('utm_term');
        var utm_content = GetParameterValues('utm_content');

        if (validate(currentId)) {

            var txtName = $(this).closest(".dv-lead-form").find(".txtName").val();
            var txtEmail = $(this).closest(".dv-lead-form").find(".txtEmail").val();
            var txtMobile = $(this).closest(".dv-lead-form").find(".txtMobile").val();
            var leadSubSource = (gclid == undefined) ? "By B2B site" : "By Google";
            var lid = (gclid == undefined) ? "" : gclid;
            var d = new Date();
            var Created_On = d.toISOString();
            $(this).prop("disabled", true);
            $(this).text("Please wait...");
            var addLeadData = JSON.stringify({
                "LeadType": "",
                "Salutation": "",
                "FirstName": txtName,
                "LastName": ".",
                "Mobile": txtMobile,
                "AltMobile": "",
                "Email": txtEmail,
                "Company": null,
                "EmployeeCount": 0,
                "Service": "Commercial Service",
                "FlatNo": "",
                "Building": "",
                "Street": "",
                "Locality": "",
                "Landmark": "",
                "City": "",
                "State": "",
                "Pincode": "",
                "Lat": "",
                "Long": "",
                "Priority": 0,
                "Agency": "",
                "Utm_Campaign": utm_campaign,
                "Utm_Source": utm_source,
                "Utm_Sub_Source": "",
                "BHK": "",
                "Status": "",
                "Service_Value": "",
                "PaymentMode": "",
                "PG_Response": "",
                "Remarks": "",
                "Lead_Source": "B2B Website",
                "Lead_Sub_Source": leadSubSource,
                "Gclid": lid,
                "LMSId": "",
                "SFDCId": "",
                "CallCenterId": "",
                "ServiceType": "Pest",
                "Batch_Name": "",
                "Created_On": Created_On,
                "Utm_Medium": utm_medium,
                "Utm_Content": utm_content,
                "Utm_Term": utm_term
            })

            addLead(addLeadData, currentId);
        }
    });

    $('#mapModal').on('shown.bs.modal', function (e) {
        $('#mapModal').find('iframe').height($(window).height() - 90);
    })
});

$(window).bind('scroll', function () {
    //missedcall();
    //if ($('.inner-page-dv-form-container').length > 0) {
    //    innerPageCTA();
    //}
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate(currentId) {
    const cId = $('#' + currentId);
    const name = $(cId).find(".txtName").val();
    const email = $(cId).find(".txtEmail").val();
    const mobile = $(cId).find(".txtMobile").val();
    var result = false;
    var vCount = 0;
    if (name == "") {
        $(cId).find(".txtName").addClass('error');
        vCount++;
    } else {
        $(cId).find(".txtName").removeClass('error');
    }
    if (validateEmail(email)) {
        $(cId).find(".txtEmail").removeClass('error');
    } else {
        $(cId).find(".txtEmail").addClass('error');
        vCount++;
    }
    if (mobile == "" || mobile.length < 10) {
        $(cId).find(".txtMobile").addClass('error');
        vCount++;
    } else {
        $(cId).find(".txtMobile").removeClass('error');
    }
    if (vCount > 0) {
        result = false;
    } else {
        result = true;
    }
    return result;
}

function innerPageCTA() {
    var form = $('.inner-page-dv-form-container').offset();
    var offsetTop = form.top;
    var windowTop = $(window).scrollTop();

    if (windowTop > 510) {
        $('.inner-page-dv-form-container').addClass('fixed');
        $('.dv-inner-page-banner').css('margin-bottom', '125px');
    } else {
        $('.inner-page-dv-form-container').removeClass('fixed');
        $('.dv-inner-page-banner').css('margin-bottom', '10px');
    }
}

function missedcall() {
    var dvFooter = $('.page-footer').offset();
    var offsetTop = dvFooter.top;
    var form = $('.dv-features').offset();
    var formOffsetTop = 1180;
    var windowTop = $(window).scrollTop() + $(window).height() - 71;
    //console.log(windowTop + " : " + offsetTop + " : " + formOffsetTop);
    if (windowTop > offsetTop) {
        $('.dv-missed-call').removeClass('fixed');
    } else {
        if (windowTop > formOffsetTop) {
            //$('.dv-missed-call').addClass('fixed');
        }
        else {
            $('.dv-missed-call').removeClass('fixed');
        }
    }
}

function addLead(addLeadData, currentId) {
    debugger;
    $.ajax({
        type: 'POST',
         url: '/b2b/Business/AddLead',
        //url: '/Business/AddLead',
        contentType: 'application/json; charset=utf-8',
        data: addLeadData,
        dataType: 'json',
        success: function (response) {
            console.log("success: " + response.isSuccess);
            if (response.isSuccess) {
                //$("#" + currentId).hide();
                //$("#" + currentId).next(".dv-thank-you").show();
                $(".dv-lead-form").hide();
                $(".dv-thank-you").show();
            }
        },
        error: function (response) {
            console.log("error: " + response.responseText);
        },
    });
}

function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}