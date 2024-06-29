'use client'

import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'
import {useFormStatus} from 'react-dom'

// true false pending
export default function MealsFormSubmit() {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending} type="submit">
        {pending ? <CircularProgress disableShrink /> : 'Share Meal'}
    </button>
  )
}
