import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import appwriteservice from '../appwrite/config'
import Container from '../Components/Container/Container'
import PostForm from '../Components/Post-Form/PostForm'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
      if (slug) {
        appwriteservice.getPost(slug).then((post) => {
          if (post) {
            setPost(post)
          }else {
            navigate("/")
          }
        })
      }
    }, [slug, navigate])
  
    return (
      <div className='py-6'>
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    )
  }
  
  export default EditPost