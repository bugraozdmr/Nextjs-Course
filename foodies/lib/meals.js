import sql from 'better-sqlite3'

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
