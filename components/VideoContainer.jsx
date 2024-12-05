import VideoCard from "./VideoCard";

export default function VideoContainer() {
    return (
        <div className="mt-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Streams of the day</h2>
                <a href="#" className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full">View all</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
};
