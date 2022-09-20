import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "We offer a unique variety of cocktails that are made with lots of attention to statisfy all the desires of our customers!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "The location of the hotel rooms we offer is very unique and known all around the world for its incredible hiking sites!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Once the dear customer arrives to the site we offer free shuttle for him to discover and explore all the beautiful land where our hotel is placed!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Since we are northern people, it is only natural for us to have the best, the strongest and most deliciuos variety of beer and alcohols!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
