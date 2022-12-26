import React from 'react'
import './PostCard.css'


const PostCard = ({title,body,tarix,movzu}) => {
  return (
    <div className='post-card col-12 col-md-6 col-lg-4 ms-2'>
        <h1>{title}</h1>
        <span className="metadata">
        {tarix}
        </span>

        |

        <span className="subject">{movzu}</span>

        <p>{body}</p>
    </div>
  )
}

export default PostCard