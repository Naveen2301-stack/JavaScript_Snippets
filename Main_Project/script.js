function fun1() {
    a = document.getElementById('num1').value;
    fact = 1;
    if(a=='')
    {
    document.getElementById('mess').innerHTML="please enter the number"
    return false;
    }
    else{
    for ( var i=1; i<=a; i++)
    {
    fact = fact * i;
    }
    document.getElementById('mess').innerHTML="the factorial is :" + fact;
    return false;
    }
    }