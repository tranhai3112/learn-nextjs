import { getPosts } from '@/app/_sevices'
import { NextResponse } from 'next/server'
 
export async function GET() {
  const posts: any[] = await getPosts()
  return NextResponse.json(posts.slice(0,10))
}