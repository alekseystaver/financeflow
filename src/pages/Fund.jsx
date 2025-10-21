import useFund from "../hooks/useFund";
import FundForm from "../components/Fund/FundForm";
import FundList from "../components/Fund/FundList";

export default function Fund() {
  const { funds, addFund, updateFund } = useFund();

  return (
    <div className="page funds">
      <h2>Фонды</h2>
      <FundForm onAdd={addFund} />
      <FundList funds={funds} onUpdate={updateFund} />
    </div>
  );
}
