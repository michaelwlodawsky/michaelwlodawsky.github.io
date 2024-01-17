const localIp: string = '127.0.0.1'
const url: string = process.env.NODE_ENV == 'production' ? 'https://us-central1-michaelwlodawsky-homepage.cloudfunctions.net/validateToken?token=' : `http://${localIp}:5001/michaelwlodawsky-homepage/us-central1/validateToken?token=`
// Note: You'll need to update 127.0.0.1 to your local IP if you want to test dev changes on a mobile device

export const validateToken = (token: string | null, onSuccess: (isValid: boolean) => void, onError: (error: Error) => void) => {
    console.log(process.env.NODE_ENV)
    fetch(url + token, {
            method: 'GET',
        })
        .then((response) => { 
            if (!response.ok) {
                throw new Error('HTTP Error ' + response.status)
            }

            return response.json()
        })
        .then((isValid) => {
            onSuccess(isValid)
        })
        .catch((error) => {
            console.error(error)
            onError(error)
        })
}