import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const CardCountry = ({name,flag,capital,borders,region,subregion,population}) => (
          <Container className="card-template">
          <Row>
          <Col sm={5} >
              <Card >
                    <Card.Img variant="top" src={flag} alt={name} />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>
                      Capital: {capital} 
                      </Card.Text>
                      <Card.Text>
                       Region: {region} - {subregion}
                      </Card.Text>
                      <Card.Text>
                      Population: {population}
                      </Card.Text>
                      <Card.Text>
                        Borders:
                          <ul>{borders.map(tz => (
                        <li>{tz}</li>
                              ))}
                      </ul>     
                      </Card.Text>

                    </Card.Body>

              </Card>
            </Col>  
          </Row>
          </Container>
  )


export default CardCountry;
