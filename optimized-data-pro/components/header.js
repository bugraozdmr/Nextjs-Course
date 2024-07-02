import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

// logo.src yapmadik tum bilesenleri ile verdi logo'yu
// next artık resimleri render ederken daha kucuk olur width heigth verince
// priority lazy loading devre disi kalir oncelikli
export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        <Image 
        src={logo} 
        width={100} 
        heigth={100} 
        // bu da verir
        //sizes='10vw'
        priority
        alt="Mobile phone with posts feed on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className='cta-link' href="/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
