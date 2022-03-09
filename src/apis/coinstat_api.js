import Axios from "axios";

class CoinstatApi {

    fetchData = async () =>{

        const result = await Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=EUR`);
        return result;
    }


}

export default CoinstatApi;
