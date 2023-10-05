import { useEffect, useState } from 'react';

function Picsapi () {
    async function fetchImages () {
        const response = await fetch ("https://picsum.photos/v2/list?page=2&limit=10");
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
        <h1>WELCOME! Happy Scrolling!</h1>
        <button onClick={(event) => setPhotos([])}>Switch Images off</button>
        <button onClick={(event) => fetchImages()}> Fetch Pics</button>
        {photos && photos.map((item, index) => {
            return (
                <div>
                    <img src = {item.download_url} width = "50%" /> 
                    <h4>By: {item.author}</h4>   
                </div>
            )
        })}
    </div>
  )
}

export default Picsapi;