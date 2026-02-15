"use client"
import { getUserByEmail } from '@/actions/user';
import { useState } from 'react';


const AddBookmark = () => {
     const [title, setTitle] = useState("");
     const [url, setUrl] = useState("");
     const [loading, setLoading] = useState(false);
     

     

     

    const handleSubmit = async (e: React.FormEvent) => {
      setLoading(true);
        e.preventDefault();
       console.log("title:", title);
       console.log("url:", url);

        await fetch("/api/bookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, url }),
    });
    setLoading(false);
    }
    
  return (
   <div className="text-black py-4 px-8 border-2 border-black rounded-3xl shadow-2xl w-100% md:w-90">
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" className="p-1 font-bold">Enter Details</label>
        <input type="text"  placeholder="Enter bookmark title" className="p-1 border border-black rounded-2xl my-1" onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="url" placeholder="Enter bookmark URL" className="p-1 border border-black rounded-2xl my-1" onChange={(e)=>{setUrl(e.target.value)}} />
        <button type='submit'
         className="text-white border border-black rounded-2xl py-2 px-4 md:py-1 md:px-2 bg-blue-950 hover:bg-blue-800"> 
         Add Bookmark
         </button>
         {loading && <p className="text-blue-950">Adding bookmark...plz wait</p>}
       </form>
      </div>
  )
}

export default AddBookmark