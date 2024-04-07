const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input_pais');
    let valor = inputTexto.value;
    peticioApi(valor);
}

const peticioApi = (pais) => {
    const baseUrl = 'https://restcountries.com/v3.1/';
    const endpoint = `name/${pais}`;
    const url = `${baseUrl}${endpoint}`;

    axios
    .get(url)
    .then((response) => {
        printData(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

}

const printData = (data) => {
    let respuesta = document.getElementById('show-info');
    respuesta.innerHTML = `
        <span>${data[0]['flag']}</span>
        <label><h3>${data[0].name.common}</h3></label>
        <label><h3>${data[0]['capital']}</h3></label>
        <label><h3>${data[0]['population']}</h3></label>
    `;
}