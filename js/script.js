// import '../font-awesome-4.7.0/css/font-awesome.min.css';
//登陆(按钮鼠标移入移出)
$('.iiii').mouseenter(function(){
    $('.iiii').css('opacity','1')
})
$('.iiii').mouseleave(function(){
    $('.iiii').css('opacity','0')
})

// ----------------------每次点击登陆都要执行-----------------------------
function ld(){
    log.style.display= 'block';
    back.style.display= 'block';

    //    每次关闭窗口都要把除了第一个登陆窗口以外的窗口隐藏-------------
    ldg.style.display='block';
    ldg2.style.display='none'
    ldg3.style.display='none'

    pw.style.display='none'
    //默认显示(手机号码登陆界面的短信登陆)
    sm.style.display='block'

    enroll.style.display='none'
    //默认显示txt登陆
    txt.innerHTML='登陆'


}
btn.onclick=function(){
   ld()
}
btn1.onclick=function(){
    ld()
}


// -----------------------------关闭登陆窗口------
tld.onclick=function(){
    log.style.display= 'none'
    back.style.display= 'none';

   ldg2.style.display= 'noen';
    
}

zld.onclick=function(){
    ldg.style.display='none';
    ldg2.style.display= 'block';
}


// 返回扫描登陆
fld.onclick=function(){
    ldg2.style.display='none';
    ldg.style.display='block';
}

//=-------------------------- 手机号码登陆--------------------
sld.onclick=function(){
    ldg3.style.display='block'
    ldg2.style.display='none'

    var txta=sld.innerHTML;
    sld.innerHTML=txt.innerHTML;
    txt.innerHTML=txta
}

// 短信登陆和密码登录切换
pwt.onclick=function(){
    pwt.style.display='none'
    pwt2.style.display='block'

    sm.style.display='none'
    pw.style.display='block'
}

pwt2.onclick=function(){
    pwt2.style.display='none'
    pwt.style.display='block'

    pw.style.display='none'
    sm.style.display='block'
}


// 其他登陆方式
ldgld.onclick=function(){
    ldg3.style.display='none'
    ldg2.style.display='block'
    txt.innerHTML='登陆'
}
// 手机登陆界面去注册
ldgel.onclick=function(){
    ldg3.style.display='none'
    enroll.style.display='block'
    txt.innerHTML='注册'

}



// --------注册--------------------
erl.onclick=function(){
    ldg2.style.display='none'
    enroll.style.display='block'
    txt.innerHTML='注册'


}




//---------------------------------- 轮播(js)-------------------------------------
var num1=0;
var tm;


// 点击事件执行的切换图片代码
function wdh(){
    $('#main_ul li').eq(num1).show()
    $('#main_ul li').eq(num1).siblings().hide()
    $('.mainback').css({'background':'url(./img/s'+num1+'.jpg)','background-size':'20000px'});
    $('#listd li').eq(num1).addClass('current')
    $('#listd li').eq(num1).siblings().removeClass('current')
}

//自动执行代码的函数封装
function ydh(){
    num1++;
    if(num1==8)num1=0;
     $('#main_ul li').eq(num1).fadeIn(250)
     $('#main_ul li').eq(num1).siblings().fadeOut(250)

     $('.mainback').css({'background':'url(./img/s'+num1+'.jpg)','background-size':'20000px'});
     
    //  $('#listd li').eq(0).addClass('current')
    //  $('#listd li').eq(0).siblings().removeClass('current')
     $('#listd li').eq(num1).addClass('current')
     $('#listd li').eq(num1).siblings().removeClass('current')  
}


tm=setInterval(function(){
    //  num1++;
    // if(num1==8)num1=0;
    //  $('#main_ul li').eq(num1).fadeIn(250)
    //  $('#main_ul li').eq(num1).siblings().fadeOut(250)

    //  $('.mainback').css({'background':'url(./img/s'+num1+'.jpg)','background-size':'20000px'});
     
    // //  $('#listd li').eq(0).addClass('current')
    // //  $('#listd li').eq(0).siblings().removeClass('current')
    //  $('#listd li').eq(num1).addClass('current')
    //  $('#listd li').eq(num1).siblings().removeClass('current')
    ydh()
    
    },3000)
