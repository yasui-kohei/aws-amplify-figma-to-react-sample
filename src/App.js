import "./App.css";
import { Spacer } from "./manual-components/spacer";
import { ActionCard, ItemCard } from "./ui-components";

function App() {
  return (
    <div
      className="App"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <ItemCard
        backgroundColor={"yellow.40"}
        borderRadius={10}
        title={"Hello"}
        subTitle={"develop Hello Company"}
        price={300}
        isNew={true}
      />

      <Spacer size={20} />
      
      <ActionCard
        backgroundColor={"brand.primary.10"}
        title={"OfficialYKS"}
        description={
          "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
        }
        rating={4}
      />
    </div>
  );
}

export default App;
