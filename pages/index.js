import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ColorButton from "../components/colorButton";
import Country from "../components/country";
/** @jsxImportSource theme-ui */

export default function Home() {
  return (
    <div>
      <Head>
        <title>The World</title>
        <meta
          name="description"
          content="What if you could go anywhere in the world... where would you go?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className={styles.titleBg} sx={{backgroundColor: 'text'}}>
        <ColorButton className={styles.toggle} sx={{backgroundColor: 'text', color: 'background'}}/>
          <h2 sx={{color: 'background'}}>what if you knew a less-known country for each</h2>
          <h1 sx={{color: 'background'}}>letter of the alphabet?</h1>
          <p sx={{color: 'background'}}>KEY: 🌎 continent  💰 currency  📢 language  📞 calling code  ⛰ total area</p>
          </div>
                <div 
          sx={{
            display: "grid",
            gridTemplateColumns: [
              "repeat(1, minmax(0, 1fr))",
              "repeat(2, minmax(0, 1fr))",
              "repeat(3, minmax(0, 1fr))",
              "repeat(4, minmax(0, 1fr))",
            ],
            placeItems: "center",
          }}
        >
        <Country 
          fullName="Afghanistan 🇦🇫" 
          currency="Afghani" 
          language="Dari Persian & Pashtu" 
          region="Asia" 
          area="250,000 sq mi" 
          callingCode="+93" 

          className={styles.countryCard}
        />

          <Country
            fullName="Bahamas 🇧🇸"
            currency="Bahamian dollar"
            language="English"
            region="North America"
            area="15,382 sq mi"
            callingCode="+1 242"

            className={styles.countryCard}
          />

          <Country
            fullName="Côte D'Ivoire 🇨🇮"
            currency="CFA Franc"
            language="French"
            region="Africa"
            area="124,502 sq mi"
            callingCode="+225"

            className={styles.countryCard}
          />      
           <Country
            fullName="Djibouti 🇨🇩"
            currency="Djibouti franc"
            language="French and Arabic"
            region="Africa"
            area="8,880 sq mi"
            callingCode="+253"

            className={styles.countryCard}
          />       
           <Country
            fullName="Eritrea 🇪🇷"
            currency="Nakfa"
            language="Tigrinya, English and Arabic"
            region="Africa"
            area="46,842 sq mi"
            callingCode="+291"

            className={styles.countryCard}
          />    
          <Country
            fullName="Fiji 🇫🇯"
            currency="Fiji dollar"
            language="English and Fijian"
            region="Oceania"
            area="7,054 sq mi"
            callingCode="+679"

            className={styles.countryCard}
          />   
          <Country
            fullName="Grenada 🇬🇩"
            currency="East Caribbean dollar"
            language="English"
            region="North America"
            area="131 sq mi"
            callingCode="+1 473"

            className={styles.countryCard}
          />   
          <Country
            fullName="Honduras 🇭🇳"
            currency="Lempira"
            language="Spanish"
            region="North America"
            area="43,278 sq mi"
            callingCode="+504"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Indonesia 🇮🇩"
            currency="Rupiah"
            language="Bahasa Indonesia"
            region="Asia"
            area="741,096 sq mi"
            callingCode="+62"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Jordan 🇯🇴"
            currency="Rupiah"
            language="Jordanian dinar"
            region="Asia"
            area="34,495 sq mi"
            callingCode="+962"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Kiribati 🇰🇮"
            currency="Australian dollar"
            language="English"
            region="Oceania"
            area="313 sq mi"
            callingCode="+686"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Liechtenstein 🇱🇮"
            currency="Swiss Franc"
            language="German"
            region="Europe"
            area="62 sq mi"
            callingCode="+432"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Malaysia 🇱🇮"
            currency="Ringgit"
            language="Bahasa Melayu"
            region="Asia"
            area="127,316 sq mi"
            callingCode="+60"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Nicaragua 🇳🇮"
            currency="Gold cordoba"
            language="Spanish"
            region="North America"
            area="49,998 sq mi"
            callingCode="+505"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Oman 🇴🇲"
            currency="Omani rial"
            language="Arabic"
            region="Asia"
            area="82,031 sq mi"
            callingCode="+968"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Qatar 🇶🇦"
            currency="Qatari riyal"
            language="Arabic"
            region="Asia"
            area="4,416 sq mi"
            callingCode="+974"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Rwanda 🇷🇼"
            currency="Rwanda franc"
            language="Kinyarwanda, French, and English "
            region="Africa"
            area="10,169 sq mi"
            callingCode="+250"

            className={styles.countryCard}
          /> 
          <Country
            fullName="Uruguay 🇺🇾"
            currency="Uruguay peso"
            language="Spanish, Portunol, and Brazilero"
            region="South America"
            area="67,035 sq mi"
            callingCode="+598"

            className={styles.countryCard}
          />
          <Country
            fullName="Vanuatu 🇻🇺"
            currency="Vatu"
            language="Bislama"
            region="Oceania"
            area="4,710 sq mi"
            callingCode="+678"

            className={styles.countryCard}
          />
          <Country
            fullName="Western Sahara 🇪🇭"
            currency="Tala"
            language="Arabic"
            region="Africa"
            area="102,703 sq mi"
            callingCode="+212"

            className={styles.countryCard}
          />
          <Country
            fullName="Yemen 🇾🇪"
            currency="Yemen Rial"
            language="Arabic"
            region="Asia"
            area="203,849 sq mi"
            callingCode="+967"

            className={styles.countryCard}
          />
          <Country
            fullName="Zimbabwe 🇿🇼"
            currency="Zimbabwean dollar"
            language="Shona"
            region="Africa"
            area="149,293 sq mi"
            callingCode="+263"

            className={styles.countryCard}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://codeday.com"
          target="_blank"
          rel="noopener noreferrer"
        >Made by Ice Bear 🐻‍❄️ with &hearts; for Virtual CodeDay 2021,
        </a>
        <a sx={{fontWeight: 'bold'}}
        href="https://www.infoplease.com/world/countries"
        target="_blank"
        > info from Infopleas
        </a>

      </footer>
    </div>
  );
}

//thank you isey for your help 💖