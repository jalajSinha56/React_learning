import styles from "./Item.module.css"

const Item = ({ fts }) => {
    return (
        <li className={`${styles["kg-item"]}`}>
            <span className={styles["kg-span"]}>{fts}</span>
        </li>
    );
};

export default Item;