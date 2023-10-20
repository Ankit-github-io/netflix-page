import Card from "./Card";
import Header from "./header";
import sData from "./SData";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";
const FavoriteSeries = () => {
  if (favSeries === "netflix") {
    return <Netflix />;
  } else {
    return <Amazon />;
  }
};
function nCard(val, index, arr) {
  return (
    <Card
      key={val.id}
      tittle={val.tittle}
      imgSrc={val.imgSrc}
      sName={val.sName}
      link={val.link}
    />
  );
}

function App() {
  return (
    <>
      <Header />
      <div className="main-page">
        <h1>Top 6 netflix series in 2022</h1>

        <div className="cards">
          <FavoriteSeries />
        </div>
        <div className="cards">{sData.map(nCard)}</div>
      </div>
    </>
  );
}

export default App;
