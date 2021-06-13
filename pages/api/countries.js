const countries = fetch(
  "https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json"
);

export default function handler(req, res) {
  res.status(200).json(countries);
}

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