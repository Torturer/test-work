import { FC } from "react"
import styles from "../src/styles/components/PopupCookies.module.scss"

type IProps = {
    switchFun: () => void 
}

const PopupCookies: FC<IProps> = ({switchFun}): JSX.Element => {
    return (
        <div className={styles.coockies_box}>

            <div className={styles.coockies_info}>Використовуючи цей сайт, ви даєте згоду на роботу з файлами <span>сookies</span>.</div>
            <div 
            className={styles.coockies_button}
            onClick={() => switchFun()}
            >Згоден</div>
        </div>
    )
}

export default PopupCookies