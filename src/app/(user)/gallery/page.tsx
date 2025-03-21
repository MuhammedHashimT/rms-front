import axios from "axios";
import React from 'react'
import UserGallery from "@/components/admin/gallery/UserGallery";

const page =async () => {
    
  const result = await axios.get("https://realia23.azurewebsites.net/gallery");
  
  return (
    <div>
        <UserGallery result={result.data} />
    </div>
  )
}

export default page