// 鼠标移入移出
    $('#mainc').hover(function(){
        clearInterval(tm)

    },function(){

        tm=setInterval(function(){
        //     num1++;
        //    if(num1==8)num1=0;
        //     $('#main_ul li').eq(num1).fadeIn(250)
        //     $('#main_ul li').eq(num1).siblings().fadeOut(250)
        //     $('.mainback').css({'background':'url(./img/s'+num1+'.jpg)','background-size':'20000px'});
        //     $('#listd li').eq(num1).addClass('current')
        //     $('#listd li').eq(num1).siblings().removeClass('current')
        ydh()
        },3000)
})



// 点击左边
$('.mainleft').click(function(){
    
    num1--;
    console.log(num1)
    if(num1==-1)
    {num1=7}
    wdh()
    // $('#main_ul li').eq(num1).fadeIn();
    // $('#main_ul li').eq(num1).siblings().fadeOut()
    // $('#main_ul li').eq(num1).show()
    // $('#main_ul li').eq(num1).siblings().hide()
    // $('.mainback').css({'background':'url(./img/s'+num1+'.jpg)','background-size':'20000px'});
    // $('#listd li').eq(num1).addClass('current')
    // $('#listd li').eq(num1).siblings().removeClass('current')
})
// 右边
$('.mainright').click(function(){
    
    num1++;
   if(num1==8)num1=0
    console.log(num1)
    wdh()
    // $('#main_ul li').eq(num1).fadeIn();
    // $('#main_ul li').eq(num1).siblings().fadeOut()
    // $('#main_ul li').eq(num1).show()
    // $('#main_ul li').eq(num1).siblings().hide()
    // $('.mainback').css({'background':'url(./img/s'+num1+'.jpg)','background-size':'20000px'});
    // $('#listd li').eq(num1).addClass('current')
    // $('#listd li').eq(num1).siblings().removeClass('current')
})

// 点击小圆点
$('#listd li').click(function(){
    num1=$(this).index()
    wdh()
    // $('#main_ul li').eq(num1).show()
    // $('#main_ul li').eq(num1).siblings().hide()
    // $('.mainback').css({'background':'url(./img/s'+num1+'.jpg)','background-size':'20000px'});
    // $('#listd li').eq(num1).addClass('current')
    // $('#listd li').eq(num1).siblings().removeClass('current')
})

//--------------音乐列表----------
$('.list_pla_sp').mouseenter(function(){
    $('.playls').css('display','inline-block')
    // .slideUp()
})
// $('.list_pla').mouseleave(function(){
//     $('.playls').css('display','none')
   
// })

$('.list_pla_sp>i').click(function(){
    $('.list_pla_sp>i').css('display','none')
    $('.list_pla_sp>b').css('display','inline-block')


 
    

   
})
$('.list_pla_sp>b').click(function(){
    $('.list_pla_sp>b').css('display','none')
    $('.list_pla_sp>i').css('display','inline-block')
    $('.playls').css('display','none')
})



// ----------音乐播放------------------


//把歌放进数组




 

var data=[
    {
        plaid:'playls1', name:'溯 (Reverse)',zuoz:'CORSAK胡梦周',
         url:'Music/su.m4a',url2:'img/bofq.jpg',hans:'aaa()'
         },
    {
    plaid:'playls2', name:'天外来物',zuoz:'薛之谦',
     url:'Music/twlw.m4a',url2:'img/bofq.jpg',hans:'aaa1()'
     },
]

// $('#addsongs').click(function(){
    for(var i=0;i<data.length;i++){
        // ${list[i].src}
        var tag=$(`<li "></li>`);
        tag.html(`
        <audio id="${data[i].plaid}"
        src="${data[i].url}" ontimeupdate="${data[i].hans}"> 
      </audio>
        <div class="listwc_c">
         <div class="listwc_clf">${data[i].name}</div>
         <div class="listwc_crilog">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
         <div class="listwc_cri">
         <div class="listwc_criri">
                <a href="">${data[i].zuoz}</a>
                <span>00:00</span>
                <span></span>
            </div>
         </div>
        </div>
   `)
        $('.listwc_ul').append(tag)
    }
    $('#dellist').click(function(){
            $('.listwc_ul li').remove()
        
    })


