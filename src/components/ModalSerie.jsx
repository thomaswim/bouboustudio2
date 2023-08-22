import {React, useState} from 'react';
import { Modal, Button, Card,Row,Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Spinner } from 'react-bootstrap';
import '../style/badge.css'
import '../style/frame.css'
import { CardBody, CardFooter } from 'reactstrap';

function SerieModal({ film, onClose }) {

  const [isLoading, setIsLoading] = useState(true);

  const actorsString = film.actors.join(", ");
 const locationString = film.shootingLocations.join(", ");
 const awardString = film.awards.join(", ");

  if (!film) return null;  // ne rien afficher si le film n'est pas fourni

  return (
    <Modal show={true} onHide={onClose} centered className="transparent-modal" >
      <Modal.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }} >
        
      <Card className="text-white transparent-card">
      <div className="image-container-serie" style={{ width: "100%", paddingTop: "56.25%",  position: "relative", overflow: "hidden", borderRadius: "20px" }}>
    <img 
        src={film.posterURL}
        alt="Poster du film"
        className='imageSerie'
        style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            objectFit: "cover"
        }}
    />
</div>

</Card>


        <Card className="Film_description">
          <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                  <Card.Title style={{fontSize:"1.5em"}}>{film.title}</Card.Title>
                  <span style={{fontSize:"1.5em"}} >👍</span> {/* Ceci est un emoji "like". Vous pouvez le remplacer par n'importe quel autre emoji ou utiliser une icône personnalisée. */}
              </div>
              <div className="d-flex justify-content-left small-badge" style={{marginTop:"10px"}}>
                  <Badge className="badge-custom-film" >📅 {new Date(film.releaseDate).toLocaleDateString()}</Badge>
                  <Badge className="badge-custom-film">⌛{film.duration}</Badge>
              </div>









            <Card style={{ width: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginTop:"20px", border:"none" , borderRadius:"20px"}}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'left', fontSize: '24px', fontWeight: 'bold' }}>
                        Résumé 📖 
                    </Card.Title>
                    <Card.Text style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.5' }}>
                    {film.description}
                    </Card.Text>
                </Card.Body>
            </Card>


            {film.episodes.map((episode, index) => (
    <Row key={index} xs={1} md={2} className="g-1 SerieCard" style={{ display: 'flex', marginTop: "10px" }}>
        <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card className='iframeCard' style={{ width: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', top:"50%",transform: 'translateY(-50%)',margin:"auto",  border: "none", borderRadius: "20px" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", margin: "auto", height: 0 }}>
                    <iframe
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "20px" }}
                        src={film.videoURL[index].replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")} 
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </Card>
        </Col>
        <Col xs={9} md={9} style={{ display: 'flex', flexDirection: 'column',flexGrow: 2 }}>
            <Card className='DescSeriCard' style={{ width: '100%', height: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', margin:"auto", border: "none", borderRadius: "20px" }}>
                <Card.Body>
                    <Card.Title>{episode.titre}</Card.Title>
                    <Card.Text>
                        {episode.description}
                        <br></br>
                        <span style={{ fontWeight:"lighter"}}>{episode.time}</span>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Col>
    </Row>
))}

            <Row xs={1} md={2} className="g-3" style={{ display: 'flex', alignItems: 'stretch' }}>
    <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card style={{ width: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginTop:"20px", border:"none" , borderRadius:"20px"}}>
            <Card.Body>
                <Card.Title style={{ textAlign: 'left', fontSize: '24px', fontWeight: 'bold' }}>
                    Distribution 📽 
                </Card.Title>
                <Card.Text style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.5' }}>
                <b>Acteurs : </b> {actorsString}
                <br></br>
                <b>Réalisateur(s) : </b> {film.director}
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginTop:"20px", border:"none" , borderRadius:"20px"}}>
            <Card.Body>
                <Card.Title style={{ textAlign: 'left', fontSize: '24px', fontWeight: 'bold' }}>
                    Lieu de Tournage 📍 
                </Card.Title>
                <Card.Text style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.5' }}>
                {locationString}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col style={{ display: 'flex', flexDirection: 'column', flexGrow: 2 }}>
        <Card style={{ width: '100%', height: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginTop:"20px", border:"none" , borderRadius:"20px"}}>
            <Card.Body>
                <Card.Title style={{ textAlign: 'left', fontSize: '24px', fontWeight: 'bold' }}>
                    Récompenses ⭐ 
                </Card.Title>
                <Card.Text style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.5' }}>
                {awardString}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
</Row>


          </Card.Body>
      </Card>


      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default SerieModal;
