import dynamic from "next/dynamic";
import { getDictionary } from "../utils/dictionary";
import { getVidData } from "../utils/getVidData";

const VideoCard = dynamic( () => import( "./VideoCard" ) );

export default async function VideoContainer ({lang})
{
    const vidData =  await getVidData();
    const language = await getDictionary( lang );
    console.log( language );
    
    return (
        <div className="mt-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{language.home.vdoTitle}</h2>
                <a
                    href="#"
                    className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
                >
                    {language.home.view}
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                { vidData?.map( ( vid ) => (
                    <VideoCard key={ vid.videoId } data={ vid } />
                ) ) }
                {
                    vidData?.length === 0 && ( <p>{language.home.emptyText}</p> )
                }
            </div>
        </div>
    );
}