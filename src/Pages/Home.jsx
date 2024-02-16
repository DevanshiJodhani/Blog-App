import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import appwriteservice from '../appwrite/config'
import Container from '../Components/Container/Container'
import PostCard from '../Components/PostCard'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteservice.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  if (posts.length === 0) {
    return (
      <div className='w-full py-8'>
        <Container>
          <div className="flex flex-wrap">
            <h1 className="text-white">Login to read posts</h1>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home