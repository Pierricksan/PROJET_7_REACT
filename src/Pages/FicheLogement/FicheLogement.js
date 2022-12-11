import React from "react";
import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";
import Collapse from "../../components/Collapse/Collapse";
import User from "../../components/User/User";
import Title from "../../components/Title/Title";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import "./FicheLogement.css";
// import AVATAR from "../../images/ImagesComponents/avatarTest.jpg";
import dataLogement from "../../API/annonce.json";

// const slides = [
//   { url: "https://via.placeholder.com/2000x600/0000FF/808080" },
//   { url: "https://via.placeholder.com/150/FFFF00/000000" },
//   { url: "https://via.placeholder.com/150/0000FF/808080" },
//   { url: "https://via.placeholder.com/150/000000/FFFFFF" },
// ];

const FicheLogement = () => {
/// navigate 
  const navigate = useNavigate()

  //// UseParams pour l'url
  let { id } = useParams();
  console.log(id);
  const idLogement = dataLogement.find((p) => p.id === id);

  // console.log(idLogement.title)
  //   const [data, setData] = useState([]);
  //   const getData = () => {
  //     fetch(`http://localhost:3000/logement/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //       .then(function (response) {
  //         console.log(response);
  //         return response.json();
  //       })
  //       .then(function (myJson) {
  //         console.log(myJson);
  //         setData(myJson);
  //       });
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  // const dataString = JSON.stringify(data)

  //   console.log(dataString)

  //sconsole.log(JSON.parse(data))

  const fontCollapse = {
    fontSize: "18px",
  };

  const fontContent = {
    fontSize: "18px",
    paddingTop: "30px",
    paddingBottom: "30px",
    textDecoration: "none",
  };

  useEffect(() => {
    
    if (idLogement === undefined) {
      navigate('/erreur')
    }
  })

if(idLogement !== undefined) {
  return (
    <Fragment>
      <div className="containerCarroussel">
        <Carroussel slides={idLogement.pictures} />
      </div>
      <div className="containerInformations">
        <div className="titleAndTags">
          <div className="infoTitle">
            <Title
              mainTitle={idLogement.title}
              secondaryTitle={idLogement.location}
            />
          </div>
          <div className="infoTags">
            {idLogement.tags.map((tags, index) => {
              return <Tag key={index}>{tags}</Tag>;
            })}
          </div>
        </div>
        <div className="userAndRating">
          <div className="infoUser">
            <User
              avatarPicture={idLogement.host.picture}
              userName={idLogement.host.name}
            />
          </div>
          <div className="infoRating">
            <Rating countRating={idLogement.rating} />
          </div>
        </div>
      </div>
      <div className="containerCollapseLogement">
        <div className="containerDescription">
          <Collapse
            label="Description"
            titleCustom={fontCollapse}
            contentCustom={fontContent}
          >
            {idLogement.description}
          </Collapse>
        </div>
        <div className="containerEquipement">
          <Collapse
            label="Equipement"
            titleCustom={fontCollapse}
            contentCustom={fontContent}
          >
            {idLogement.equipments.map((equipments, index)=> {
              return (
                <li key={index}>{equipments}</li>
              )
            })}
          </Collapse>
        </div>
      </div>
    </Fragment>
  );
}

  
};

export default FicheLogement;
