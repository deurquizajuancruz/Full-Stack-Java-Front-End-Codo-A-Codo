// Agregar un interceptor a la petición
axios.defaults.headers.common['Authorization'] = 'aUTH_TOKEN';
/*axios.interceptors.request.use(function (config) {
    console.log('agregando seguridad');
    config.headers.Authorization = 'Bearer aslñkdaslñdasklñd';
    // Haz algo antes que la petición se ha enviada
    return config;
}, function (error) {
    // Haz algo con el error de la petición
    return Promise.reject(error);
});*/

function findUsers() {
    const url = 'https://reqres.in/api/users?page=2';

    const config = {
        timeout: 1000,
    };

    axios.get(url,config)
        .then(function (response) {
            // handle success
            console.log('ok', response);
        })
        .catch(function (error) {
            // handle error
            console.log('error', error);
        })
        .then(function () {
            console.log('siempre se ejecuta')
            // always executed
        });
    //logica del interceptor!!!
}

document.getElementById('btnFindUsers').addEventListener('click', () => {
    findUsers();
});