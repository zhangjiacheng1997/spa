window.onload = function(){
  var width = document.getElementById('width'),
      height = document.getElementById('height'),
      long = document.getElementById('long'),
      area = document.getElementById('area'),
      math = document.getElementById('math');

  var Flong = function(w,h){
    var s = Number(w)+Number(h);
    return s*2;
  }
  
  var Farea = function(w,h){
    return w*h;
  }

  math.onclick = function(){
    
    long.value = Flong(width.value,height.value);
    area.value = Farea(width.value,height.value);
    if(width.value == 0 || height.value == 0){
      alert('请输入大于0的整数');
      long.value = '';
      area.value = '';
    }
  
  }

  width.onfocus = function(){
    width.value = '';
  }

  height.onfocus = function(){
    height.value = '';
  }

}
