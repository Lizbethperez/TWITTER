
    
    var boton=document.getElementById('btn');

    boton.addEventListener('click',function(){
        //Se toma el Comentario que Ingresa el Usuario en el Text Area 
        var sectionContainerComment=document.getElementById('area-para-cometarios');
        var comment=document.getElementById('comment').value;
        console.log(comment.length);
        if(comment == null) {
           // var deshabilitado="";
            boton.disabled=true;
            //deshabilitado="deshabilitad";
            //boton.className=deshabilitado;
        }else if(comment.length>0 && comment.length<141){
        boton.disabled=false;
        var valueComment=document.createTextNode(comment);
        var divComment= document.createElement('div');  //Se creara el elemento que contendra el comentario
        divComment.setAttribute('id','containerComment');
        divComment.setAttribute('class','formatContainerComment');
        divComment.appendChild(valueComment);
        sectionContainerComment.appendChild(divComment);
        document.getElementById('comment').value="";
        }//se cierra el else if 
    });

    //version  2

    var contador= function(){
        var msg = document.getElementById("comment");//se mandan traer al js el text area del comentario añadido
        var charRest = document.getElementById("CaracteresRestantes");//se manda a traer del html el elemento parrafo creado para colocar el contador de caracteres 
        LimiteCaracteres = 140;//limite maximo de caracteres que se deben permitir 
        charRest.innerHTML = LimiteCaracteres;
        msg.onkeydown = function(){//se activa cuando el usuario presiona una tecla  
            setTimeout(function(){ // sirve para hacer una pequeña pausa al presionar cada tecla
            var largeValueTextArea=msg.value.length;
            charRest.innerHTML = LimiteCaracteres - largeValueTextArea;
            var estilo=''; 
                if(largeValueTextArea >= 130){
                    estilo="alarma";
                } else if(largeValueTextArea>= 120){
                    estilo="warning";
                    } else if(largeValueTextArea > 140){
                        var botonDesHabilitar=document.getElementById('btn');
                        botonDesHabilitar.disabled=true;//se deshabilita el boton cuando se pasa de los caracteres
                    }//cierra el else ir 
            charRest.className = "char-rest "+ estilo;//para asignar los estilos
            }, 1); //cierra el setTimeout
        };//cierra la funcion onkeydown
    }//cierra la funcion contador 

    contador();