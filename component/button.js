import styles from "@/styles/button.module.css"
import { useState, useEffect } from 'react';

const Button = () => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [targetNumber, setTargetNumber] = useState(null);
    const [isIncreasing, setIsIncreasing] = useState(null);

    useEffect(() => {
        let timer;
        if (targetNumber !== null && currentNumber !== targetNumber) {
            timer = setInterval(() => {
                setCurrentNumber((prev) => {
                    if (prev < targetNumber) {
			setIsIncreasing(true);
                        return prev + 1;
                    } else if (prev > targetNumber) {
			setIsIncreasing(false);
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
	  {[1, 2, 3, 4, 5].map((num) => (
            <button
		key={num}
                onClick={() => handleClick(num)}
                type="button"
                className={styles[`button_0$(num)`]}
            >
	       {num}
            </button>
	  ))}

            <div className={styles.monitor}>
                {currentNumber > 0 && <span>{currentNumber}</span>}
	    	{isIncreasing !== null && (
			<span>
				{isIncreasing ? "上昇中" : "降下中"}
			</span>
		)}
            </div>
        </div>
    )
}
export default Button
