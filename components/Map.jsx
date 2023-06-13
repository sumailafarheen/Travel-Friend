import { Box } from '@chakra-ui/react'
import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({coordinates, setCoordinates }) => {
  return (
    <Box width={'full'} height={'full'}>
         <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAmN4iAQU-nuN-F__7EpC82u7gRLB8f1A0" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {} }
        onChildClick = {()=> {}}>
     </GoogleMapReact>
    </Box>
  )
}

export default Map