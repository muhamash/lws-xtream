import { getDictionary } from "../../../../utils/dictionary";

export default async function VideoNotFound ( { params, id, lang } )
{
    // console.log(params, id)
    const language = await getDictionary( lang );
    // console.log(language)
    return (
        <div className="text-center flex flex-col items-center justify-center gap-5">
            <div className="vidNotFound"></div>
            <h1 className="text-xl font-bold">{language.vidNotFound.title}</h1>
            <p>
                {language.vidNotFound.textOne} <strong className="text-bold font-mono text-rose-500">{ id }</strong> {language.vidNotFound.textTwo}
            </p>
        </div>
    );
}
