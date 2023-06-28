// Importing necessary libraries and files
import { FC } from "react";
import styles from "../src/styles/components/SuccesPopup.module.scss";
import Image from "next/image";
import quality from "../public/quality.svg";

// Defining SuccesPopup component as a function component that receives no props
const SuccesPopup: FC = (): JSX.Element => {
    return (
        <div className={styles.box}> {/* Adding a class to the main div element */}

            <Image src={quality} quality={100} width={80} height={80} alt="Succes image" /> {/* Using an image file */}
            <h3 className={styles.title} >Дякуємо
                за заявку!</h3> {/* Adding text to the heading element with a class */}
            <p className={styles.text} >Ваші дані успішно надіслані!</p> {/* Adding text to the paragraph element with a class */}

        </div>
    )
}

export default SuccesPopup; // Exporting SuccesPopup component for other files to use