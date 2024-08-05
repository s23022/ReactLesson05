import styles from "@/styles/button.module.css"

const Button = () => {
    return (
        <div className={styles.button_all}>
            <button
                type="button"
                className={styles.button_01}
            >1</button>

            <button
                type="button"
                className={styles.button_02}
            >2</button>

            <button
                type="button"
                className={styles.button_03}
            >3</button>

            <button
                type="button"
                className={styles.button_04}
            >4</button>

            <button
                type="button"
                className={styles.button_05}
            >5</button>
        </div>
    )
}
export default Button