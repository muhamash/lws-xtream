import { getVidData } from "../../../utils/getVidData";

export async function GET() {
    try {
        const dataSet = await getVidData();

        if (!dataSet || dataSet.length === 0) {
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
        return new Response( JSON.stringify( { error: `Failed to fetch data ${error}` } ), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        } );
    }
}