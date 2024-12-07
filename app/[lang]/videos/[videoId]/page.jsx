// 'use client'
import { notFound } from 'next/navigation';
import VideDetailsCard from '../../../../components/VideoDetailsCard';
import VideoYouMayLike from '../../../../components/VideoYouMayLike';
import { getVidById } from '../../../../utils/getVidData';
import VideoNotFound from '../[videoId]/not-found';

export default async function VideoPage ( { params } )
{
  const video = await getVidById(params.videoId);
  if(!video){
        return notFound();
    // return <VideoNotFound id={ params.videoId } lang={ params.lang } />
    }
    // console.log(params);
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <VideDetailsCard video={ video } lang={ params.lang } />
      <VideoYouMayLike lang={ params.lang } />
    </div>
  );
};
