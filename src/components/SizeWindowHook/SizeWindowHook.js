import { useState, useEffect } from "react";

// Component utilisé pour connaitre la taille de l'écran et paramétrer des variables avec un bolléen pour modifier des données en fonction de la taille choisie
function useWindowSize() {
  // detection coté client
  const isClient = typeof window === "object";

  // fonction pour définir la largeur et la longueur de l'écran
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  // hook d'état
  const [SizeWindowHook, setWindowSize] = useState(getSize);

  // hook d'effet
  useEffect(() => {
    if (!isClient) {
      return false;
    }

    // fonction qui met à jour la taille de la fenêtre
    function handleResize() {
      setWindowSize(getSize());
    }

    // véfification de la taille de la fenêtre à chaque changement de taille de celle-ci
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Un tableau vide garantie que l'effet est seulement réalisé lors de la construction et destructuration

  return SizeWindowHook;
}
//// FAIRE UN IMPORT DU COMPONENT DANS LE FICHIER CONCERNE
//// A IMPORTER DANS UN AUTRE COMPONENT POUR LE FAIRE FONCTIONNER
// const screenWidth = SizeWindowHook().width;
//   const [disableParallax, setdisableParallax] = useState(false);

//   useEffect(() => {
//     if (screenWidth <= 1300) {
//       setdisableParallax(true);
//     } else {
//       setdisableParallax(false);
//     }
//   }, [screenWidth]);

//   let chevronSize = "";
//   disableParallax ? (chevronSize = "xl") : (chevronSize = "3x");

export default useWindowSize;
