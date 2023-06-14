import { Box } from '@chakra-ui/react'
import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({coordinates, setCoordinates, setBounds }) => {
  return (
    <Box width={'full'} height={'full'}>
         <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAmN4iAQU-nuN-F__7EpC82u7gRLB8f1A0" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        } }
        onChildClick = {()=> {}}>
     </GoogleMapReact>
    </Box>
  )
}

export default Map