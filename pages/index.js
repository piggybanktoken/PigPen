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
              <h2>Launchpad</h2>
              <p>Raise capital to kick start your blockchain project. <br/>Decentralised presale service</p>
              <div className={styles.chainer_wrapper}>
                <div className={styles.chainer}>
                    <img src='/assets/uniswap.png'/> 
                    <p>Uniswap</p>
                </div>
                <div className={styles.chainer}>
                    <img src='https://cryptologos.cc/logos/pancakeswap-cake-logo.svg?v=010'/> 
                    <p>Pancake</p>
                </div>
              </div>

              <input className={styles.tokenAddress} placeholder='Token address...' />
              <button className={styles.createPair}>Create ETH / ? Pair</button>
          </div>
          <div className={styles.hero_box}>
              <img src='/assets/locker.svg'/>
              <h2>Token Timelock</h2>
              <p>Lock your very own tokens<br/>Send tokens to someone else that are locked for a configurable period </p>
              <div className={styles.input_filter}>
                <Select
                      classNamePrefix="react-select"
                      className={styles.input_select}
                      value={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      placeholder={options[0].label}/>
              </div>
              <input className={styles.tokenAddress } placeholder='Token address...' />
              <button className={styles.createPair}>Lock Tokens</button>
          </div>
      </div>
    </div>
  )
}
