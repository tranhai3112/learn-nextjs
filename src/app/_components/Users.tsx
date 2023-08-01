'use client'
import {use} from 'react'
import { usePromiseContext } from '../_context/PostProvicer'

export default function Users() {
    const {userPromise} = usePromiseContext()
    if(userPromise){
        const users = use(userPromise)
        return (
            <div>
                {users.map((user, index) => (
                    <p key={index}>{user}</p>
               ))}
            </div>
          )
    }
    return null // throw error?
}
