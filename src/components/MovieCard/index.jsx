import './styles.css';
import { Button} from '../Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GhibliContext from '../../context/GhibliContext';

export const MovieCard = (props) => {
    const {image, year, name, director, company, id} = props;

    const globalState = useContext(GhibliContext);


    const movieClicked = () => {

        const movie = {
            id,
            name,
            image,
            year,
            director,
            company
        }

        
        alert('movie was clicked');
    }

    return (
        <div className="movie">
            <img className="movie-image" src={image} alt={name + year + "photo"}/>
            <Link to={`/movie/${id}`}>
                <h1 className="movie-name"> {name} </h1>
            </Link>
            <p className = "movie-director"> {director}</p>
            <p className= "movie-company"> {company} years old </p>

            <Button text="See Details" type="primary" isDisabled={false} action={movieClicked}/>
        </div>
    )
}