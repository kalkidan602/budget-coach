export default function SummaryCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2>{props.label}</h2>
      <p>{props.amount}</p>
    </div>
  );
}
