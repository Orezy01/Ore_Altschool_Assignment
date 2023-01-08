import React, {useEffect} from 'react';


export default function Favourites() {
    useEffect(() => {
        document.title = "My Favourites";
    }, []);
  return (
    <div>
        <p>Favourite Page</p>
    </div>
  )
}
