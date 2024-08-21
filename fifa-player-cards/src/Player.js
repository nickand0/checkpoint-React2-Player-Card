//importation react
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./player.css"

//importation bootstrap
import { Card} from 'react-bootstrap';

//importation proptype
import PropTypes from 'prop-types';

//fonction 
function Player({name, team, nationality, jerseyNumber, age, imageUrl,FlagUrl}){
    return(
        <card className="card">
            <Card.Img className='img' variant="top" src={imageUrl} alt={name}/>
            <Card.Body className='cardBody'>
                <div>
                    <Card.Title style={{textAlign:'center',fontSize:'25px'}}>{name} </Card.Title>
                </div>
                <div style={{ borderBottom: '1px solid #ccc', margin: '20px 0' }}></div>
                <Card.Text className='cardText'>
                    <div style={{ borderRight: '1px solid #ccc', paddingRight:'5px' }}>
                        <strong>Team:</strong> <br />
                        <strong>Nationality:</strong> <br />
                        <strong>Jersey Number:</strong> <br />
                        <strong>Age:</strong> 
                    </div>
                    <div>
                        <>{team}</><br />
                        <>{nationality} <img className='imgFlag'src={FlagUrl}/></><br />
                        <>{jerseyNumber}</><br />
                        <>{age}</><br />
                    </div>
                </Card.Text>
            </Card.Body>
        </card>
    )
}

// Default props
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://via.placeholder.com/150"
};

  // PropTypes for type checking
Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.number,
    age: PropTypes.number,
    imageUrl: PropTypes.string
};

export default Player;


