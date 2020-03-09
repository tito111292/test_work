$(document).ready(function(){

    var inst = "http://instagram.com/";
    var fb="http://facebook.com/";
    var vk="https://vk.com/";


    //обработка звонка
    $('.callback a').click(function(){
        alert('Призыв формы');
    });

    //установка курсора
    $('.social ul li').hover(function(){
        $(this).css('cursor','pointer');
    })
    
    //переадресация
    $('.social ul li.instagramm_click').click(function(){
        $(location).attr('href',inst);
    });

    $('.social ul li.fb_click').click(function(){
        $(location).attr('href',fb);
    });

    $('.social ul li.vk_click').click(function(){
        $(location).attr('href',vk);
    });
});