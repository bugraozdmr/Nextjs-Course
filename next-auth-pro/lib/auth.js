import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from "lucia";
import { cookies } from "next/headers";
import db from './db';

// database'den aliyor bunlari
const adapter = new BetterSqlite3Adapter(db, {
    user: 'users',
    session: 'sessions'
});

// secure https isterim diyor
const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production',
        }
    }
});

export async function createAuthSession(userId){
    const session = await lucia.createSession(userId,{});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}

export async function verifyAuth(){
    const sessionCookie = cookies().get(lucia.sessionCookieName);

    if(!sessionCookie){
        return {
            user: null ,
            session: null
        };
    }

    const sessionId = sessionCookie.value;

    if(!sessionId){
        return {
            user: null ,
            session: null
        };
    }

    const result = await lucia.validateSession(sessionId);

    try{
        if(result.session && result.session.fresh ){
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }
        if(!result.session){
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }
    }
    catch(e){
        // next bunu try catch icinde ister
    }

    return result;

    // donen deger yukardi user, session gibi bu arada
}

export async function destroySession(){
    const {session} = await verifyAuth();
    
    if(!session){
        return {
            error:'Unauthorized'
        }
    }
    console.log(1111)
    // session bozuldu
    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}