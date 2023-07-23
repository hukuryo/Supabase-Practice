import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'


export const dynamic = 'force-dynamic'

export default async function Index() {
  
  const supabase = createServerComponentClient({ cookies });

    const { data: countries } = await supabase.from("countries").select();

    return (
      <ul className="my-auto">
        {countries?.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    );
}
