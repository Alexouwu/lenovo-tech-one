import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import { useNavigate} from "react-router-dom";
const InviteComponent =()=>{
    let {email}= useParams();
    const [dia,setDia]=useState('')
    const [horario, setHorario]=useState('')
    const navigate= useNavigate();
    
    //Image download
    function downloadInvite(e) {
        htmlToImage.toBlob(document.getElementById('mains'))
        .then(function (blob) {
          if (window.saveAs) {
            window.saveAs(blob, 'invite.png');
          } else {
           saveAs(blob, 'invite.png');
         }
        });
        setTimeout(()=>{
            navigate(`/asistencia/${email}`)
        },5000)
    }  
    const fetchData=async()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({values:{email:`${email}`}})
          };
        fetch("https://beemexico.com/lenovo-event/getDate", requestOptions)
          .then(async (response)=>{
            try {
                  const data = await response
                      .json();
                    setDia(data.fecha)
                    setHorario(data.horario)
                  return data;
              } catch (error) {
                  console.log(error.message);
              }
          })
    }
    useEffect(()=>{
        document.querySelector("main").addEventListener("click", downloadInvite);
    },[])
    useEffect(()=>{
        fetchData()
    },[dia,horario])
    return(
        <>
        <main className="container-div" id="principal">
            <div>
                <img src="/background-invite.png"/>
            </div>
        </main>
        </>
    )
}

export default InviteComponent;