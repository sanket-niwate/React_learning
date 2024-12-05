import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { useParams } from 'react-router'
function Github() {
    const data=useLoaderData()
    // const {userid} = useParams()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sanket-niwate')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })

    // },[userid])
  return (
    <div className="text-center m-4 bg-gray-600 p-4 text-white">
    <img
      src={data?.avatar_url}
      alt="Avatar"
      className="rounded-full w-32 h-32 mx-auto mb-4"
    />
    <h2 className="text-2xl">{data?.name || "No Name Provided"}</h2>
    <p className="text-lg">@{data?.login}</p>
    <p className="text-sm text-gray-300 mb-4">{data?.bio || "No bio available."}</p>
    <div className="flex justify-center space-x-8">
      <div>
        <h3 className="text-xl">{data?.followers}</h3>
        <p>Followers</p>
      </div>
      <div>
        <h3 className="text-xl">{data?.following}</h3>
        <p>Following</p>
      </div>
      <div>
        <h3 className="text-xl">{data?.public_repos}</h3>
        <p>Repositories</p>
      </div>
    </div>
    <a
      href={data?.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-orange-500 hover:underline"
    >
      Visit GitHub Profile
    </a>
  </div>)
}

export default Github

export const GithubLoaderInfo = async()=>{
    const response= await fetch('https://api.github.com/users/sanket-niwate')
    return response.json()
}