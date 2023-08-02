import React from 'react'

import { Metadata, ResolvingMetadata } from 'next'
import { getPost } from '../_sevices'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const post = await getPost(params.id)
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || []
 
  return {
    title: post.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
 
export default async function PostItem({ params, searchParams }: Props) {
    const post = await getPost(params.id)
  return (
    <div>{JSON.stringify(post)}</div>
  )
}
