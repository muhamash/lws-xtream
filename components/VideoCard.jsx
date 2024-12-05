import Image from 'next/image';

export default function VideoCard ( { data } ) {
    return (
        <div
            className="rounded-lg overflow-hidden bg-color-gray hover:shadow-sm hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-green-600">
            <Image width={300} height={250} src={data.thumbnail} className="w-full h-40 object-cover" />
            <div className="p-2">
                <p className="font-semibold">{ data.title }</p>
                <p className="text-sm text-gray-400">{ data.channelTitle }</p>
            </div>
        </div>
    );
}