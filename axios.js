import axios from "axios";
const instance=axios.create({
    baseURL:'http://localhost:5001/gymwebsite-2/us-central1/api'
    // baseURL:'https://fit-factoy-gym2-0.vercel.app/gymwebsite-2/us-central1/api'

});
 export default instance;