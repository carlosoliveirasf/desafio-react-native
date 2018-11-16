import axios from 'axios'

const api =axios.create({
    baseURL: 'https://research-api.passeidireto.com/File/Search?page=0&count=10&contentSize=140&highlightPreTag=%3Cstrong%3E&highlightPostTag=%3C%2Fstrong%3E&suggestQuery=false&order=1&q='
})

export default api