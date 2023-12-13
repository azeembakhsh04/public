var headImg = 'https://azeembakhsh04.github.io/public/images/azeemtech.jpg';

headTxt = 'Azeem Tech';
var bodyTxt = 'The project designed and made by <b> Azeem Bakhsh </b>. Please support developer on social media platforms.'

var positiveBtnLink = 'https://youtube.com/@programmingtasks'

var body = document.querySelector('body');

  body.insertAdjacentHTML("afterbegin",
  `
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">

  <style>

  @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

   .dialog_container {
      font-family: 'Itim', cursive;
      position: fixed;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgb(0, 0, 0, 0.5);
      margin: 0;
      z-index: 20000000000;
      
      & .dialog {
         position: relative;
         width: 20em;
         height auto;
         background-color: white;
         padding: 0;
         opacity: 0;
         transition: all 0.3s linear;
         transform: tranlateY(-100px);
         animation-name: myAmin;
         animation-duration: 0.8s;
         opacity: 0;
         & .dialog_head { 
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            padding: 1em 0.5em;
            color: white;
            background-color: #00A675;
           & img {
              width: 35px;
              height: 35px;
              background: white;
              border-radius: 10px;
              padding: 3px;
           }
           & h1 {
              margin: 0;
              font-size: 25px;
            }
           & span {
              position: relative;
              right: 5px;
              top: -5px;
              font-size: 25px;
              color: red;
              &:hover{
                 color: white;
              }
           }
        }
        & .dialog_body {
           padding: 0.2em 0.7em ;
           & p {
              line-height: 25px;
           }
        }
           .social-icons {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              font-size: 20px;
              text-aligin: ;
              padding: 10px 0;
              border-top: 1px solid gray;
              & a {
                 display: inline-flex;
                 justify-content: center;
                 align-items: center;
                 background-color: #00A675;
                 border-radius: 5px;
                 width: 30px;
                 height: 30px;
                 transform: all 0.2s erase;
                 pointer: cursor;
                 &:hover {
                    background-color: gray;
                 }
              }
              & h4 {
                 margin: 0;
              }
              & a i {
                  color: white;
              }
           }
        & .dialog_footer {
           display: flex;
           justify-content: flex-end;
           align-items: center;
           border-top: 1px solid gray;
           gap: 20px;
           padding: 0.5em 1em;
           & button {
              width: 70px;
              height: 30px;
              border-radius: 5px;
              transition: all 0.3s linear;
           }
           & button:nth-child(1) {
              background-color: transparent;
              color:#007F59;
              border: 2px solid #007F59;
           }
           & a button:nth-child(1){
              background-color: #007F59;
              color: white;
              border: none;
           }
           & button:hover {
              outline: 2px solid #007F59;
              outline-offset: 1px;
           }
        }
      }
      
   }
   @keyframes  myAmin {
      from {top: -100px; opacity: 0;}
      to{ top: 0px; opacity: 1.0;}
   }
   .active .dialog {
       opacity: 1.0;
       transform: translateY(0vh);
   }
   
</style>
   <div class='dialog_container active'>
      <div class="dialog">
       <div class="dialog_head">
          <img src=${headImg} alt="Programming Tasks" class="logoImg" />
          <h1> ${headTxt}</h1>
       </div>
       <div class="dialog_body">
          <p>${bodyTxt}</p>
       </div>

          <div class="social-icons">
                 <h4> Reach us: </h4>
            <a href="https://www.youtube.com/@azeemtech" target="_blink">
               <i class="bi-youtube"></i>
            </a>
            <a href="https://www.facebook.com/azeemtech.page" target="_blink">
               <i class="bi-facebook"></i>
            </a>
            <a href="https://chat.whatsapp.com/HKQlptSnmPILRy5M1GnRIN" target="_blink">
               <i class="bi-whatsapp"></i>
            </a>
            <a href="https://t.me/azeem_tech" target="_blink">
               <i class="bi-telegram"></i>
            </a>
          </div>
          
       <div class="dialog_footer">
          <button class='close-btn'> Close </button> 
          <!-- <a href=${positiveBtnLink} target="_blink">
             <button> Visit </button> -->
          </a>
       </div>
     </div>
   </div>
  `)
  
        console.log('Responce status true')
        var close = document.querySelector('.close-btn');
        var dialog = document.querySelector('.dialog_container');
        
        close.addEventListener('click', function(){
           dialog.style.display = 'none';
        });
       
 

