# Ejemplo de una API sencilla con Node JS en DOCKER, conectandose a una BD MariaDB

El siguiente ejemplo se basa en la definición de una API con NodeJs la cual esta dockerizada. Se conecta a una base de datos en MariaDB (Mysql). 

## Requisitos

Los requisitos para poder probar el siguiente ejemplo son: 

* Tener instalado MariaDb o Mysql, además este debe de aceptar conexiones externas. 
* Tener un usuario y contraseña para la conexión a la base de datos. 
* Tener Instalado docker

## Acerca de la aplicación 

La aplicación es sencilla tiene dos endpoints

* **/** : este endpoint básicamente devuelve un HTML, el cual esta dentro de la carpeta /views, el objetivo es tener un botón que se conecte a la api, y que intente conectarse a la base de datos. 
* **/api/saludo** : este endpoint intenta realizar una conexión con la base de datos, utilizando las variables de entorno que se han definido desde docker. 
* La carpeta pública esta dentro de **/public** y servira para los archivos publicos. 
  * El javascript del lado del cliente únicamente intenta realizar una petición asincrona a la api, para corroborar la conexión. 

## Acerca de Docker

### Crear la imagen

La aplicación esta dockerizada, para crear la imagen debe


```bash
docker build . 
```

### Ejecutar el contenedor

Para ejecutar el contenedor puede:

```bash
docker run -p 5000:5000  -e MYSQLHOST='**IPDELHOST**'  -e MYSQLUSER='**USUARIO**' -e MYSQLPASS='**PASSWORD**' -v "$(pwd)/api/:/app/api/" -v "$(pwd)/views/:/app/views/" -v "$(pwd)/public/:/app/public/" -it **HASHIMAGEN**
```



//configurar mysql para el acceso remoto


CREATE USER 'prueba'@'%' IDENTIFIED BY 'prueba';

GRANT ALL PRIVILEGES ON * . * TO 'prueba'@'%';

FLUSH PRIVILEGES;
