import { getPost } from '@/app/_sevices'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request,  { params }: { params: { id: string } }) {
  
  const post = await getPost(params.id) // should make the getPost fetch to this endpoint and this endpoint call some external api to handler 404, 405, ... with 
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { referer: referer },
//   })
 
  return NextResponse.json(post)
}