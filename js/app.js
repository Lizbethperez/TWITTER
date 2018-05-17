
    
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