'use client';

import SwitchSelector from "react-switch-selector";
import { useLanguage } from "../hooks/useLanguage";

const LangSwitch = () =>
{
    const { currentLanguage, updateLanguage, options } = useLanguage();
    const initialSelectedIndex = options.findIndex( ( { value } ) => currentLanguage.value === value );

    console.log( currentLanguage.value, initialSelectedIndex );
    return (
        <div className="your-required-wrapper" style={ { width: 100, height: 30 } }>
            <SwitchSelector
                onChange={(newValue) => updateLanguage(newValue)} 
                options={ options.map( ( opt ) => ( {
                    label: opt.label,
                    value: opt.value,
                    selectedBackgroundColor: opt.value === "bn" ? "#0289d2" : "#f5bc21",
                } ) ) }
                forcedSelectedIndex={initialSelectedIndex}
                initialSelectedIndex={ initialSelectedIndex }
                backgroundColor={ "#353b48" }
                fontColor={ "#f5f6fa" }
            />
        </div>
    );
};

export default LangSwitch;