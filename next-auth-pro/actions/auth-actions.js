'use server';

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

// ilkine ihtiyacimiz yok ancak kullanilmali
export async function signup(prevState, formData){
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if(!email.includes('@')){
        errors.email = 'Email is not valid';
    }

    if(password.trim().length < 8){
        errors.password = 'Password must be at least 8 characters long';
    }

    // donen deger yeni formState oluyor
    if(Object.keys(errors).length > 0) {
        return {
            errors:errors
        }
    }

    const hashedPassword = hashUserPassword(password);

    try{
        const id = createUser(email, hashedPassword);
        createAuthSession(id);
        redirect('/training');
    }
    catch(error){
        console.log('hata no',error.code)
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return {
                errors: {
                    email : 'This email already exists.'
                }
            }
        };

        throw error;
    }

    redirect('/training');
}

export async function login(prevState,formData){
    const email = formData.get('email');
    const password = formData.get('password');

    const existingUser = getUserByEmail(email);

    if(!existingUser){
        return {
            errors: {
                email: 'Could not authenticate user, please check your credentials.'
            }
        }
    }

    const isValidPassword = verifyPassword(existingUser.password, password);
    if(!isValidPassword){
        return {
            errors: {
                email: 'Could not authenticate user, please check your credentials.'
            }
        }
    }

    await createAuthSession(existingUser.id);
    redirect('/training');
}


// gelen moda gore ilgili fonk donecek
export async function auth(mode, prevState, formData){
    if(mode === 'login'){
        return login(prevState, formData);
    }

    return signup(prevState, formData);
}

export async function logout(){
    await destroySession();
    redirect('/');
}