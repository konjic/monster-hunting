import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Pagina6() {
    const [style, setStyle] = useState({marginTop: '8%'});
    const [butonStatus, setButonStatus] = useState(true);


    function textChange(e) {
        if(e.target.value === 'Amiral Vasile Urseanu'){

            setStyle({border: '5px solid lime', borderRadius: '2px', marginTop: '8%'});
            setButonStatus(false)
        }
        else
            setStyle({border: '5px solid red',  borderRadius: '2px', marginTop: '8%'});
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/pas-7`; 
      navigate(path);
    }

  return (
    <div className='spookybackground'>
        <div className='center-longText'>
            
        <h1> 
        Michelangelo ti se alatura tie si lui Henri Coanda si mergeti sa admirati universul
        <br/>
        <br/>
        Cum se cheama persoana care va ajuta sa admirati cerul si universul?
        </h1>
        </div>

        <div className='center' >
            <input style={style} onChange={textChange} type="text"/>
        </div>

        <div className="buton">

       <button disabled={butonStatus} style={{padding: '5px'}} onClick={routeChange}> PASUL 6</button>
      </div>
    </div>
  )
}

export default Pagina6