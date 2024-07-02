import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache'

// sayfada tanimlama
//export const revalidate = 5;

//export const dynamic = 'auto';
// surekli yenile
//export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  // tutma diyor cacheleme -- cache: 'no-store'
  // 6 sn sonra cachlemeyi yenile
  /*
  ,{
    next:{
      revalidate: 5
    }
  }
     */


  // birden fazla comp. varsa ve sadece 1 tanesi cache olsun isteniyorsa bu kullanılır
  //unstable_noStore();


  

  /*
  const response = await fetch('http://localhost:8080/messages',{
    next: {tags:['msg']},
  });
  
  const messages = await response.json();
  */

  // unstableCache' e gecince next icin await gerekti
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
