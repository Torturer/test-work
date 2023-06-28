import Head from 'next/head'
import { NextPage } from 'next'
import Slider from '../../components/Slider'
import PopupForm from '../../components/PopupForm'
import { useState } from 'react'
import NavBar from '../../components/NavBar'
import styles from "../styles/components/Layout.module.scss"
import PopupCookies from '../../components/PopupCookies'



const Home: NextPage = () => {

  const [togglePopupForm, setTogglePopupForm] = useState(false)
  const [coockiesSubmit, setCoockiesSubmit] = useState(true)

  const popupHandler = (value: boolean): void => setTogglePopupForm(value)
  const switchFun = (): void => setCoockiesSubmit((prev) => !prev)


  return (
    <div className={styles.container}>
      <NavBar popupHandler={popupHandler} />
      <Head>
        <title>Test with Next</title>
        <meta name="description" content="This app build with Next.js fro test work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Slider />

      {
        togglePopupForm ?
          <PopupForm popupHandler={popupHandler} />
          :
          null
      }

      {
        coockiesSubmit ?
          <PopupCookies switchFun={switchFun} />
          :
          null
      }


    </div>

  )
  }

  export default Home 