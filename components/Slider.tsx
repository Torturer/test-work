import { FC, useEffect, useState } from "react";
import styles from "../src/styles/components/Slider.module.scss";
import Image from "next/image";
import productImage from "../public/MaestroPro-Transparent-1536x1209 1.png";

interface IProduct {
    _id: string;
    name: string;
    title: string;
}

interface ISliderData {
    _id: string,
    index: number
}

const Slider: FC = (): JSX.Element => {

    const dataProduct: IProduct[] = [
        {
            _id: "2346v245ujg",
            name: "Meltem V-II 30-N",
            title: "Відцентровий витяжний вентилятор",
        },
        {
            _id: "5br6u3434",
            name: "Meltem V-II 30-N",
            title: "Відцентровий витяжний вентилятор",
        },
        {
            _id: "wertb5474",
            name: "Meltem V-II 30-N",
            title: "Відцентровий витяжний вентилятор",
        }
    ];

    const [targetSliderData, setTargetSliderData] = useState<ISliderData>({
        _id: dataProduct[0]._id,
        index: 0,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTargetSliderData((prev) => {
                if (prev.index < dataProduct.length - 1) {
                    return {
                        _id: dataProduct[prev.index + 1]._id,
                        index: prev.index + 1
                    }
                } else {
                    return {
                        _id: dataProduct[0]._id,
                        index: 0
                    }
                }
            })
         
        }, 7000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <div className={styles.product_range_card}>
                    <h2>Meltem</h2>
                    <p>
                        Meltem – це гарантовано якісне вентиляційне обладнання від
                        німецького заводу.
                    </p>
                    <div className={styles.button_range}>Продукція</div>
                </div>
                <div className={styles.slider_box}>
                    {dataProduct.map((item) => (
                        <div
                            key={item._id}
                            className={`${styles.product_card} ${targetSliderData._id === item._id ? styles.active : ""}`}
                        >
                            <Image
                                src={productImage}
                                width={560}
                                height={377}
                                quality={100}
                                alt="Product image"
                            />
                            <div className={styles.product_info}>
                                <h3>{item.title}</h3>
                                <p>{item.name}</p>
                                <div className={styles.button_info}>Детальніше</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.paggination}>

                {
                    dataProduct.map((item) => {
                        return (
                            <div className={`${styles.strip} ${targetSliderData._id !== item._id && styles.deactive}`} key={item._id}></div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Slider;