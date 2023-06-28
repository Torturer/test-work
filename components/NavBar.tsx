import { FC, useState } from "react";
import Image from "next/image";
import logoImg from "../public/Meltem logo 1.svg"
import styles from "../src/styles/components/NavBar.module.scss"
import Link from "next/link";
import burger from "../public/burger.svg"
import closeBurger from "../public/burger-close.svg"


type IProps = {
    popupHandler: (value: boolean) => void
}

const NavBar: FC<IProps> = ({ popupHandler }): JSX.Element => {
    const [language, setLanguage] = useState("UA"),
        [burgerShow, setBurgerShow] = useState(true)

    return (
        <div className={styles.navBox}>
            <Image className={styles.image} src={logoImg} quality={100} height={30} width={146} alt="It's logo a company" />

            <div className={styles.urlBox}>
                <Link href="">Компанія</Link>
                <Link href="">Продукція</Link>
                <Link href="">Статті</Link>
                <Link href="">Рішення</Link>
                <Link href="">Контакти</Link>
            </div>

            <div className={styles.contactBox}>

                <a className={styles.phone} href="tel:+38000000000">0 (800) 00-00-00</a>

                <div className={styles.button} onClick={() => popupHandler(true)}>Зв’язатись</div>

                <div className={styles.languageBox}>
                    <div
                        className={`${styles.language} ${language === "UA" && styles.language_active}`}
                        onClick={() => setLanguage("UA")}
                    >UA</div>
                    <div
                        className={`${styles.language} ${language === "RU" && styles.language_active}`}
                        onClick={() => setLanguage("RU")}

                    >RU</div>
                </div>

                {burgerShow ?
                    <Image
                        src={burger}
                        width={30}
                        height={25}
                        className={styles.burger}
                        alt="burger button"
                        onClick={() => setBurgerShow((prev) => !prev)}
                    />
                    :
                    <Image
                        src={closeBurger}
                        width={30}
                        height={25}
                        className={styles.burger_close}
                        alt="burger button"
                        onClick={() => setBurgerShow((prev) => !prev)}
                    />
                }

            </div>

            {burgerShow ?
                null
                :
                <div className={styles.collapse}>
                    <div className={styles.contactBox_collapse}>
                        <Link href="">Компанія</Link>
                        <Link href="">Продукція</Link>
                        <Link href="">Статті</Link>
                        <Link href="">Рішення</Link>
                        <Link href="">Контакти</Link>

                        <a className={styles.phone_collapse} href="tel:+38000000000">0 (800) 00-00-00</a>

                    </div>

                    <div className={styles.languageBox}>
                        <div
                            className={`${styles.language} ${language === "UA" && styles.language_active}`}
                            onClick={() => setLanguage("UA")}
                        >UA</div>
                        <div
                            className={`${styles.language} ${language === "RU" && styles.language_active}`}
                            onClick={() => setLanguage("RU")}

                        >RU</div>
                    </div>

                </div>
            }

        </div>
    )
}

export default NavBar