// 'use client'
import dynamic from "next/dynamic";
import { getDictionary } from '../utils/dictionary';
import { getVidData } from "../utils/getVidData";

const VideoCard = dynamic( () => import( "./VidMayLikeCard.jsx" ) );

export default async function VideoYouMayLike ( { lang, id } )
{
    const language = await getDictionary( lang );
    const vidData = await getVidData();
    const youMayLike = vidData?.filter( ( vid ) => vid.videoId !== id ).slice( 0, 3 );
    
    return (
        <div className="lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">{ language.vdoPage.title}</h2>
            <div className="space-y-4">
                {
                    youMayLike?.map( data => (
                        <VideoCard key={ data.videoId } data={ data } />
                    ))
                }
            </div>
        </div>
    );
}
