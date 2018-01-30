import axios from 'axios';

export default axios.create({
    baseURL: 'https://burger-app-db.firebaseio.com/'
});