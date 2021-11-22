import logo from "../assets/logos/tc-logo-min.png";

const Home = () => {
  return (
    <main
      className="
          container
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
    >
      <h1 className="title is-1 has-text-white">
        To <s className="has-text-danger">See</s>
        <em className="has-text-success">Change</em> the World
      </h1>
      <div
        className="
            appear
            isometric-card
            d-flex
            justify-content-center
            align-items-center
          "
      >
        <img
          src={logo}
          className="rotate-half"
          alt=""
        />
      </div>
    </main>
  );
};

export default Home;
