import {NextResponse} from 'next/server'

const users = ["user 1", "user 2", "user 3","user 4"]

export async function GET(){
    await new Promise((resolve) => setTimeout(resolve, 6000))
    return NextResponse.json(users)
}