
var zk =document.getElementById('main_con_unfold')
var sh =document.getElementById('main_con_unfold1')
var gc =document.getElementById('main_con_ri_c2')
zk.onclick=function(){
  gc.removeAttribute('class')
  sh.removeAttribute('class')
  zk.setAttribute('class','main_con_unfold')
}
sh.onclick=function(){
    gc.setAttribute('class','main_con_ri_c2_on')
    zk.removeAttribute('class')
    sh.setAttribute('class','main_con_unfold1_c')
}


//发表评论
   //发表评论
   var btn1 = document.getElementById('btn1')
   var txt = document.getElementById('txt')
   var box = document.getElementById('box')
   btn1.onclick=function(){
       var val=txt.value;
       txt.value=''
       var tag=document.createElement('li')
       tag.innerHTML=`<div class="comments_ul_div">
                                               <img src="../img/santx1.jpg" alt="">
                                               <div class="comments_ul_h">
                                                   <div>
                                                       <a href="">JC周666</a>
                                                       <span class="comments_ul_sp"><img src="../img/tub1.png" alt=""></span>
                                                       <span class="comments_ul_sp1"><img src="../img/tub2.png" alt=""></span>
                                                       &nbsp;:&nbsp;
                                                       <p class="comments_ul_pl">`+val+`</p>
                                                   </div>
   
                                               </div>
                                               <br>
                                               <div class="comments_ul_b">
                                                   <span class="comments_ul_b_sp">昨天00:10</span>
                                                   <p class="comments_ul_b_p">
                                                       <span class="comments_ul_b_sp2"><b></b> (888)</span>
                                                       <span>&nbsp;|&nbsp;</span>
                                                       <span class="comments_ul_b_sp1">回复</span>
                                                   </p>
   
   
   
   
   
                                               </div>
   
   
                                           </div>`
           box.appendChild(tag)   
                           
   }
   
