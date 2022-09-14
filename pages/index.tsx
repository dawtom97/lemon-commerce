import { useApolloClient } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GENERATE_TOKEN } from '../apollo/mutations/generateToken'
import { useLoginUser } from '../hooks/useLoginUser'
import styles from '../styles/Home.module.css'


const Home: NextPage | any = () => {

  const {data,loading} = useLoginUser();
  const client = useApolloClient();

  if(loading) return "Loading..."
  console.log(client)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>STRONA GłÓWNA</h1>
      <button onClick={()=>{
      // client.resetStore();
       client.cache.reset()
       localStorage.setItem("token","");
       console.log(localStorage.getItem("token"))
      }}>Wyloguj</button>

      {data && <p>{data.customer.firstname}</p>}

    </div>
  )
}

export default Home
