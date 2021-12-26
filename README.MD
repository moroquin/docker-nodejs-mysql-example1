docker build .

# ejecutar contenedor cambiar el hash al final

docker run -p 5000:5000  -e MYSQLHOST='192.168.1.19'  -e MYSQLUSER='prueba' -e MYSQLPASS='prueba' -v "$(pwd)/api/:/app/api/" -v "$(pwd)/views/:/app/views/" -v "$(pwd)/public/:/app/public/" -it 1b5fecd6dbfe



//configurar mysql para el acceso remoto


CREATE USER 'prueba'@'%' IDENTIFIED BY 'prueba';

GRANT ALL PRIVILEGES ON * . * TO 'prueba'@'%';

FLUSH PRIVILEGES;
