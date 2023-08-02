import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import { getPosts } from './_sevices'

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "sdsdsd",
}

export default async function Home() {
  const posts: any[] = await getPosts()
  return (
    <main className={styles.main}>
      {JSON.stringify(posts.slice(0,10))}
    </main>
  )
}
