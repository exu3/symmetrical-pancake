// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

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