// })

var playls1=document.getElementById('playls1')
var playls2=document.getElementById('playls2')
// var playls3=document.getElementById('playls3')
var pla_arr=[playls1,playls2]
var index=0;
       


































//播放按钮切换


// 开始音乐
var timer=0;
    var timer1;
    var tim;

function plamu(){

    $('#pla1').click(function(){
        $('#pla1').css('display','none')
        $('#pla').css('display','inline-block')
        pla_arr[index].play();
        hct()
})

function hct(){
    tim=setInterval(function(){
        timer++;
        timer1=timer*2
        $('#sli_bd').css('width',''+timer1+'%')
        if(timer==50){
            clearInterval(tim)
        }
    },1000)
}

    // pla1.onclick=function(){
    //     pla1.style.display='none';
    //     pla.style.display='inline-block';
    //     pla_arr[index].play();
    // }
}

plamu();



//停止

$('#pla').click(function(){
    $('#pla').css('display','none')
    $('#pla1').css('display','inline-block')
    pla_arr[index].pause()
    clearInterval(tim)

})

// pla.onclick=function(){
//     pla.style.display='none';
//     pla1.style.display='inline-block';
//     pla_arr[index].pause()//音乐停止
//     // pla_arr[length].pause();  
// }



function pla_(){
    $('#pla1').css('display','none')
    $('#pla').css('display','inline-block')
    pla_arr[index].play();
}


$('#pla_i').click(function(){
    pla_()
})
$('#pla_i2').click(function(){
    pla_()
})


$('#pla_span').click(function(){
    pla_()
})

$('#pla_span2').click(function(){
    pla_()
})












// 上一首
$('#abo').click(function(){
    $('#pla1').css('display','none')
    $('#pla').css('display','inline-block')
    pla_arr[index].pause();
    index--;
        if(index==-1){
            index= pla_arr.length-1;
        }
        pla_arr[index].play();
})



// abo.onclick=function(){
//     pla1.style.display='none'
//     pla.style.display='inline-block';
//     pla_arr[index].pause();
//     index--;
//     if(index==-1){
//         index= pla_arr.length-1;
//     }
//     pla_arr[index].play();

// }









//下一首
$('#und').click(function(){
    $('#pla1').css('display','none')
    $('#pla').css('display','inline-block')
    pla_arr[index].pause();
    index++;
        if(index>pla_arr.length-1){
            index= 0;
        }
        pla_arr[index].play();
})

// und.onclick=function(){
//     pla1.style.display='none'
//     pla.style.display='inline-block';
//     pla_arr[index].pause();
//     index++;
//     if(index>pla_arr.length-1){
//         index= 0;
//     }
//     pla_arr[index].play();    
// }






//循环随机单曲切换

$('#plaa5').click(function(){
    $('#plaa5').css('display','none')
    $('#plaa51').css('display','inline-block')
    

    

})
$('#plaa51').click(function(){
    $('#plaa51').css('display','none')
    $('#plaa52').css('display','inline-block')

})

$('#plaa52').click(function(){
    $('#plaa52').css('display','none')
    $('#plaa5').css('display','inline-block')

})








  

//进度条
//-------------进度条----------------------

function aaa(){
    var aaaa=playls1.duration
    var bbbb=playls1.currentTime
    // Math.ceil() 向上取值
    var m = parseInt(bbbb/60);
    var s = parseInt(bbbb%60);
    var t = +m+":"+s;
    console.log(aaaa)
    // console.log(bbbb)
   
    document.getElementById("a_start").innerText=t;
    var m1 = parseInt(aaaa/60);
    var s1 = parseInt(aaaa%60);
    var t1 = +m1+":"+s1;
    document.getElementById("a_end").innerText=t1;
    var xqq=bbbb/aaaa*450
    var xqq1=bbbb/aaaa*100

    $('#sli_d').css('left',''+xqq+'px')//进度条
    $('#sli_b').css('width',''+xqq1+'%')//小球球

}


