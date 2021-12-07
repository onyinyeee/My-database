import './styles.css';
import { Button} from '../Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GhibliContext from '../../context/GhibliContext';

export const MovieCard = (props) => {
    const {image, year, name, director, company, about, id} = props;

    const globalState = useContext(GhibliContext);


  

    return (
        <div className="movie">
            <img className="movie-image" src={image} alt={name + company + "photo" + about}/>
            <Link to={`/movie/${id}`}>
                <h1 className="movie-name"> {name} </h1>
            </Link>
            <p className = "movie-director"> {director}</p>
            <p className= "movie-company"> {year} </p>

        </div>
    )
}