import { Container, Row, Col} from 'react-bootstrap';
import { titleCase } from "title-case";


function ResultList(data) {
    let props = data.data;
    
    return (
        <Container>
            <h4>{props.activity}</h4>
            {Object.entries(props).map(([key, value]) => {
                return (
                    <Row>
                        <Col className="p-1 pb-0 ml-2">
                            <h6>
                                {titleCase(key)}:
                            </h6>
                        </Col>
                        <Col className="p-1 pb-0 mr-2">
                            {value}
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}

export default ResultList

// {propValues.map(value => (
//     <div>
//         {value}
//     </div>
// ))}