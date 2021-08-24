import Head from 'next/head'
import { useEffect, useState } from "react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Web3 = require('web3')
import Cookies from 'universal-cookie'

export default function Home() {
  const [userAddress, setUserAddress] = useState('CONNECT');
  const cookies = new Cookies();
  useEffect(() => {
     if(cookies.get('primaryAddress')){
        setUserAddress(cookies.get('primaryAddress'))
     }
  });

  const requestMetamaskAccount = async() => {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    if(accounts.length > 0) {

      var _acc = accounts;
      console.log('Wallet:')
      console.log(_acc)
      cookies.set('primaryAddress', _acc[0], { path: '/' });
      setUserAddress( _acc[0])
    }
  }

  return (
  	<div>
      <Head>
        <title>PIGGY - Launchpad</title>
        <meta name="description" content="Launch and lock your tokens safely" />
        <link rel="icon" href="assets/launch.svg" />
      </Head>
      <nav className={styles.navbar}>
          <img src='/assets/logo.png'/>
          <li><a href='/list'>Recent Launches</a></li>
          <li><a href="https://pancakeswap.finance/">Pancake Swap</a></li>
          <li><a href='https://uniswap.org/'>Uniswap</a></li>
          <button onClick={requestMetamaskAccount}>{userAddress.substring(0,12)}...</button>
      </nav>
    </div>
  	)}