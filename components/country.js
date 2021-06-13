/** @jsxImportSource theme-ui */
import styles from "../styles/Home.module.css";

export default function Country({fullName, currency, language, capitalCity, region, callingCode}) {
return (
    <div className={styles.countryCard}
    >
        <h1 sx={{color: 'text'}}>{fullName}</h1>
        <a className={styles.tag} sx={{backgroundColor: 'text', color: 'background'}}>🌎 {region}</a>
        <a className={styles.tag} sx={{backgroundColor: 'text', color: 'background'}}>💰 {currency}</a>
        <a className={styles.tag} sx={{backgroundColor: 'text', color: 'background'}}>📢 {language}</a>
        <a className={styles.br} />
        <a className={styles.tag} sx={{backgroundColor: 'text', color: 'background'}}>📞 {callingCode}</a>
        <a className={styles.tag} sx={{backgroundColor: 'text', color: 'background'}}>🌟 {capitalCity}</a>
    </div>
);
}
