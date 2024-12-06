
export default function VideoNotFound ( { params, id } )
{
    // console.log(params, id)
    return (
        <div className="text-center flex flex-col items-center justify-center gap-5">
            <div className="vidNotFound"></div>
            <h1 className="text-xl font-bold">Video Not Found</h1>
            <p>
                This video with <strong className="text-bold font-mono text-rose-500">{ id }</strong> id was not found!
            </p>
        </div>
    );
}
