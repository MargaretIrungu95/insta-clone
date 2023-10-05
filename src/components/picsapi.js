import { useEffect, useState } from 'react';

function Picsapi () {
    async function fetchImages () {
        const response = await fetch ("https://picsum.photos/v2/list?page=2&limit=50");
        const data = await response.json();
        console.log(data);
        setPhotos(data);
    }
    useEffect(() => { 
        fetchImages();
    }, [])

    const [photos, setPhotos] = useState()
    
  return (
    <div>
        <hr></hr>
        <h3>WELCOME! Happy Scrolling!</h3>
        <button onClick={(event) => setPhotos([])}>Switch Images off</button>
        <button onClick={(event) => fetchImages()}> Fetch Pics</button>
        {photos && photos.map((item, index) => {
            return (
                <div>
                    <img src = {item.download_url} width = "50%" alt='' /> 
                    <h4>By: {item.author}</h4>   
                </div>
            )
        })}
    </div>
  )
}

export default Picsapi;