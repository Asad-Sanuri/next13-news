import { Toolbar } from '../../components/toolbar';
import Link from 'next/link';
import styles from '../../styles/feed.module.css';
import Head from 'next/head';

const Feed = ({ pageNumber, articles }) => {    
    return (
        <>
            <Head>
                <title>Feed</title>
                <meta
                    name="description"
                    content="News Feed"
                />
            </Head>        
            <div className='page-container'>
                <Toolbar />
                <div className={styles.main}>                    
                    {articles.map((article, index) => (
                        <div key={index} className={styles.post}>
                            <h1><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></h1>
                            <p>{article.description}</p>
                            {!!article.urlToImage && <a href={article.url} target="_blank" rel="noreferrer"><img src={article.urlToImage} alt=""/></a>}                    
                        </div>
                    ))}                    
                </div>
        
                <div className={styles.paginator}>
                    <div>           
                        <Link href={pageNumber > 1 ? `/feed/${pageNumber - 1}` : `/feed/${pageNumber}`}
                        className={pageNumber === 1 ? styles.disabled : styles.active}
                        tabIndex={pageNumber === 1 ? '-1' : '0'}>
                            Previous Page
                        </Link>                                                                                                
                    </div>
                    <div><h3>#{pageNumber}</h3></div>
                    <div>
                        <Link href={pageNumber < 5 ? `/feed/${pageNumber + 1}` : `/feed/${pageNumber}`}
                        className={pageNumber === 5 ? styles.disabled : styles.active}
                        tabIndex={pageNumber === 5 ? '-1' : '0'}
                        >
                            Next Page
                        </Link>
                    </div>
                </div>  
            </div>
        </> 
        );
    };

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.page_id;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5){
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=gb&pageSize=7&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );

    const apiJson = await apiResponse.json();
    
    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
};

export default Feed;