'use client';

import {useFormStatus} from 'react-dom'

// bu status submit sonrasi bilgi verir --- submit icin formlar lazim -- ve form taglari icinde olmali
// buton kismi icin gerekli
export default function FormSubmit() {
    const status = useFormStatus();

    if(status.pending){
        return <p>Creating post</p>
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    );
}
