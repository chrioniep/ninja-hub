import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>lorem ipsum over hre lsdjf ks flksdmf slkjdf mksljd flksdj lfjsdl fjlmjqs kj dfmkjsdkljfkl sdlm f </p>
            <p className={styles.text}>lorem ipsum over  slkdjfljs klfmlsjdfjkskdf ksdjflmjsl fslkd flkjsdlklsdjf  skdjf lmksjd fljsm fslmjdfsk dfjm</p>
            <Link href="ninja"><a className={styles.btn}>See ninja listing</a></Link>
      </div>
    </>
  )
}
