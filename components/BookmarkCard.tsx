"use client"
import { deleteBookmark } from '@/actions/user'
import Link from 'next/link';


const BookmarkCard = (props : {id: string , title: string, url: string, createdAt: string}) => {

  const handleDelete = async () => {
    await deleteBookmark(props.id);
  }
  return (
    <div className='text-black flex flex-col flex-wrap border border-black shadow-2xl rounded-2xl p-4 my-2 mx-2 w-100% md:w-80 h-auto'>
        
        <span> <span className='font-extrabold'>title:</span> {props.title}</span>
        <span className='break-all'> <span className='font-extrabold'>URL:</span> {props.url} 
        <Link href={props.url}  target="_blank" className='text-center rounded-2xl bg-blue-800 text-white p-2 m-2 hover:bg-blue-600'  >Open URL</Link>
        </span>
        <span><span className='font-extrabold'>Time created:</span> {props.createdAt}</span>
        <button className='bg-red-500 w-1/3 text-center rounded-2xl hover:bg-red-700'
        onClick={handleDelete}>delete</button>
    </div>
  )
}

export default BookmarkCard