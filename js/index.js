var fontSize = 20;

$('#fontPlus').click(function (e) {
    ++fontSize;
    $('#textarea, #result').css({
        "font-size": fontSize + 'px'
    });
    $('#fontValue').text(fontSize);
});

$('#fontMinus').click(function (e) {
    --fontSize;
    $('#textarea, #result').css({
        "font-size": fontSize + 'px'
    });
    $('#fontValue').text(fontSize);
});

$('#fontValue').keyup(function (e) {
    fontSize = $(this).text();
    $('#textarea, #result').css({
        "font-size": fontSize + 'px'
    });
})

$('#list').click(function (e) {
    $('#list ul').toggleClass('w3-hide');
});

$('#list ul li').click(function () {
    let font = $(this).text();
    $('#fontName').text(font);
    $('#textarea').css({
        "font-family": font
    });
});

$('#list1').click(function (e) {
    $('#list1 ul').toggleClass('w3-hide');
});

$('#theme,#themeBtn,#theme i').click(function (e) {
    $('#theme i').toggleClass('fa-toggle-on');
    $('body, .w3-sidebar, #textarea').toggleClass('dark');
});

let input = false;
$('#inputbox').click(function (e) {
    $('#inputbox i').toggleClass('fa-toggle-on');
    if(!input){
        $('#textarea').css({'height':'calc(100vh - 255px)'});
        $('#input').css({'display':'block','height':'150px'});
        input = true;
    }else{
        $('#textarea').css({'height':'calc(100vh - 105px)'});
        $('#input').css({'display':'none','height':'0px'});
        input = false;
    }
});

$('.fa-bars').click(function (e) {
    $('#sidebar').toggleClass('w3-show w3-mobile');
});

$("div[title='Justify Right']").click(function (e) {
    $('#textarea').css({
        "text-align": "right"
    })
});

$("div[title='Justify Center']").click(function (e) {
    $('#textarea').css({
        "text-align": "center"
    })
});

$("div[title='Justify Left']").click(function (e) {
    $('#textarea').css({
        "text-align": "left"
    })
});

$('#download').click(function (e) {   
    var to_compile = {
        "LanguageChoice": languages[$('#langName').text().trim()],
        "Program": $("#textarea").val(),
        "Input": $("#input").val(),
        "CompilerArgs": ""
    };
    $.ajax({
        url: "https://rextester.com/rundotnet/api",
        type: "POST",
        data: to_compile
    }).done(function (data) {
        mydata = JSON.parse(JSON.stringify(data));
    })
    setTimeout(()=>{
    $('#downprev').toggleClass('w3-hide');
    $('#finalcode').text($('#textarea').val());
    $('#Output').text(mydata['Result'] || mydata['Error']);
    },1000);
});