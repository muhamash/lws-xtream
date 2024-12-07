'use client';

import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { getDictionary } from "../utils/dictionary.js";

export default function NotFoundPage() {
    const [ language, setLanguage ] = useState( null );
    const { currentLanguage } = useLanguage();

    useEffect( () =>
    {
        const fetchLanguage = async () =>
        {
            try
            {
                const langData = await getDictionary( currentLanguage.value );
                setLanguage( langData );
            } catch ( error )
            {
                console.error( "Failed to fetch dictionary:", error );
            }
        };

        fetchLanguage();
    }, [ currentLanguage.value ] );

  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <div className="loader"></div>
      <div>
              {
                  language ? (
                      <p className="text-rose-600 font-mono text-xl">{language?.notFound?.title}</p>
                  ) : (
                          <span className="globalNotLoader"></span>
                  )
        }
      </div>
    </div>
  );
}