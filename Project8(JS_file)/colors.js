var Link = {
    SetColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i++;
    }
  }
}

var Body = {
  SetColor:function(color){
    document.querySelector('body').style.color = color;
  },
  SetBackGroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
    if(self.value === 'day'){
      Body.SetBackGroundColor('white')
      Body.SetColor('black')
      self.value = 'night';

      Link.SetColor('blue')
    }else{
      Body.SetBackGroundColor('black')
      Body.SetColor('white')
      self.value = 'day';

      Link.SetColor('powderblue')
    }
}
