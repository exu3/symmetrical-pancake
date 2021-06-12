export default function Label({ countryName }) {
  return (
    <div
      style={{
        borderColor: "gray",
        borderRadius: "10px",
        border: "solid",
        width: "min-content",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginRight: "10px",
      }}
    >
      <p>{countryName}</p>
    </div>
  );
}
