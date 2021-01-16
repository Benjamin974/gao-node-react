import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from 'reactstrap';
import AddAttribution from './AddAttribution';
import DeleteAttribution from './DeleteAttribution';
import _ from "lodash"
class CardOrdi extends React.Component {
    constructor(props) {
        super(props)
        this.state = { attributions: {}, horaires: [], isAttribute: false }
        this.handleAttribution = this.handleAttribution.bind(this)
        this.deleteAttribution = this.deleteAttribution.bind(this)
    }

    componentDidMount() {
        this.initialize();
    }

    initialize() {
        this.props.item.attributions.forEach(attributions => {
            this.state.attributions[attributions.heures] = {
                id: attributions.id,
                nom: attributions.client.name,
                prenom: attributions.client.firstname
            }
        })
        this.displayHoraire();
    }

    displayHoraire() {
        this.state.horaires = [];
        let data = []

        for (let i = 0; i < 10; i++) {
            data.push({
                index: i + 8,
                attribution: (typeof this.state.attributions[i + 8] !== 'undefined') ? this.state.attributions[i + 8] : false
            })
        }
        this.setState({
            horaires: data,
        });
    }

    handleAttribution(attributionValue) {
        console.log(attributionValue);
        this.state.attributions[attributionValue.heures] = {
            id: attributionValue.id,
            nom: attributionValue.client.name,
            prenom: attributionValue.client.firstname
        }
        let data = []
        for (let i = 0; i < 10; i++) {
            data.push({
                index: i + 8,
                attribution: (typeof this.state.attributions[i + 8] !== 'undefined') ? this.state.attributions[i + 8] : false
            })
        }
        this.setState({
            horaires: data,
        });

    }
    deleteAttribution(horaire) {
        
        _.unset(this.state.attributions, horaire)
         this.state.horaires = [];
        let data = []

        for (let i = 0; i < 10; i++) {
            data.push({
                index: i + 8,
                attribution: (typeof this.state.attributions[i + 8] !== 'undefined') ? this.state.attributions[i + 8] : false
            })
        }
        this.setState({
            horaires: data,
        });

    }

    render() {
        return (<Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {this.props.item.name}
                </Typography>
                {this.state.horaires.map((item, i) => (
                    <Container key={i}>

                        <Row className="text-center align-items-center">
                            <Col md='2'>
                                {item.index}
                            </Col>
                            <Col mt='3' md='8'>
                                {item.attribution.nom}
                            </Col>
                            <Col md='2'>
                               {item.attribution ? <DeleteAttribution attribution={item.attribution} onSelectAttribution={this.deleteAttribution} ordinateur={this.props.item} horaire={item.index} /> : <AddAttribution onSelectAttribution={this.handleAttribution} date={this.props.date} ordinateur={this.props.item} horaire={item.index} /> } 
                            </Col>
                        </Row>
                    </Container>
                ))}

            </CardContent>
        </Card>)


    }
}

export default CardOrdi;