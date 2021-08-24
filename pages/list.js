import Head from 'next/head'
import Image from 'next/image'
import Header from './header.js'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import Select from 'react-select';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'Pancake Swap', label: 'Pancake Swap' },
    { value: 'Uniswap', label: 'Uniswap V2' }];



  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.box_wrapper}>
          <div className={styles.hero_box}>
              <img src='/assets/launch.svg'/>
              <h2>Tokens and Liquidity Locked</h2>
              <p>Total of $0 locked in tokens and liquidity pairs. <br/>This includes ILOs tokens.</p>
              <div className={styles.chainer_wrapper}>
                <div className={styles.chainer}>
                    <img src='https://app.unicrypt.network/img/token.b4c6e3e6.svg'/> 
                    <p>Tokens</p>
                </div>
                <div className={styles.chainer}>
                    <img style={{filter: 'grayscale(100%)'}}  src='https://app.unicrypt.network/img/token.b4c6e3e6.svg'/> 
                    <p>Pairs</p>
                </div>
                <div className={styles.chainer}>
                    <img src='https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9/logo.png'/> 
                    <p>ILOs</p>
                </div>
              </div>

              <input className={styles.tokenAddress} placeholder='Search by token/pair address...' />
              <button className={styles.createPair}>Search Pair</button>
          </div>
      </div>
    </div>
  )
}
