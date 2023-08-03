import React from 'react'
import { getPost } from '../_utils/preloadPost'

export default async function Post() {
    const result = await getPost("1")
    console.log(result);
    
  return (
    <div>{JSON.stringify(result)}</div>
  )
}
