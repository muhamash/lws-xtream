'use client'

import { format } from 'date-fns';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../hooks/useLanguage';

export default function VidMayLikeCard({data}) {
    const formattedTime = format( new Date( data.publishTime ), "MMMM d, yyyy, h:mm a" );
    const { currentLanguage } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();

    const handleVdoCard = () =>
    {
        const basePath = pathname.split( '/' )[ 1 ]; 
        const newPath = `/${basePath}/videos/${data.videoId}`;
    
        // console.log( pathname, currentLanguage.value, newPath );
        router.push( newPath );
    };

    return (
        <div onClick={handleVdoCard} className="flex items-start space-x-4 cursor-pointer hover:shadow-sm hover:shadow-white rounded-md p-1">
            <Image src={ data.thumbnail } height={ 100 } width={ 140 } alt="Fallout Shelter PC Thumbnail"
                className="w-30 h-20 rounded object-cover" />
            <div>
                <h3 className="font-semibold">{ data.title }</h3>
                <p className="text-sm text-gray-400">{ data.channelTitle }</p>
                <p className="text-sm text-gray-400">{ formattedTime }</p>
            </div>
        </div>
    );
};
