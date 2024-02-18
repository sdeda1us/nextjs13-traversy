import Repo from "@/app/components/Repo"
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
        <Link href='/code/repos' className="btn btn-back">Back to Repositories</Link>
        <Suspense fallback={<div>Loding repo...</div>}>
            <Repo name={name}/>
        </Suspense>
        <Suspense fallback={<div>Loding directories...</div>}>
            <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}

export default RepoPage