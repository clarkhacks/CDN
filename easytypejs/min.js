var amount=0,index=0,easyTyper=function a(){var b=easyText[index];amount<b.length?setTimeout(function(){easyTarget.innerHTML+=b[amount],amount++,a()},Math.floor(100*Math.random(10))):(amount=0,index=index+1<easyText.length?index+1:0,setTimeout(function(){easyTarget.innerHTML="",a()},1500))};
