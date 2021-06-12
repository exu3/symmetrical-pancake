const countries = fetch(
  "https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json"
);

export default function handler(req, res) {
  res.status(200).json(countries);
}
