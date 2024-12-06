import Image from 'next/image';
import { getDictionary } from '../utils/dictionary';

export default async function VideoYouMayLike ( { lang } )
{
    const language = await getDictionary( lang );
    return (
        <div className="lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">{ language.vdoPage.title}</h2>
            <div className="space-y-4">
                <div className="flex items-start space-x-4">
                    <Image src="https://i.ytimg.com/vi/9kjwMTj8ZD0/hqdefault.jpg" height={ 100 } width={ 140 } alt="Fallout Shelter PC Thumbnail"
                        className="w-30 h-20 rounded object-cover" />
                    <div>
                        <h3 className="font-semibold">Fallout Shelter PC - Ep. 1</h3>
                        <p className="text-sm text-gray-400">Blitz</p>
                        <p className="text-sm text-gray-400">26,389M</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Image src="https://i.ytimg.com/vi/Ij7FWQJR0e8/hqdefault.jpg" height={ 100 } width={ 140 } alt="Resident Evil Remastered Thumbnail"
                        className="w-30 h-20 rounded object-cover" />
                    <div>
                        <h3 className="font-semibold">Resident Evil Remastered Walkthrough</h3>
                        <p className="text-sm text-gray-400">theRadBrad</p>
                        <p className="text-sm text-gray-400">16,426M View now</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Image src="https://i.ytimg.com/vi/F8BactAXOH4/hqdefault.jpg" height={ 100 } width={ 140 } alt="Open World Games Thumbnail"
                        className="w-30 h-20 rounded object-cover" />
                    <div>
                        <h3 className="font-semibold">Top 10 BIGGEST OPEN WORLD Games</h3>
                        <p className="text-sm text-gray-400">Lazy Assassin</p>
                        <p className="text-sm text-gray-400">7,694M View now</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
