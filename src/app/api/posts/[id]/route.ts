import {NextResponse} from 'next/server'

const posts = ["post 1", "post 2", "post 3","post 4"]

export async function GET(request: Request, {params}: {params: {id: number}}){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return NextResponse.json(posts[params.id])
}