import "./App.css";
import CustomFooter from "./components/Global/CustomFooter";
import CustomHeader from "./components/Global/CustomHeader";
import GoogleMaps from "./components/GoogleMaps";

function App() {
  return (
    <>
      <main className="flex h-screen w-screen flex-col">
        <CustomHeader />
        <section className="flex-1">
          <GoogleMaps />
        </section>
        <CustomFooter />
      </main>
    </>
  );
}

export default App;
