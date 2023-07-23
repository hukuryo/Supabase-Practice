import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function sample() {
  const supabase = createServerComponentClient({ cookies });

  const { data: blog } = await supabase.from("blog").select();
  
  return (
    <ul className="my-auto">
      {blog?.map((blog) => (
        <li key={blog.id}>{blog.body}</li>
      ))}
    </ul>
  );
}