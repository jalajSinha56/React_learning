import styles from './Container.module.css';

const Container = () => {
    return <div classname={styles.container}>{props.children}</div>;
}

export default Container