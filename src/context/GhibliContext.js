import React, {useState} from 'react';

const GhibliContext = React.createContext({
    movies: [],
    initializeMovies: () => {},
});

export const GhibliContextProvider = (props) => {
    const [movies, setMovies] = useState([]);

    const initializeMovies = (moviesFromApi) => {
        setMovies(moviesFromApi);
    }
    
    return (<GhibliContext.Provider
     value={{ movies: movies, initializeMovies: initializeMovies}}
    >
        {props.children}
    </GhibliContext.Provider>)

} 
export default GhibliContext;