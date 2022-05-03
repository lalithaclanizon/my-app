import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap';

function App() {
    return (
        <><div className='card'>
            <h1 className='hsize'>Explore</h1>
            <div class='row'>
                <CardGroup>
                    <div class='col-lg-4 col-md-4 col-12 my-4'>
                        <div className='colum1'>
                            <Card style={{ backgroundColor: '#ffdfdf', height: '170px', border: '0' }}>
                                <Card.Body style={{ padding: '2.5rem' }}>
                                    <Card.Title>Activity classes</Card.Title>
                                    <Card.Text>
                                        Quit laraning partially when you can learn<br></br> partially
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div class='col-lg-4 col-md-4 col-12 my-4'>
                        <div className='colum2'>
                            <Card style={{ backgroundColor: '#cefbf9', height: '170px', border: '0' }}>
                                <Card.Body style={{ padding: '2.5rem' }}>
                                    <Card.Title style={{ fontSize: '22px' }}>FIN N MIN Talks</Card.Title>
                                    <Card.Text>
                                    Hike for experience<br></br>Speak since experienced </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div class='col-lg-4 col-md-4 col-12 my-4'>
                        <div className='colum3'>
                            <Card style={{ backgroundColor: '#f7ffc0', height: '170px', border: '0' }} >
                                <Card.Body style={{ padding: '2.5rem' }}>
                                    <Card.Title>Awareness Program</Card.Title>
                                    <Card.Text>
                                    Never for debt<br></br>Aware for depth In knowledge</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </CardGroup>
            </div>
        </div>
        
        </>
    );
}

export default App;