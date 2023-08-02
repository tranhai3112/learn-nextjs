
export async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {headers: {
    'Content-Type': 'application/json',
  }})
  return await res.json()
}

export async function getPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {headers: {
      'Content-Type': 'application/json',
    }})
    return await res.json()
}