import Listing from "components/Listing";
import etsyData from "data/etsy.json";
const App = () => {
  //console.log(etsyData);
  return (
    <>
      <Listing etsyData={etsyData} />
    </>
  );
};

export default App;
