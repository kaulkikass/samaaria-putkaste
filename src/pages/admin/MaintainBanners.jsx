import { useRef } from 'react';
import { useEffect, useState } from 'react';
import FileUpload from '../../components/FileUpload';

function MaintainBanners() {
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    const [banners, setBanners] = useState([]);
    const bannerDescription = useRef("");
    const bannersDb = 'https://samaaria-putkaste-default-rtdb.europe-west1.firebasedatabase.app/images.json';

    useEffect(() => {
        fetch(bannersDb)
        .then(response => response.json())
        .then(data => setBanners(data || []));
    }, []);

    const add = () => {

        if (bannerDescription.current.value === "") {
            setMessage("Kirjeldus valimata");
            return;                          
        }
        if (image === "") {
            setMessage("Banner valimata");
            return;                          
        }

        const newBanner = {
            description: bannerDescription.current.value,
            src: image
          }

        banners.unshift(newBanner);
        fetch(bannersDb,{ 
            method: 'PUT', 
            body: JSON.stringify(banners), //mida pannakse
            headers: { //mis kujul andmed pannakse
                'Content-Type': 'application/json'
            }
        })
        setBanners(banners.slice())
    }
    
    const deleteBanner = (banner) => {
        const index= banners.findIndex(element => element.description === banner.description);
        banners.splice(index,1);
        setBanners(banners.slice());
        fetch(bannersDb, {
            method:"PUT",
            body: JSON.stringify(banners),
            "headers": {
                "Content-type": "application/json"
            }
        })
    }
    return ( 
    <div>
        <div>{message}</div>
        <label>Banneri nimetus</label> <br />
        <input  ref={bannerDescription} type="text" />
        <FileUpload onSendPictureUrl={setImage} /> 
        <button onClick={() => add()}><b>Lisa</b></button><br /><br />
        {banners.map(element =>
        <div>
            <span>{element.description}</span>
            <button onClick={() => deleteBanner(element)}>Kustuta</button>
        </div>
        )} 
    </div> 
    );
}

export default MaintainBanners;