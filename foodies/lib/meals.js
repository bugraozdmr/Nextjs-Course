

const { default: slugify } = require("slugify");
import xss from 'xss';

import sql from 'better-sqlite3'
import fs from 'node:fs'
import { randomGenenator } from '@/helpers/helper';



const db = sql('meals.db');

// insert -> run() , fetch -> all() , single row -> get()
export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve,2000));

    //throw new Error('error');
    return db.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug){
    // for protection dynamic
    return db.prepare('Select * From meals WHERE slug = ?').get(slug);   
}


export const saveMeal = async (meal) => {
    // slug olustu
    meal.slug = slugify(meal.title,{lower:true});
    // xss aciklari icin ekstra
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}-${randomGenenator()}.${extension}`;
    
    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();


    

    stream.write(Buffer.from(bufferedImage),(error) => {
        if(error){
            throw new Error('Could not save the image');
        }
    });

    // otomatik public altina olacagini bilir zaten
    meal.image = `/images/${filename}`;


    console.log(meal);

    db.prepare(`
        INSERT INTO meals
            (title,summary,instructions,creator,creator_email,image,slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
         )
        `).run(meal);
}