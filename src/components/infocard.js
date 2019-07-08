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
    state = {}
    render() { 
        return ( <Container>
            <Row>
                <Col> <InfoCard info = {this.props.elements[0]} /></Col>
                <Col> <InfoCard info = {this.props.elements[1]} /></Col>
                <Col> <InfoCard info = {this.props.elements[2]} /></Col>
            </Row>
        </Container> );
    }
}

