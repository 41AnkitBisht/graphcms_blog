import React, {useEffect, useState} from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories : any, slug : any}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result))
    }else{
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div itemScope itemType='https://schema.org/BlogPosting' className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img 
              itemType='image'
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-x' itemType='datePublished'>
              {moment(post.createdAt).format('MMM DD YYYY')}
            </p>
            <Link itemType='url' href={`/post/${post.slug}`} className='text-md'>
              <span itemType='about'>{post.title}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget

