import React from "react";
// import module
import { Fragment } from "react";
import { Link } from "react-router-dom";
// import CSS
import "./Home.css";
// Import components
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";
import image from "../../images/ImagesComponents/IMG.png";
// import du fichier json
import data from "../../API/annonce.json";

const Home = () => {
  // const [data, setData] = useState([]);
  // const getData = () => {
  //   fetch('annonce.json', {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setData(myJson);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <Fragment>
      <div className="bannerHome">
        <Banner
          imageBanner={image}
          descriptionAlt="un paysage de montagne avec brouillard et quelques arbres"
        >
          Chez vous, <br className="disabled" /> partout et ailleurs
        </Banner>
      </div>
      <div className="flexHome">
        <div className="containerHomeLocations">
          {data.map(({ id, title, cover }, index) => {
            return (
              <Link key={index} to={`/logement/${id}`}>
                <Thumb sourceImg={cover}>{title}</Thumb>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
