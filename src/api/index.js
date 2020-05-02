import axios from 'axios';

const url='https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true';

export const fetchData=async()=>{
    try{
        const {data:{activeCases,recovered,deaths,lastUpdatedAtApify}}= await axios.get(url);

        
    return {activeCases,recovered,deaths,lastUpdatedAtApify};
    }
    catch(error){

    }
}