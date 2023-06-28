import { useEffect, useState } from "react";
import styles from "../src/styles/components/PopupForm.module.scss";
import flag from "../public/Rectangle 799.png";
import closeButtom from "../public/burger-close.svg";
import Image from "next/image";

import InputMask from "react-input-mask";
import SuccesPopup from "./SuccesPopup";

type IProps = {
    popupHandler: (value: boolean) => void;
};

const PopupForm = ({ popupHandler }: IProps): JSX.Element => {
    const [state, setState] = useState({
        succesSend: true,
        phoneNumber: "",
        phoneNumberError: true,
        name: "",
        nameError: true,
        formSubmitAvtive: false
    });

    const switchHandle = () => {
        if (state.formSubmitAvtive) {
            setState(prevState => ({ ...prevState, succesSend: false }));
            setTimeout(() => {
                popupHandler(false);
            }, 3000);
        }
    };

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            phoneNumberError: state.phoneNumber.includes("_") || !state.phoneNumber.length
        }));
    }, [state.phoneNumber]);

    useEffect(() => {
        setState(prevState => ({ ...prevState, nameError: state.name.length < 3 }));
    }, [state.name]);

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            formSubmitAvtive: !state.phoneNumberError && !state.nameError
        }));
    }, [state.phoneNumberError, state.nameError]);

    return (
        <div className={styles.background}>
            {state.succesSend ? (
                <div className={styles.container}>
                    <Image
                        src={closeButtom}
                        height={22}
                        width={22}
                        alt="Close buttom"
                        onClick={() => popupHandler(false)}
                        priority
                    />

                    <h3 className={styles.head}>Залишайте заявку</h3>

                    <p className={styles.title}>Ми зв’яжемося з вами найближчим часом.</p>
                    <input
                        className={`${styles.name} ${state.nameError && styles.error}`}
                        placeholder="Ваше ім’я*"
                        value={state.name}
                        onChange={e => setState(prevState => ({ ...prevState, name: e.target.value }))}
                    ></input>
                    <div className={styles.flag}>
                        <Image src={flag} alt="Flag country" width={26} height={18} quality={100} priority/>
                        <InputMask
                            mask="+380-99-999-99-99"
                            className={`${styles.phone} ${state.phoneNumberError && styles.error}`}
                            placeholder="+380-00-000-00-00*"
                            type="tel"
                            value={state.phoneNumber}
                            onChange={e => setState(prevState => ({ ...prevState, phoneNumber: e.target.value }))}
                        ></InputMask>
                    </div>
                    <div className={styles.button} onClick={switchHandle}>
                        Відправить
                    </div>
                    <p className={styles.text}>
                        Натискаючи кнопку “Надіслати”, ви погоджуєтесь з{" "}
                        <span>Правилами обробки персональних даних.</span>
                    </p>
                </div>
            ) : (
                <SuccesPopup />
            )}
        </div>
    );
};

export default PopupForm;