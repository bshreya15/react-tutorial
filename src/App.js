import Header from "./components/Header";
// import ContentState from "./components/ContentState";
// import ContentCounter from "./components/ContentCounter";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ContentState/> */}
      {/* <ContentCounter/> */}
      <ContentList/>
      <Footer/>
    </div>
  );
}

export default App;
