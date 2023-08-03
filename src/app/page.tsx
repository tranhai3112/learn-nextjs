import Posts from './_components/Posts';
import styles from './page.module.css'
import { PostProvider } from './_context/PostProvicer';
import Users from './_components/Users';
import { Suspense } from 'react';
import { preload } from './_utils/preloadPost';
import Post from './_components/Post';

export default function Home() {
  const postReq = fetch('http://localhost:3000/api/posts', {
    cache: "no-cache"
  }).then(res => res.json())
  const userReq = fetch('http://localhost:3000/api/users', {
    cache: "no-cache"
  }).then(res => res.json())
  preload("1")
  // .then((res) => { // need js to perform error.tsx
  //   throw new Error("ERROR")
  // })
  return (
    <main className={styles.main}>
      <PostProvider postPromise={postReq} userPromise={userReq}>
        <div>
          {/* by default loading.tsx is 'Instant Loading States', so its waiting for RSC to 
            - fetch all the data
            - making html css js
            - send back to client
            - render loading.tsx during all of that
            - finally react hydrate
            */}
          {/* giving Suspense to some components will override the default loading.tsx cuz the components will
            catch the closet Suspense (loading.tsx is the Suspense behind the sense)
              and it make RSC send data back to client with stream (send each component as chunk) 
          */}
          <Suspense fallback={<div>loading posts</div>}> 
            <Posts />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>loading users</div>}>
            <Users />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>loading post id: 1</div>}>
            <Post/>
          </Suspense>
        </div>
      </PostProvider>
    </main>
  )
}
