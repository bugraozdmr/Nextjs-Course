import sql from 'better-sqlite3';
import {cache} from 'react';
import {unstable_cache as nextCache} from 'next/cache';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

// tek bir kez ceker -- normalde 2 kere atiyordu
// nextCache unstableCache -- bu agresif caching ama
export const getMessages = nextCache(
  cache(
    function getMessages() {
      console.log('Fetching messages from db');
      return db.prepare('SELECT * FROM messages').all();
    }
  ),['messages'],{
    //revalidate:7
    tags:['msg','ornek'],
  }
)

// messages verilmezse hic cekmez -- klosor ismi
