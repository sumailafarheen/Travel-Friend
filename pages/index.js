 import { Flex } from "@chakra-ui/react";
 import { Header } from "@/components/Header";
import List from "@/components/List";
import Map from "@/components/Map";
import { PlaceDetail } from "@/components/PlaceDetail";
import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import Head from "next/head";

const places = [
  {name : 'sample1'},
  {name : 'sample2'},
  {name : 'sample3'},
  {name : 'sample4'},
  {name : 'sample5'},

];

const Home = () => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0});
    const [type, setType] = useState("restaurants");
    const [bounds, setBounds] = useState(null);
    const [places, setPlaces] = useState([]);
    const [ratings, setRatings] = useState("");
    const [isLoading, setIsLoading] = useState(false);

   
          useEffect(() => {
            // get the users current location on intial login
        
            navigator.geolocation.getCurrentPosition(
              ({ coords: { latitude, longitude } }) => {
                console.log({ latitude, longitude });
                setCoordinates({ lat: latitude, lng: longitude });
              }
            );
          }, []);

         
        
          useEffect(() => {
            setIsLoading(true);
            getPlacesData( type, bounds?.sw, bounds?.ne).then((data) => {
              console.log(data);
              setPlaces(data);
              setIsLoading(false);
            });
          }, [ type, coordinates, bounds]);
          
        

        return (
    <Flex
    justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
      >
      <Header
      setType  = {setType}
      setCoordinates = {setCoordinates}
      setRatings = {setRatings}
      />

     <List places={places} isLoading={isLoading}/>


     <Map 
      setCoordinates = {setCoordinates} 
      coordinates = {coordinates} 
      setBounds = {setBounds} />


     
    </Flex>
    );
};
export default Home;