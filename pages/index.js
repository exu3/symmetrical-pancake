import Head from "next/head";
import Image from "next/image";
import Label from "../components/Label";
import styles from "../styles/Home.module.css";

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
        <section>
          <h1>wthaljf if</h1>
          <h2>where would you go?</h2>
        </section>
        <section>
          <input placeholder="seacrh bar idk if it iwill work" />
          <div className={styles.items}>
            <Label countryName="hi" />
            <Label countryName="hi" />
            <Label countryName="hi" />
            <Label countryName="hi" />
          </div>
        </section>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json"
  );
  const data = await res.json();

  console.log(data.countries);

  return {
    props: {
      countries: {
        data,
      },
    },
  };
}
