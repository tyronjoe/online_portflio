import React from "react";
import Card from "../components/Card";

import contacts_icon from "../accessories/images/contacts_icon.png";
import gh_icon from "../accessories/images/gh_icon.jpg";
import it_icon from "../accessories/images/it_icon.jpg";
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Contact Keeper",
          subTitle: "Manage and store Contacts for your company",
          imgSrc: contacts_icon,
          link: "https://infinite-gorge-64035.herokuapp.com/login",
          selected: false,
        },
        {
          id: 1,
          title: "Github Finder",
          subTitle: "Find Your Developer",
          imgSrc: gh_icon,
          link:
            "https://github.com/tyronjoe/React-Projects/tree/master/github-finder",
          selected: false,
        },
        {
          id: 2,
          title: "IT-Logger",
          subTitle: "Technician Logs",
          imgSrc: it_icon,
          link:
            "https://github.com/tyronjoe/React-Projects/tree/master/it-logger",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
