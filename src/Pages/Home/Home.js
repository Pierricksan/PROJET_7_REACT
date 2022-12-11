import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";
import image from "../../images/ImagesComponents/IMG.png";
import data from '../../API/annonce.json';

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


  console.log(data)

  return (
    <Fragment>
      <Banner imageLayout={image}>Chez vous, partout et ailleurs</Banner>
      <div className={styles.flexHome}>
        <div className={styles.containerHomeLocations}>
          {data.map(({id, title, cover}, index) => {
            return(
            <Link key={index} to={`/logement/${id}`}>
              <Thumb sourceImg={cover}>{title}</Thumb>
            </Link>);
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
