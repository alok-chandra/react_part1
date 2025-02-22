import React from 'react'

function GitHub() {
    const data = gitHubInfoLoader();
  return (
    (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
      )
  )
}

export default GitHub

export const gitHubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/alok-chandra');
    return res.json();
}