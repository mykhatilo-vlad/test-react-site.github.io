import React, { Component } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://cdn.mos.cms.futurecdn.net/6bxva8DmZvNj8kaVrQZZMP.jpg" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2020-08/shutterstock_1731284125_0.jpg?itok=89UrdUt_" />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://www.freecodecamp.org/news/content/images/2021/08/chris-ried-ieic5Tq8YMk-unsplash.jpg" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
