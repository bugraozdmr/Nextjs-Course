import React from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/MealsGrid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
import Loading from './loading-out'

export const metadata ={
  title: 'All Meals',
  description: 'Browse the delicious meals from here'
}


async function Meals(){
  const meals = await getMeals();

  return <MealsGrid meals={meals} />
}

// cta -- call to action
export default async function page() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself.It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share' >
            Share your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* cok daha guzel yontem -- sayfa ustu geliyor database tarafı bekleniyor */}
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
