'use client'
import {createContext, useContext} from 'react'

const PostContext = createContext<{
    postPromise?: Promise<string[]>,
    userPromise?: Promise<string[]>
} | null>(null)

export const usePromiseContext = () =>{
    const context = useContext(PostContext);
    if(!context) throw new Error("PostContext must be use within the PostProvider component")
    return context
}

export const PostProvider = ({children, postPromise, userPromise}: {children: React.ReactNode, postPromise?: Promise<string[]>, userPromise?: Promise<string[]>}) => {
    return <PostContext.Provider value={{postPromise, userPromise}}>
        {children}
    </PostContext.Provider>
}