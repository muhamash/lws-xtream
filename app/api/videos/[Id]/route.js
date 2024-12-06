import { getUpdateVid, getVidById } from "../../../../utils/getVidData";

export async function GET(request, context) {
    try {
        const dataId = context.params.Id;
        // console.log(context)
        if ( !dataId )
        {
            return new Response(JSON.stringify({ error: "ID parameter is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const dataSet = await getVidById(dataId);

        if (!dataSet) {
            return new Response(JSON.stringify({ error: "No data found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify(dataSet), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: `Failed to fetch data; ${error}` }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function PATCH ( request, context )
{
    try
    {
        // console.log( request, context );
        const dataId = context.params.Id;
        const body = await request.json();
        console.log(body, dataId)
        const { title, description } = body;

        if ( !dataId )
        {
            return new Response( JSON.stringify( { error: "ID parameter is required" } ), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            } );
        }

        if (!title && !description) {
            return new Response( JSON.stringify( { error: "title or description must be provided" } ), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            } );
        }

        const updatedVid = await getUpdateVid( dataId, { title, description } );

        if (!updatedData) {
            return new Response( JSON.stringify( { error: "Video not found" } ), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            } );
        }

        return Response( JSON.stringify( updatedData ), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        } );
    }
    catch (error) {
        // console.error("Error updating video:", error);
        return new Response(JSON.stringify({ error: `Failed to update video data; ${error}` }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

};