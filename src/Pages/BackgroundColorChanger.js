import React from 'react';
import { useParams } from 'react-router-dom';


export const BackgroundColorChanger = () =>{
      const{colourname}=useParams();

      const mainStyle={
        height:'100vh',
        backgroundColor: colourname,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      };

    return(
        <main style={mainStyle}>
            <h1>Background Color Changer</h1>
        </main>
       
    )
}