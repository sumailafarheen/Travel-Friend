 import { Flex } from "@chakra-ui/react";
 import { Header } from "@/components/Header";
import List from "@/components/List";
import Map from "@/components/Map";
import { PlaceDetails } from "@/components/PlaceDetails";
import { useState } from "react";

const Home = () => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0});
    const [type, setType] = useState("restaurants");
    const [ratings, setRatings] = useState("");

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
      setType  ={setType}
      setCoordinates = {setCoordinates}
      setRatings = {setRatings}
      />

     {/*<List/>*/}


     <Map setCoordinates = {setCoordinates} coordinates= {coordinates}/>


     
    </Flex>
    );
};
export default Home;