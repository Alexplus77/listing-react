import Listing from "components/Listing";
import * as data from "data/etsy.json";
function App() {
  const etsyData = data.default;
  console.log(etsyData);
  return (
    <>
      <Listing etsyData={etsyData} />
    </>
  );
}

export default App;
