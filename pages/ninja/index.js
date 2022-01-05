import styles from '../../styles/Ninja.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {ninjas:data}
    }
}

const Home = ({ninjas}) => {
    return ( 
         <div>
             <h1>
                 All ninja  
             </h1>
            {ninjas.map(ninja => (
                <Link href={`/ninja/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
         </div>
     );
}
 
export default Home;