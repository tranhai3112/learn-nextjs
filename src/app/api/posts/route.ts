import {NextResponse} from 'next/server'

const posts = ["post 1", "post 2", "post 3","post 4"]

export async function GET(){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return NextResponse.json(posts)
}