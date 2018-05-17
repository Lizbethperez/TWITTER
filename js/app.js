
    
    var boton=document.getElementById('btn');

    boton.addEventListener('click',function(){
        //Se toma el Comentario que Ingresa el Usuario en el Text Area 
        var sectionContainerComment=document.getElementById('area-para-cometarios');
        var comment=document.getElementById('comment').value;
        var valueComment=document.createTextNode(comment);
        //Se creara el elemento que contendra el comentario
        var divComment= document.createElement('div');
        divComment.setAttribute('id','containerComment');
        divComment.setAttribute('class','formatContainerComment');
        divComment.appendChild(valueComment);
        sectionContainerComment.appendChild(divComment);
        document.getElementById('comment').value="";
        //Se asignan los comentarios a la Seccion donde se colocaran
    });

    //version  2

    var contador= function(){
        var msg = document.getElementById("comment");//se mandan traer al js el text area del comentario añadido
        var charRest = document.getElementById("CaracteresRestantes");//se manda a traer del html el elemento parrafo creado para colocar el contador de caracteres 
            LimiteCaracteres = 140;//limite maximo de caracteres que se deben permitir 
            charRest.innerHTML = LimiteCaracteres;
            msg.onkeydown = function(){ //se activa cuando el usuario presiona una tecla 
                setTimeout(function(){ //activa el tiempo en el que va a ejecutarse en milisegundos 
                charRest.innerHTML = LimiteCaracteres - msg.value.length;
                var estilo=''; 
                if(msg.value.length >= 130){
                    estilo="alarma";
                } else if(msg.value.length >= 120){
                    estilo="warning";
                } else if(msg.value.length==0){
                    var botonDesHabilitar=document.getElementById('btn');
                    botonDesHabilitar.disabled=true;
                }
                charRest.className = estilo;
            }, 1); 
            };
    }

    contador();
/*
    var contador= function(){
        var msg = document.getElementsByClassName("format-textArea")[0],
            charLeftLabel = "char-left",
            charLeft = document.getElementsByClassName(charLeftLabel)[0],
            maxChar = 140,
            maxCharWarn = 0;
        
            // show characters left at start
            charLeft.innerHTML = maxChar;
            // update while typing
            msg.onkeydown = function(){
                setTimeout(function(){
                charLeft.innerHTML = maxChar - msg.value.length;
                // whether or not to display warning class based on characters left
                var warnLabel = msg.value.length >= maxChar - maxCharWarn ? " warning" : "";
                charLeft.className = charLeftLabel + warnLabel;
            }, 1); 
            };
    }
    */