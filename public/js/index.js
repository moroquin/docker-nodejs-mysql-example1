(function () {

    console.log("funcionando ");
})();


let llamada = async () => {
    console.log("hola mundo");

    var data = { datos: 'datos' };

    const response = await fetch('/api/saludo')
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

};