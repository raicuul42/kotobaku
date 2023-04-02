function main() {
    const baseURL = 'https://doa-doa-api-ahmadramadhan.fly.dev'
    const Axios = require('axios')

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    const getAllDoa = async () => {
        try {
            const response = await Axios.get(`${baseURL}/api`)

            if (response.error) {
                showResponseMessage(response.message)
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    getAllDoa()
}

export default main