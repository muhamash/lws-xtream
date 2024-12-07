'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "../../../../utils/dictionary";

export default function VideoNotFound() {
    const params = useParams();
    const [language, setLanguage] = useState(null);

    useEffect( () =>
    {
        const fetchLanguage = async () =>
        {
            if ( params?.lang )
            {
                try
                {
                    const langData = await getDictionary( params.lang );
                    setLanguage( langData );
                } catch ( error )
                {
                    console.error( "Failed to fetch dictionary:", error );
                }
            }
        };

        fetchLanguage();
    }, [ params?.lang ] );

    return (
        <div className="text-center flex flex-col items-center justify-center gap-5">
            <div className="vidNotFound"></div>
            {
                !language && (<span className="globalNotLoader"></span>)
            }
            <h1 className="text-xl font-bold">{language?.vidNotFound?.title}</h1>
            <p>
                {language?.vidNotFound?.textOne}{" "}
                <strong className="text-bold font-mono text-rose-500">{params?.videoId}</strong>{" "}
                {language?.vidNotFound?.textTwo}
            </p>
        </div>
    );
}