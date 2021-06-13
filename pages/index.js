import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ColorButton from "../components/colorButton";
import Country from "../components/country";
import { useState, useEffect } from "react";
/** @jsxImportSource theme-ui */

export default function Home() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((countryList) => {
        setCountryList(countryList);
        console.log(countryList);
      });
  }, []);
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

      <main sx={{ minHeight: "100vh" }}>
        <div className={styles.titleBg} sx={{ backgroundColor: "text" }}>
          <ColorButton
            className={styles.toggle}
            sx={{ backgroundColor: "text", color: "background" }}
          />
          <h2 sx={{ color: "background" }}>
            what if you could travel anywhere in the world,
          </h2>
          <h1 sx={{ color: "background" }}>where would you go?</h1>
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
          {countryList.map(
            ({
              name,
              callingCodes,
              capital,
              currencies,
              languages,
              region,
            }) => (
              <div key={name}>
                <Country
                  fullName={name}
                  currency={currencies}
                  language={languages}
                  capitalCity={capital}
                  region={region}
                  callingCode={callingCodes}
                />
              </div>
            )
          )}
        </div>
      </main>

      <footer>
        <p
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          Made with &hearts; at Virtual CodeDay.
        </p>
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

function createCountry(name, callingCodes, capital, currencies, languages, region) {
  const obj = {};
  obj.name = name;
  obj.callingCodes = callingCodes;
  obj.capital = capital;
  obj.currencies = currencies;
  obj.languages = languages;
  obj.region = region;
  return obj;
}

function sortCountries(countries_list_json) {
  var countries_array = []; // thing
  for (let i = 0; i < countries_list_json.length; i++) {
    countryInstance = createCountry(countries_list_json[i]['name'], countries_list_json[i]['callingCodes'], countries_list_json[i]['capital'], countries_list_json[i]['currencies'], countries_list_json[i]['languages'], countries_list_json[i]['region']);
    countries_array.push(countryInstance);
  }
  return countries_array; // Return not needed!
}
