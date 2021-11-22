import Navbar from "../Navbar";

const AppLayout = (props) => {
  return (
    <div className="App">
      <Navbar />
      {props.children}
    </div>
  );
};

export default AppLayout;
