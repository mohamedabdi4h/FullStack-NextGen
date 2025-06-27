import React, { useEffect, useState } from 'react'
import axios from 'axios'
const image = "https://via.placeholder.com/600/92c952"
const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("sorry we don't have any photos...")
                }
                return response.json()
                    .then((data) => {
                        setPhotos(data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }, [])


    return (
        <div>
            <h1>There are all Photos..</h1>
            {
                photos.map((photo) => (
                    <ul key={photo.id} className='bg-gray-300 m-2 p-2 '>
                        <li>ID:{photo.id}</li>
                        <li>Title:{photo.title}</li>
                        <li>Photo: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s' className='size-12' alt={photo.title} /></li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Photos