'use client'

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SwitchSelector from "react-switch-selector";

const LangSwitch = () =>
{
    const router = useRouter();
    const pathname = usePathname();

    const options = [
        {
            label: "বাংলা",
            value: "bn",
            language: 'Bangla',
            selectedBackgroundColor: "#0097e6",
        },
        {
            label: "En",
            value: "en",
            language: 'English',
            selectedBackgroundColor: "#fbc531"
        }
    ];

    const found = options.find(lang => pathname.includes(lang.value));
    const [ selectedLanguage, setSelectedLanguage ] = useState( found.value ?? languages[ 0 ] );

    console.log(found)

    const onChange = ( newValue ) =>
    {
        setSelectedLanguage({...selectedLanguage, value: newValue, language: newValue === 'en' ? 'English' : 'Bangla'});
        router.push( `/${newValue}` );
    };

    const initialSelectedIndex = options.findIndex( ( { value } ) => value === found.value );

    return (
        <div className="your-required-wrapper" style={ { width: 100, height: 30 } }>
            <SwitchSelector
                onChange={ onChange }
                options={ options }
                initialSelectedIndex={ initialSelectedIndex }
                backgroundColor={ "#353b48" }
                fontColor={ "#f5f6fa" }
            />
        </div>
    );
};

export default LangSwitch;