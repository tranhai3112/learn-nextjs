'use client'
import {use} from 'react'
import { usePromiseContext } from '../_context/PostProvicer'

export default function Posts() {
    const {postPromise} = usePromiseContext()
    if(postPromise){
        const posts = use(postPromise)
        return (
            <div>
                {posts.map((post, index) => (
                    <p key={index}>{post}</p>
               ))}
            </div>
          )
    }
    return null // throw error?
}
