import { Toolbar } from '../components/toolbar';
import styles from '../styles/home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() { 
  return (
    <>
      <Head>
        <title>Next News</title>
                  <meta
                      name="description"
                      content='Welcome to my Next.js News App. Read the latest news articles by clicking on Feed'
                  />

                  <meta property="og:image" content="https://next13-news.vercel.app/_next/static/media/Lakeside.6a3c0d8e.jpg" />
                  <meta property="og:image:type" content="image/jpg" />                  
                  <meta property="og:image:width" content="300" />
                  <meta property="og:image:height" content="200" />
                  <meta property="og:title" content='Next News' />
                  <meta
                      property="og:description"
                      content='Welcome to my Next.js News App. Read the latest news articles by clicking on Feed'
                  />

                  <meta property="twitter:image" content="https://next13-news.vercel.app/_next/static/media/Lakeside.6a3c0d8e.jpg" />
                  <meta property="twitter:image:width" content="300" />
                  <meta property="twitter:image:height" content="200" />
                  <meta property="twitter:title" content='Next News' />
                  <meta
                      property="twitter:description"
                      content='Welcome to my Next.js News App. Read the latest news articles by clicking on Feed'
                  />  
      </Head>
          
      <div className='page-container'>      
        <Toolbar />            
        <div className={styles.main}>
         {/* <img className={styles.lakeside} src='Lakeside.jpg' alt='Lakeside'/>  */}               
          <h1>Welcome to my Next.js News App</h1>
          <h3>Read the latest news articles by clicking on <Link href="/feed/1" className={styles.underlined}>Feed</Link></h3>                               
        </div>
      </div>
    </>   
  );
};
