import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




function Pagina2() {

    const [style, setStyle] = useState({marginTop: '8%'});
    const [butonStatus, setButonStatus] = useState(true);


    function textChange(e) {
        if(e.target.value === 'Piata romana'){

            setStyle({border: '5px solid lime', borderRadius: '2px', marginTop: '8%'});
            setButonStatus(false)
        }
        else
            setStyle({border: '5px solid red',  borderRadius: '2px', marginTop: '8%'});
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/pas-3`; 
      navigate(path);
    }


  return (
    <div className='spookybackground'>
        <div className='center'>
            
        <h1> 
            Mergi acolo unde romanii vindeau lucruri
        </h1>
        </div>

        <div className='center' >
            <input style={style} onChange={textChange} type="text"/>
        </div>

        <div className="buton">

       <button disabled={butonStatus} style={{padding: '5px'}} onClick={routeChange}> PASUL 2</button>
      </div>
    </div>
  )
}

export default Pagina2