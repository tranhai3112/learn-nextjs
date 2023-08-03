import { cache } from 'react'
import 'server-only'
 
export const preload = (id: string) => {
  void getPost(id)
}
 
export const getPost = cache(async (id: string) => {
    const res = await fetch('http://localhost:3000/api/posts/1', {
        cache: "no-cache"
      }).then(res => res.json())
      return res;
})