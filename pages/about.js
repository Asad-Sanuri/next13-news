import styles from '../styles/about.module.css';
import { Toolbar } from '../components/toolbar';
import Image from 'next/image';
import Head from 'next/head';

export const About = ({ person }) => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta
                    name="description"
                    content={`My name is ${person.name}`}
                />

                <meta property="og:image" content={person.image} />
                <meta property="og:title" content="About me" />
                <meta
                    property="og:description"
                    content={`I'm a web developer, martial arts practitioner, gamer and occasional singer. I've been learning how to code for about 2 years and I've been focusing on front-end development.`}
                />

                <meta property="twitter:image" content={person.image} />
                <meta property="twitter:title" content="About me" />
                <meta
                    property="twitter:description"
                    content={`My name is ${person.name}`}
                />
            </Head>

            <div className='page-container'>
                <Toolbar />
                <div className={styles.main}>
                    <h1>About me</h1>                       
                    <div className={styles.person}>
                        <h3>{person.name}</h3>
                        <h5>{person.position}</h5>
                        <Image src={person.image} alt="Asad Sanuri" width={250} height={250} />
                        <p>{person.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch ('https://my-json-server.typicode.com/asad-sanuri/next13-news/person',);
    const person = await apiResponse.json();
    return {
        props: {
        person: person
        }
    }
};       

export default About;