
import { getUserByEmail } from "@/actions/user";
import AddBookmark from "@/components/AddBookmark";
import BookmarkCard from "@/components/BookmarkCard";
import { getServerSession } from "next-auth"
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  

  return (
   <>
   {
    !session && <div className="w-full  flex  items-center justify-center mt-10 ">
     <span className="text-black">Please sign in to access the app.</span>
     <Link href={"/api/auth/signin"}>
      <button className="text-black border border-black rounded-2xl py-2 px-4 md:py-1 md:px-2 bg-blue-400 hover:bg-blue-500">
              Sign In
      </button>
      </Link>
    </div>
   }
   {
    session && <div className="p-6">
      <AddBookmark/>
      <label htmlFor="" className="font-extrabold text-black my-100 mx-4">All Bookmarks:</label>
      <div className="md:flex md:flex-wrap ">
        <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      <BookmarkCard/>
      </div>
    </div>
   }
   </>
  );
}
