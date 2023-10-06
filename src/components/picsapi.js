import { useEffect, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { GoBookmark } from 'react-icons/go';
import {GiPumpkinMask} from 'react-icons/gi';
import {GiWitchFace} from 'react-icons/gi';
import {CiLocationArrow1} from 'react-icons/ci';

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
    <div className='posts'>
        <h2><GiWitchFace/> WELCOME! <GiPumpkinMask/> Happy SPOOK season! <GiPumpkinMask/></h2>
        <button className='button' onClick={(event) => setPhotos([])}>Switch Images off</button>
        <button className='button' onClick={(event) => fetchImages()}> Fetch Pics</button>
        {photos && photos.map((item, index) => {
            return (
                <div>
                    <img src = {item.download_url} width = "60%" height = "400px" alt=''/> 
                    <div className='picicons'>
                    <BsHeart />
                    <FaRegComment />
                    <CiLocationArrow1/>
                    <GoBookmark />
                    </div>
                    <h8>By: {item.author}</h8>   
                </div>
            )
        })}
    </div>
  )
}

export default Picsapi;