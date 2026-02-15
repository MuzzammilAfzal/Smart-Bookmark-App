"use client"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import BookmarkCard from './BookmarkCard';
import { getUserByEmail } from "@/actions/user";


const DisplayAllBookmark = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  type Bookmark = {
  id: string;
  title: string;
  url: string;
  createdAt: string;
   };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    const user =await getUserByEmail();
    const { data } = await supabase.from("Bookmark").select("*").eq("userId", user?.id);
    if (data) setBookmarks(data);
  };
  console.log(bookmarks);

    useEffect(() => {
    const channel = supabase
      .channel("bookmarks-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Bookmark" },
        (payload) => {
          setBookmarks((prev) => [...prev, payload.new as Bookmark]);
        }
      )

      .on(
      "postgres_changes",
      { event: "DELETE", schema: "public", table: "Bookmark" },
      (payload) => {
        setBookmarks((prev) =>
          prev.filter((b) => b.id !== payload.old.id)
        );
      }
    )

      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="md:flex md:flex-wrap">
        
        {bookmarks.map((e) => (
          <BookmarkCard key={e.id} id={e.id} title={e.title} url={e.url} createdAt={e.createdAt} />
        ))}
      
    </div>
  )
}

export default DisplayAllBookmark