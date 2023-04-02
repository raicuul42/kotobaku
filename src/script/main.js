function main() {
    const baseURL = 'https://api.akuari.my.id/islami/kisahnabi'
    const Axios = require('axios')
    const configs = {
        url: baseURL,
        method: 'GET',
        params: {
            nabi: nabi,
        },
    }

    Axios(configs)
        .then(function response(response) {
            let data = response.data
            console.log(data);
        })
        .catch(function error(error) {
            if (error['response']) {
                console.error(error.response)
            }
            console.error(error.stack)
            process.exit(1)
        })
}

export default main