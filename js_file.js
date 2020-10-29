
    function manage(t) {
    if(t.id==="txt")
    {
        var bt = document.getElementById('btSubmit');
        if (t.value != '') {
            bt.disabled = false;
        }
        else {
            bt.disabled = true;
        }
    }
    
      if(t.id==="txt4")
{
        var bt = document.getElementById('btSubmit4');
        if (t.value != '') {
            bt.disabled = false;
        }
        else {
            bt.disabled = true;
        }
    } 
}
    
    
  