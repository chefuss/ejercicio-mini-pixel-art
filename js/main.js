//seleccionamos nuestros elementos del dom.
//qué elementos nos hacen falta?

//trabajamos sobre el formulario para obtener los datos de los inputs
//y crear la grilla.

//el formulario tiene su propio event llamado submit.
  //dentro del event handler, vamos a seleccionar los valores de nuestros inputs.

  //llamamos a nuestras funciones para crear la grilla
  //y para escuchar al usuario cuando intervenga en la grilla.


//funcion crearGrilla
  //recibirá como parámetros el valor de alto y ancho que haya colocado el usuario.
  //deberá recorrer una vez para el ancho, y crear tantos divs con clase pixel como haya dicho el usuario.

  //deberá reccorrer una vez para el alto, y crear tantos divs con clase pixel comoo haya  dicho el usuario.
    //en este loop, debemos corregir la condición y multiplicar el alto por (alto - 1), asi crea filas y no sólo los divs.

  //en ambos casos agregamos los divs creados a la grilla.

  //función escucharClicksEnLaGrilla()

    //esta función debe prestar atención al usuario cuando.
    //haga click en un pixel.
    //cuando apriete el mouse
    //cuando suelte el mouse
    //cuando el mouse se mueva
    //y cuando el mouse salga de la grilla.


    //como funciones de ayuda vamos a crear:
      // funcion mouseActivo() esta función nos va a ayudar a saber si el usuario ha presionado el mouse.
      //en este caso deberá tornar una variable de ayuda a true. La variable se podría llamar mouseApretado, y por defecto debería estar en false. 
      //si es una variable que nos sirve para varias funciones, quizás no debería ser local.

      // función mouseInactivo, debe hacer lo contrario a la anterior.

      //función pintar
      //esta función solo debe usarse cuando el mouseApretado está en true,
      //deberá tener en cuenta el elemento sobre el que se está pasando, y cambiar el color de fondo por el color que tenga en el selector de color.