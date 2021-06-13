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
          <h2 sx={{color: 'background'}}>what if you could travel anywhere in the world,</h2>
          <h1 sx={{color: 'background'}}>where would you go?</h1>
          </div>
                <div
          sx={{
            display: "grid",
            gridTemplateColumns: [
              "repeat(1, minmax(0, 1fr))",
              "repeat(2, minmax(0, 1fr))",
              "repeat(3, minmax(0, 1fr))",
            ],
            placeItems: "center",
          }}
        >
          <Country
            fullName="hi"
            currency="yen"
            language="hii"
            capitalCity="JohorBahru"
            region="Asia"
            callingCode="+60"
          />
          <Country
            fullName="hi"
            currency="yen"
            language="hii"
            capitalCity="JohorBahru"
            region="Asia"
            callingCode="+60"
          />
          <Country
            fullName="hi"
            currency="yen"
            language="hii"
            capitalCity="JohorBahru"
            region="Asia"
            callingCode="+60"
          />
          <Country
            fullName="hi"
            currency="yen"
            language="hii"
            capitalCity="JohorBahru"
            region="Asia"
            callingCode="+60"
          />
          <Country
            fullName="hi"
            currency="yen"
            language="hii"
            capitalCity="JohorBahru"
            region="Asia"
            callingCode="+60"
          />
          <Country
            fullName="hi"
            currency="yen"
            language="hii"
            capitalCity="JohorBahru"
            region="Asia"
            callingCode="+60"
          />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://codeday.com"
          target="_blank"
          rel="noopener noreferrer"
        >Made by Ice Bear 🐻‍❄️ with &hearts; for Virtual CodeDay 2021
        </a>

      </footer>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json"
//   );
//   const data = await res.json();

//   console.log(data.countries);

//   return {
//     props: {
//       countries: {
//         data,
//       },
//     },
//   };
// }
