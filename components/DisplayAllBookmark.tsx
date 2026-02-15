"use client"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import BookmarkCard from './BookmarkCard';
import { getUserByEmail } from "@/actions/user";


const DisplayAllBookmark = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [USER, setUSER] = useState<any>(null);

  type Bookmark = {
  id: string;
  title: string;
  url: string;
  createdAt: string;
   };




   useEffect(() => {
  let channel: any;

  const init = async () => {
    const user = await getUserByEmail();
    if (!user) return;

    setUSER(user);


    const { data } = await supabase
      .from("Bookmark")
      .select("*")
      .eq("userId", user.id);

    if (data) setBookmarks(data);

    
    channel = supabase
      .channel("bookmarks-channel")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "Bookmark",
          filter: `userId=eq.${user.id}`,
        },
        (payload) => {
          setBookmarks((prev) => [...prev, payload.new as Bookmark]);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "Bookmark",
          filter: `userId=eq.${user.id}`,
        },
        (payload) => {
          setBookmarks((prev) =>
            prev.filter((b) => b.id !== payload.old.id)
          );
        }
      )
      .subscribe();
  };

  init();

  return () => {
    if (channel) supabase.removeChannel(channel);
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