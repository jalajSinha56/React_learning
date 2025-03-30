import styles from "./Item.module.css"

const Item = ({ fts }) => {

    const buttonevent = () =>{
        console.log(`${fts} is bought`)
    }

    return (
        <li className={`${styles["kg-item"]}`}>
            <span className={styles["kg-span"]}>{fts}</span>
            <button type="button" className={styles["button"]}
            onClick = {buttonevent}>
                Buy</button>
        </li>
    );
};

export default Item;