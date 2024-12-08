'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../hooks/useLanguage';

export default function VideoCard ( { data, params } )
{
    const { currentLanguage } = useLanguage();
    const router = useRouter();
    const handleVdoCard = () =>
    {
        // console.log( params, currentLanguage.value );
        router.push(`${currentLanguage.value}/videos/${data.videoId}`)
    }
    
    return (
        <div
            onClick={handleVdoCard}
            className="rounded-lg overflow-hidden bg-color-gray hover:shadow-sm hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-green-600">
            <Image width={300} height={250} src={data.thumbnail} className="w-full h-40 object-cover" alt='vdoCardImg'/>
            <div className="p-2">
                <p className="font-semibold">{ data.title }</p>
                <p className="text-sm text-gray-400">{ data.channelTitle }</p>
            </div>
        </div>
    );
}