'use server';

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";

const { redirect } = require("next/navigation");


function isInvalidText(text){
    return !text || text.trim() === ''
}

export const shareMeal = async (prevState ,formData) => {
    const meal = {
        title: formData.get('title'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
    }

    //console.log(meal);

    if(
        isInvalidText(meal.title) ||
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.creator) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ){
        //throw new Error('Invalid Input');

        return {
            message: 'Invalid Input'
        }
    }

    await saveMeal(meal);
    // sadece sayfa yeniden cekilir
    revalidatePath('/meals','page')
    // tum ic ice olan sayfalar tekrar cekilir
    //revalidatePath('/meals','layout')
    redirect('/meals')
}