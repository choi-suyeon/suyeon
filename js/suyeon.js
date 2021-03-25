//페이지필링
$(document).ready(function() {
	$('#pagepiling').pagepiling({
       	direction: /*'Horizontal'*/'vertical',
 		menu: '#menu',
 		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        sectionsColor: ['#e7e7e7', '#e7e7e7', '#264588', '#e7e7e7', '#e7e7e7', '#e7e7e7', '#e7e7e7', '#e7e7e7'],
        navigation: {
            'bulletsColor':'#4c675e',
            /*'tooltips': ['Main', 'Profile', '', 'WEB', '', 'Design', '', 'Contect']*/
        },/*
		afterRender: function(){
			 $('#pp-nav').addClass('custom');
		},*/
		afterLoad: function(anchorLink, index){
			 if(index == 2){
                 $('.skillbar').each(function(){
                    $(this).find('.skillbar-bar').addClass('active');
                 });
			 }else{
                 $('.skillbar').each(function(){
                    $(this).find('.skillbar-bar').removeClass('active');
                 });
             }
        }
    });
});


//메뉴
$(document).ready(function(){
    $('#menu').hide();
    $('.navi').click(function(){
       $('#menu').fadeToggle(300); 
    });
});


//슬라이드
jQuery(document).ready(function(){
    var swiper = new Swiper('.swiper1', {
        observer: true,
        observeParents: true,
        loop:true,
        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

//팝업갤러리
jQuery(document).ready(function(){
    var gallery_num=0;
    $('.focus .container > div').hide();
    $('#section6 ul li').click(function(e){
        e.preventDefault();
        gallery_num=$(this).index();
        $('.focus').fadeIn();
        $('.focus .container >div').each(function(){
            if(gallery_num == $(this).index()) {
                $('.focus .container > div').hide();
                $(this).fadeIn();
            }
        });
    });

        $('.popup_close').click(function(e){
           e.preventDefault();
           $('.focus').hide();
        });    
});

//클립보드 복사
jQuery(document).ready(function(){
    jQuery( '#copy-url1' ).click(
        function() {
            var urlbox = document.getElementById( 'textbox-url1' );
            urlbox.select();
            document.execCommand( 'Copy' );
            alert( '이메일주소가 복사되었습니다!' );
        });
    jQuery( '#copy-url2' ).click(
        function() {
            var urlbox = document.getElementById( 'textbox-url2' );
            urlbox.select();
            document.execCommand( 'Copy' );
            alert( '전화번호가 복사되었습니다!' );
        });
    jQuery( '#copy-url3' ).click(
        function() {
            var urlbox = document.getElementById( 'textbox-url3' );
            urlbox.select();
            document.execCommand( 'Copy' );
            alert( '오픈카톡 주소가 복사되었습니다!' );
        });
});