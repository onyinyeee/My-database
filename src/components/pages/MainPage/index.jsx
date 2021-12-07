import "./styles.css";
import {useContext, useEffect, useState} from 'react';
import { MovieCard } from "../../MovieCard";
import GhibliContext from "../../../context/GhibliContext";
//import { Search } from "../../search";
//import { getAuth, onAuthStateChanged  } from "@firebase/auth";
//import { useHistory } from "react-router-dom";


export const MainPage = () => {

const [movies, setMovies] = useState([]); 
const [loading, setLoading] = useState(true);
const globalState = useContext(GhibliContext);

  


  useEffect(
    ()=>{
      getMovies();
    }, []
  );

  const getMovies = async() => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/studio-g-database/databases/(default)/documents/movies/');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map((item) => {
        return item.fields
      });

      console.log (formattedData);

      setMovies(formattedData);
      
      globalState.initializeMovies(formattedData);
      setLoading(false);

    } catch(err) {
      console.log (err);
      setLoading(false);
    }
  }
  
  return (
    <div className="movies-page">
      <h1 className="movies-title"> Studio Ghibli Movie List</h1>
     
      <div className="movies-container">
       {
         movies.map((movie) => (
           <MovieCard key={movie.id.stringValue}
            image={movie.image.stringValue}
            name={movie.name.stringValue} 
            year={movie.year.stringValue}
            director={movie.director.stringValue}
            company={movie.company.stringValue} 
            id={movie.id.stringValue}
            about={movie.about.stringValue}>
                
            </MovieCard>
          ))
       }

       {
         loading && <p>loading data..</p>
       }

      </div>
    </div>
  );
};
