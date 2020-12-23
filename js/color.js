// Body 라고 하는 변수에 객체를 담는다.
var Body = {
// 이 객체의 property 로 setColor로 지정한다.
  SetColor: function(color){
      // document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
  SetBackgroundColor: function(color){
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('background-color', color);
    }
  }
// jQuery 를 이용하는 방법

var Links = {

    SetColor : function(color){

      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while(i < alist.length){
      //
      //    alist[i].style.color = color;
      //    alist[1].style.color = color2;
      //
      //    i = i + 1;
      //  }
// 웹 페이지의 모든 a tag를 jQuery 로 제어하겠다.
      $('a').css('color', color);

    }
}

var btn ={

  NightDaySetBackgroundColor : function(color){
    document.querySelector('#night_day_btn').style.backgroundColor = color;
  },

  LoginSetBackgroundColor : function(color){
    document.querySelector('#login_btn').style.backgroundColor = color;
  },

  NightDaySetColor : function(color){
    document.querySelector('#night_day_btn').style.color = color;
  },

  LogInSetColor : function(color){
    document.querySelector('#login_btn').style.color = color;
  },

  LogInBorderSetColor : function(color){
    document.querySelector('#login_btn').style.borderColor = color;
  }


}

function nightdayhandler(self){

    var target = document.querySelector('body');
    var target1 = document.querySelector('#night_day_btn');
    var target2 = document.querySelector('#login_btn');
    var target3 = document.querySelector('#search_area');
    var target4 = document.querySelector('nav');
    var target5 = document.querySelector('#main_title-2');

    if(self.value === 'night'){
// nigth 모드 일때
      Body.SetBackgroundColor('#0D1117');
      Body.SetColor('white');

      btn.NightDaySetBackgroundColor('white');
      btn.LoginSetBackgroundColor('#004680');
      btn.NightDaySetColor('#282C34');
      btn.LogInSetColor('white');
      btn.LogInBorderSetColor('#004680');

      target3.style.backgroundColor = "black";
      target4.style.backgroundColor = "#161B22";

      self.value = 'day';

      Links.SetColor('#F6F0FC')

      }

    else {
// day 모드 일때

      Body.SetColor('black');
      Body.SetBackgroundColor('#F4F4F4');

      btn.NightDaySetBackgroundColor('#282C34');
      btn.LoginSetBackgroundColor('#6587C6');
      btn.NightDaySetColor('white');
      btn.LogInSetColor('white');
      btn.LogInBorderSetColor('#6587C6');

      target3.style.backgroundColor  = 'white';
      target4.style.backgroundColor = "#f4f4f4";
      target5.style.color = "#6587C6";



      self.value = 'night';

      Links.SetColor('#939597')
      target5.style.color = "#6587C6";

    }

    }
