import "./App.css";
import useLocoScroll from "./hooks/useLocoScroll";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import CustomCursor from "./CustomCursor";

const App = () => {
  useLocoScroll(true);

  return (
    <>
      <CustomCursor />
      <div className="main" data-scroll-container>
        <Page1 />
        <Page2 />
      </div>
    </>
  );
};
export default App;