function aaa1(){
    var aaaa=playls2.duration
    var bbbb=playls2.currentTime
    // Math.ceil() 向上取值
    var m = parseInt(bbbb/60);
    var s = parseInt(bbbb%60);
    var t =   m+":"+s;
    document.getElementById("a_start").innerText=t;
    var m1 = parseInt(aaaa/60);
    var s1 = parseInt(aaaa%60);
    var t1 = "0"+m1+":"+s1;
    document.getElementById("a_end").innerText=t1;
    var xqq=bbbb/aaaa*450
    var xqq1=bbbb/aaaa*100
 
    $('#sli_d').css('left',''+xqq+'px')//进度条
    $('#sli_b').css('width',''+xqq1+'%')//小球球
 
}


// function timeChange(num111) {
//     var t;
//     if(num111) {
//         t="0"+num111;
//     } else {
//         t=num111;
//     }
//     return t;
// }
// timeChange(num111)




//声音
$('#plaa3').click(function(){
    $('#rng').css('display','inline-block')
    $('#plaa3').css('display','none')
    $('#plaa33').css('display','inline-block')
})

$('#plaa33').click(function(){
    $('#rng').css('display','none')
    $('#plaa3').css('display','inline-block')
    $('#plaa33').css('display','none')
})

//声音大小
var voice=document.getElementById('voice')
voice.onclick=function(){
    pla_arr[index].volume=voice.value
}



//列表打开关闭
$('#plalist').click(function(){
    $('#plalist').css('display','none')
    $('#plalist1').css('display','inline-block')
    $('.list_win').css('display','inline-block')

})
$('#plalist1').click(function(){
    $('#plalist1').css('display','none')
    $('#plalist').css('display','inline-block')
    $('.list_win').css('display','none')
})


$('#tlistwr').click(function(){
    $('.list_win').css('display','none')
})




//歌词列表()
$('.listwc_ul li').mouseenter(function(){
    var t=$(this).index()
    $('.listwc_crilog').eq(t).show() 
})


$('.listwc_ul li').mouseleave(function(){
    $('.listwc_crilog').hide()
  })







  $(window).scroll(function(){

    if($(window).scrollTop()>200){
        $('.section_ii').css('display','inline-block')
    }else{
        $('.section_ii').css('display','none')
    }


  })

  $('.section_ii').click(function(){
    $('html,body').animate({'scrollTop':'0'})
  })













// 小轮播js
var lf=document.getElementById('section_con_l')
var ri=document.getElementById('section_con_r')
var list=document.getElementById('list')
var num=-1290;
var time;

lf.onclick=function(){
    clearInterval(time)
    time=setInterval(function(){
        num++;

        list.style.transform='translateX('+num+'px)';
       
        if(num==-1290){
            clearInterval(time);
            
        }
        if(num==-645){
            clearInterval(time);
            
        }
        if(num==-0){
            clearInterval(time);
            num=-1290
        }
    }, 1);

}

ri.onclick=function(){
    clearInterval(time)
    time=setInterval(function(){
        num--;
        if(num==-1290){
            clearInterval(time);
            
        }

        list.style.transform='translateX('+num+'px)';
        if(num==-1935){
            clearInterval(time);
           
        }
        if(num==-2580){
            clearInterval(time);
            num=-1290
           
        }
       
       

    }, 1);

}




















// 小轮播鼠标进入移出效果(jquery)
$('#list li div').hover(function(){
    $(this).children().stop().show()
},function(){
    $(this).children().stop().hide()
})







