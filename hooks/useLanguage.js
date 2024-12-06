'use client';

import { usePathname, useRouter } from 'next/navigation';

export const useLanguage = () => {
    const router = useRouter();
    const pathname = usePathname();

    const options = [
        { value: 'bn', label: 'বাং' },
        { value: 'en', label: 'En' },
    ];

    const segments = pathname.split( '/' ).filter( Boolean );
    // console.log(segments[0])
    const currentLanguage = options.find((opt) => opt.value === segments[0]) || 'en';

    const updateLanguage = ( newLang ) =>
    {
        const newSegments = [...segments];
        if (newSegments.length > 0 && options.some((opt) => opt.value === newSegments[0])) {
            newSegments[ 0 ] = newLang;
            // console.log(newSegments)
        } else {
            newSegments.unshift(newLang);
        }
        router.push(`/${newSegments.join('/')}`);
    };

    return { currentLanguage, updateLanguage, options };
};