import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export class InfoCard extends Component {
    state = { 
        style: {
        height: 250
        }
     }
    render() { 
        return ( 
        <Card>
            <CardHeader>{this.props.info.header}</CardHeader>
            <CardImg variant="top" src={this.props.info.image} style={this.state.style} />
            <CardBody>
                <CardText>
                    {this.props.info.text}
                </CardText>

                <ListGroup>
                    <ListGroupItem>{this.props.info.point1}</ListGroupItem>
                    <ListGroupItem>{this.props.info.point2}</ListGroupItem>
                    <ListGroupItem>{this.props.info.point3}</ListGroupItem>
                    <ListGroupItem>{this.props.info.point4}</ListGroupItem>
                    <ListGroupItem>{this.props.info.point5}</ListGroupItem>
                </ListGroup>
                <CardText><p></p></CardText>
                <CardLink href={this.props.info.link}>More Info</CardLink>
            </CardBody>
        </Card> 
        );
    }
}
 
export class InfoCardGrid extends Component {
    state = { 
        elements: [
            {header: 'Blueberries', image: require('./food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'data point 1',
            point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
            point5: 'data point 5', link: '/Blueberry'},
            {header: 'Seaweed', image: require('./food_photos/seaweed.jpg'), text: 'its a plant', point1: 'data point 1',
            point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
            point5: 'data point 5', link: '/Seaweed'},
            {header: 'Cranberries', image: require('./food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'data point 1',
            point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
            point5: 'data point 5', link: '/Cranberry'}
        ]
     }
    render() { 
        return ( <Container>
            <Row>
                <Col> <InfoCard info = {this.state.elements[0]} /></Col>
                <Col> <InfoCard info = {this.state.elements[1]} /></Col>
                <Col> <InfoCard info = {this.state.elements[2]} /></Col>
            </Row>
        </Container> );
    }
}

