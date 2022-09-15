import { useEffect, useState } from "react";

function NaisteRiided() {
    const dbUrl = "https://samaaria-putkaste-default-rtdb.europe-west1.firebasedatabase.app/products.json";
    const [clothing, setClothing] = useState([]);
    const womenClothes = clothing.filter(user => user.description === "Naiste Riided");
    
    useEffect(() => {
        fetch(dbUrl)
        .then(response => response.json())
        .then(data => setClothing(data || []));
    }, []);
    
    return (
         <div>
            <div>{womenClothes.map(clothing =>
            <div>
                <img src={clothing.image} alt=""/>
                <div>{clothing.name}</div>
                <div>{clothing.price} $</div>
                <div>{clothing.category}</div>
            </div>
            )}</div>
         </div> 
         );
}

export default NaisteRiided;