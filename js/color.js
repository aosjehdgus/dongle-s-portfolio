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

  NightDaySetColor : function(color){
    document.querySelector('#night_day_btn').style.color = color;
  }

}

var nav ={

  NavGridSetBackgroundColor : function(color){
    document.querySelector('.nav_grid').style.backgroundColor = color;
  }

}

function nightdayhandler(self){

      
    if(self.value === 'night'){
// nigth 모드 일때
      Body.SetBackgroundColor('#0D1117');
      Body.SetColor('white');

      btn.NightDaySetBackgroundColor('white');
      btn.NightDaySetColor('#282C34');
      nav.NavGridSetBackgroundColor("#161B22");

      

      
      self.value = 'day';

      Links.SetColor('#F6F0FC')

      }

    else {
// day 모드 일때

      Body.SetColor('black');
      Body.SetBackgroundColor('#F4F4F4');
      btn.NightDaySetBackgroundColor('#282C34');
      btn.NightDaySetColor('white');
      nav.NavGridSetBackgroundColor('#b5c7d3');

      self.value = 'night';

      Links.SetColor('#595959')
      

    }

    }
