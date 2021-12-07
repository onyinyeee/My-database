import {useParams} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import "./styles.css";
import GhibliContext from '../../../context/GhibliContext';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';


export const DetailsPage = (props) => {
    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const globalState = useContext(GhibliContext);

    useEffect(() => {
        const movie= globalState.movies.find(
            (movie) => movie.id.stringValue === id
        );
        setMovie(movie);
    }, [])

    if (movie) {
        return (
            <div className="movies-page">
                <h1 className="movies-title"> {movie.name?.stringValue}</h1>
                <img src={movie.image?.stringValue} alt="movie photo"/>
                <p className="description">{movie.about?.stringValue}</p>
                


                

            </div>
        )
    } else {
        return <p>No image</p>
    }
}