// 'use client'
import VideDetailsCard from '../../../../components/VideoDetailsCard';
import VideoYouMayLike from '../../../../components/VideoYouMayLike';

export default function VideoPage({ params }) {
    // console.log(params);
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <VideDetailsCard id={params.videoId} lang={params.lang} />
            <VideoYouMayLike lang={params.lang} />
        </div>
    );
}
