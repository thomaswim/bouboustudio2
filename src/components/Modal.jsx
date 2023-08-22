import {React, useState} from 'react';
import { Modal, Button, Card,Row,Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Spinner } from 'react-bootstrap';
import '../style/badge.css'
import '../style/frame.css'
import { CardBody } from 'reactstrap';

function FilmModal({ film, onClose }) {

  const [isLoading, setIsLoading] = useState(true);

  const actorsString = film.actors.join(", ");
 const locationString = film.shootingLocations.join(", ");
 const awardString = film.awards.join(", ");

  if (!film) return null;  // ne rien afficher si le film n'est pas fourni

  return (
    <Modal show={true} onHide={onClose} centered className="transparent-modal" >
      <Modal.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }} >
        
        <Card className="text-white transparent-card">
          <div style={{ position: 'relative', height: 'auto' }}>
            {isLoading && (
              <div className="d-flex justify-content-center align-items-center" 
                   style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0, 
                      zIndex: 2
                   }}
              >
                  <Spinner animation="border" role="status">
                      
                  </Spinner>
                  <span className="sr-only">Chargement...</span>
              </div>
            )}

            <iframe  className='iframebb'
              onLoad={() => setIsLoading(false)}
              width="100%" 
              height="415" 
              src={film.videoURL.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/") + "?autoplay=1&rel=0"}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
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


export default FilmModal;
