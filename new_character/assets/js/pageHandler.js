function pageHandle(direction){
    var p = document.querySelector('#pages');
    if(direction === "next"){
    if(p.selected === p.childElementCount - 1){
      p.selected = 0;
    }
    else {
    p.selected++;
    }
    }

    else if(direction === "back")
    p.selected--;
  }