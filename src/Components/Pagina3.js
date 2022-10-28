import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Pagina3() {
    const [style, setStyle] = useState({marginTop: '8%'});
    const [butonStatus, setButonStatus] = useState(true);


    function textChange(e) {
        if(e.target.value === 'Cafelier'){

            setStyle({border: '5px solid lime', borderRadius: '2px', marginTop: '8%'});
            setButonStatus(false)
        }
        else
            setStyle({border: '5px solid red',  borderRadius: '2px', marginTop: '8%'});
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/pas-4`; 
      navigate(path);
    }

  return (
    <div className='spookybackground'>
        <div className='center-longText'>
            
        <h1> 
        Mergi pe strada Galeriei Romane pana gasesti Atelierul de Cafea 
        </h1>
        </div>

        <div className='center' >
            <input style={style} onChange={textChange} type="text"/>
        </div>

        <div className="buton">

       <button disabled={butonStatus} style={{padding: '5px'}} onClick={routeChange}> PASUL 3</button>
      </div>
    </div>
  )
}

export default Pagina3