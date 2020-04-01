import axios from 'axios';
import * as constants from './constants';

const instance = axios.create();

instance.defaults.baseURL = constants.BASE_URL;
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
