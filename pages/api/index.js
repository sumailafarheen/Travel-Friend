import axios from "axios";
 
const url ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
 

export const getPlacesData = async (sw, ne) => {
    try {
    const { data: { data }, 
    } =  await axios.get(url, {
        
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng, 
  },
  headers: {
    'X-RapidAPI-Key': 'd2873a702dmsh800d7af64851246p1f09c6jsn1c7779b92fa6',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
    });
        return data;
    } catch (error) {
        console.log(`Fetch data error : ${error}`);
    }
}