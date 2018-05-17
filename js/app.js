
    
    var boton=document.getElementById('btn');

    boton.addEventListener('click',function(){
        //Se toma el Comentario que Ingresa el Usuario en el Text Area 
        var sectionContainerComment=document.getElementById('area-para-cometarios');
        var comment=document.getElementById('comment').value
        if(comment == null) {
            var deshabilitado="";
            boton.disabled=true;
            deshabilitado="deshabilitad";
            boton.className=deshabilitado;
        }else if(comment.length>=0 && comment.length<140){
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
        msg.onkeydown = function(){ //se activa cuando el usuario presiona una tecla 
            charRest.innerHTML = LimiteCaracteres - msg.value.length;
            var estilo=''; 
                if(msg.value.length >= 130){
                    estilo="alarma";
                } else if(msg.value.length >= 120){
                    estilo="warning";
                } else if(msg.value.length > 140){
                    var botonDesHabilitar=document.getElementById('btn');
                    botonDesHabilitar.disabled=true;
                }
                charRest.className = estilo;//para asignar los estilos
            
            };//cierra la funcion onkeydown
    }//cierra la funcion contador 

    contador();