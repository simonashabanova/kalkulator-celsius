    var a=document.querySelector(".n1");
    var b=document.querySelector(".n2");
    var op=document.querySelector('#operators');
    var res=document.querySelector('.res');
    var calc=document.querySelector('.calc');

    calc.addEventListener('click', function(){
        switch(op.value){
            case '+':
                res.value = parseInt(a.value) + parseInt(b.value);
                break;
            case '-':
                res.value = parseInt(a.value) - parseInt(b.value);
                break;
            case '/':
                res.value = parseInt(a.value) / parseInt(b.value);
                break;
            case '*':
                res.value = parseInt(a.value) * parseInt(b.value);
                break;
        }
    });

    //

    var t = document.querySelector('.t');
    var func = document.querySelector('.func');
    var conv = document.querySelector('.conv');
    var cv = document.querySelector('.cv');

    conv.addEventListener('click', function(){
        if(func.value == 'f2c'){
            cv.value = (parseInt(t.value) - 32) * 5/9;
        }else if(func.value == 'c2f'){
            cv.value = parseInt(t.value) * 9/5 + 32;
        }
    });
