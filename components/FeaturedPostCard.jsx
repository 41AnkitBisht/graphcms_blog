import React from 'react'
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div itemScope itemType='https://schema.org/Article' className="relative h-72">
    <div itemProp='thumbnailUrl' className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p itemProp='datePublished' className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p itemProp='name' className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
      <div itemProp='author' itemScope itemType='https://schema.org/Person' className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          itemProp='image'
          unoptimized
          alt={post.author.name}
          height="30"
          width="30"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p itemProp='name' className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div>
    </div>
    <Link itemProp='url' href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;