import styles from "@/styles/button.module.css"
import { useState, useEffect } from 'react';

const Button = () => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [targetNumber, setTargetNumber] = useState(null);

    useEffect(() => {
        let timer;
        if (targetNumber !== null && currentNumber !== targetNumber) {
            timer = setInterval(() => {
                setCurrentNumber((prev) => {
                    if (prev < targetNumber) {
                        return prev + 1;
                    } else if (prev > targetNumber) {
                        return prev - 1;
                    } else {
                        clearInterval(timer);
                        return prev;
                    }
                });
            }, 500); // 0.5秒ごとに次の数字を表示
        }
        return () => clearInterval(timer);
    }, [currentNumber, targetNumber]);

    const handleClick = (num) => {
        setTargetNumber(num);
    };
    return (
        <div className={styles.button_all}>
            <button
                onClick={() => handleClick(1)}
                type="button"
                className={styles.button_01}
            >1
            </button>

            <button
                onClick={() => handleClick(2)}
                type="button"
                className={styles.button_02}
            >2
            </button>

            <button
                onClick={() => handleClick(3)}
                type="button"
                className={styles.button_03}
            >3
            </button>

            <button
                onClick={() => handleClick(4)}
                type="button"
                className={styles.button_04}
            >4
            </button>

            <button
                onClick={() => handleClick(5)}
                type="button"
                className={styles.button_05}
            >5
            </button>

            <div className={styles.monitor}>
                {currentNumber > 0 && <span>{currentNumber}</span>}
            </div>
        </div>

    )
}
export default Button