// 飙升榜js
var ddon=document.getElementById('section_main_dd_on')
var divon=document.getElementById('section_main_div')
ddon.onmouseenter=function(){
    divon.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon.onmouseleave=function(){
    divon.removeAttribute('class','section_main_p_on')   
}

var ddon1=document.getElementById('section_main_dd_on1')
var divon1=document.getElementById('section_main_div1')
ddon1.onmouseenter=function(){
    divon1.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon1.onmouseleave=function(){
    divon1.removeAttribute('class','section_main_p_on')   
}

var ddon2=document.getElementById('section_main_dd_on2')
var divon2=document.getElementById('section_main_div2')
ddon2.onmouseenter=function(){
    divon2.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon2.onmouseleave=function(){
    divon2.removeAttribute('class','section_main_p_on')   
}

var ddon3=document.getElementById('section_main_dd_on3')
var divon3=document.getElementById('section_main_div3')

ddon3.onmouseenter=function(){
    divon3.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon3.onmouseleave=function(){
    divon3.removeAttribute('class','section_main_p_on')   
}

var ddon4=document.getElementById('section_main_dd_on4')
var divon4=document.getElementById('section_main_div4')
var dda4=document.getElementById('section_main_dd_a4')
ddon4.onmouseenter=function(){
    divon4.setAttribute('class','section_main_dd_p1 section_main_p_on') 
    dda4.setAttribute('class','section_main_dl_dd_aon')   
}
ddon4.onmouseleave=function(){
    divon4.removeAttribute('class','section_main_p_on')
    dda4.removeAttribute('class')    
}

var ddon5=document.getElementById('section_main_dd_on5')
var divon5=document.getElementById('section_main_div5')
var dda5=document.getElementById('section_main_dd_a5')
ddon5.onmouseenter=function(){
    divon5.setAttribute('class','section_main_dd_p1 section_main_p_on')
    dda5.setAttribute('class','section_main_dl_dd_aon') 
}
ddon5.onmouseleave=function(){
    divon5.removeAttribute('class','section_main_p_on')  
    dda5.removeAttribute('class') 
      
}


var ddon6=document.getElementById('section_main_dd_on6')
var divon6=document.getElementById('section_main_div6')
ddon6.onmouseenter=function(){
    divon6.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon6.onmouseleave=function(){
    divon6.removeAttribute('class','section_main_p_on')   
}

var ddon7=document.getElementById('section_main_dd_on7')
var divon7=document.getElementById('section_main_div7')
ddon7.onmouseenter=function(){
    divon7.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon7.onmouseleave=function(){
    divon7.removeAttribute('class','section_main_p_on')   
}

var ddon8=document.getElementById('section_main_dd_on8')
var divon8=document.getElementById('section_main_div8')
var dda8=document.getElementById('section_main_dd_a8')
ddon8.onmouseenter=function(){
    divon8.setAttribute('class','section_main_dd_p1 section_main_p_on')  
    dda8.setAttribute('class','section_main_dl_dd_aon')  
}
ddon8.onmouseleave=function(){
    divon8.removeAttribute('class','section_main_p_on') 
    dda8.removeAttribute('class')   
}

var ddon9=document.getElementById('section_main_dd_on9')
var divon9=document.getElementById('section_main_div9')
ddon9.onmouseenter=function(){
    divon9.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon9.onmouseleave=function(){
    divon9.removeAttribute('class','section_main_p_on')   
}


// 新歌榜js
var ddon11=document.getElementById('section_main_dd_on11')
var divon11=document.getElementById('section_main_div11')
ddon11.onmouseenter=function(){
    divon11.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon11.onmouseleave=function(){
    divon11.removeAttribute('class','section_main_p_on')   
}

var ddon12=document.getElementById('section_main_dd_on12')
var divon12=document.getElementById('section_main_div12')
ddon12.onmouseenter=function(){
    divon12.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon12.onmouseleave=function(){
    divon12.removeAttribute('class','section_main_p_on')   
}

var ddon13=document.getElementById('section_main_dd_on13')
var divon13=document.getElementById('section_main_div13')
ddon13.onmouseenter=function(){
    divon13.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon13.onmouseleave=function(){
    divon13.removeAttribute('class','section_main_p_on')   
}

var ddon14=document.getElementById('section_main_dd_on14')
var divon14=document.getElementById('section_main_div14')
var dda14=document.getElementById('section_main_dd_a14')
ddon14.onmouseenter=function(){
    divon14.setAttribute('class','section_main_dd_p1 section_main_p_on') 
    dda14.setAttribute('class','section_main_dl_dd_aon')    
}
ddon14.onmouseleave=function(){
    divon14.removeAttribute('class','section_main_p_on')
    dda14.removeAttribute('class')    
}

var ddon15=document.getElementById('section_main_dd_on15')
var divon15=document.getElementById('section_main_div15')
ddon15.onmouseenter=function(){
    divon15.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon15.onmouseleave=function(){
    divon15.removeAttribute('class','section_main_p_on')   
}

var ddon16=document.getElementById('section_main_dd_on16')
var divon16=document.getElementById('section_main_div16')
ddon16.onmouseenter=function(){
    divon16.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon16.onmouseleave=function(){
    divon16.removeAttribute('class','section_main_p_on')   
}

var ddon17=document.getElementById('section_main_dd_on17')
var divon17=document.getElementById('section_main_div17')
ddon17.onmouseenter=function(){
    divon17.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon17.onmouseleave=function(){
    divon17.removeAttribute('class','section_main_p_on')   
}

var ddon18=document.getElementById('section_main_dd_on18')
var divon18=document.getElementById('section_main_div18')
ddon18.onmouseenter=function(){
    divon18.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon18.onmouseleave=function(){
    divon18.removeAttribute('class','section_main_p_on')   
}

var ddon19=document.getElementById('section_main_dd_on19')
var divon19=document.getElementById('section_main_div19')
ddon19.onmouseenter=function(){
    divon19.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon19.onmouseleave=function(){
    divon19.removeAttribute('class','section_main_p_on')   
}

var ddon20=document.getElementById('section_main_dd_on20')
var divon20=document.getElementById('section_main_div20')
ddon20.onmouseenter=function(){
    divon20.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon20.onmouseleave=function(){
    divon20.removeAttribute('class','section_main_p_on')   
}




// 原创榜js
var ddon21=document.getElementById('section_main_dd_on21')
var divon21=document.getElementById('section_main_div21')
ddon21.onmouseenter=function(){
    divon21.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon21.onmouseleave=function(){
    divon21.removeAttribute('class','section_main_p_on')   
}

var ddon22=document.getElementById('section_main_dd_on22')
var divon22=document.getElementById('section_main_div22')
ddon22.onmouseenter=function(){
    divon22.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon22.onmouseleave=function(){
    divon22.removeAttribute('class','section_main_p_on')   
}

var ddon23=document.getElementById('section_main_dd_on23')
var divon23=document.getElementById('section_main_div23')
ddon23.onmouseenter=function(){
    divon23.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon23.onmouseleave=function(){
    divon23.removeAttribute('class','section_main_p_on')   
}

var ddon24=document.getElementById('section_main_dd_on24')
var divon24=document.getElementById('section_main_div24')

ddon24.onmouseenter=function(){
    divon24.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon24.onmouseleave=function(){
    divon24.removeAttribute('class','section_main_p_on')   
}

var ddon25=document.getElementById('section_main_dd_on25')
var divon25=document.getElementById('section_main_div25')
var dda25=document.getElementById('section_main_dd_a25')
ddon25.onmouseenter=function(){
    divon25.setAttribute('class','section_main_dd_p1 section_main_p_on') 
    dda25.setAttribute('class','section_main_dl_dd_aon')    
}
ddon25.onmouseleave=function(){
    divon25.removeAttribute('class','section_main_p_on') 
    dda25.removeAttribute('class')  
}

var ddon26=document.getElementById('section_main_dd_on26')
var divon26=document.getElementById('section_main_div26')
ddon26.onmouseenter=function(){
    divon26.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon26.onmouseleave=function(){
    divon26.removeAttribute('class','section_main_p_on')   
}

var ddon27=document.getElementById('section_main_dd_on27')
var divon27=document.getElementById('section_main_div27')
ddon27.onmouseenter=function(){
    divon27.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon27.onmouseleave=function(){
    divon27.removeAttribute('class','section_main_p_on')   
}

var ddon28=document.getElementById('section_main_dd_on28')
var divon28=document.getElementById('section_main_div28')
ddon28.onmouseenter=function(){
    divon28.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon28.onmouseleave=function(){
    divon28.removeAttribute('class','section_main_p_on')   
}

var ddon29=document.getElementById('section_main_dd_on29')
var divon29=document.getElementById('section_main_div29')
ddon29.onmouseenter=function(){
    divon29.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon29.onmouseleave=function(){
    divon29.removeAttribute('class','section_main_p_on')   
}

var ddon30=document.getElementById('section_main_dd_on30')
var divon30=document.getElementById('section_main_div30')
ddon30.onmouseenter=function(){
    divon30.setAttribute('class','section_main_dd_p1 section_main_p_on')   
}
ddon30.onmouseleave=function(){
    divon30.removeAttribute('class','section_main_p_on')   
}

















