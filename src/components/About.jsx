import React from "react";
import MultiplePizza from "../assests/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizza})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Welcome to our pizza paradise! We are passionate about crafting the
          perfect pizza and delivering an exceptional dining experience to our
          customers. At our pizzeria, we take pride in using only the finest
          ingredients to create mouthwatering pizzas that will tantalize your
          taste buds. From our homemade dough to our signature sauces and
          premium toppings, each pizza is made with love and attention to
          detail. Our skilled chefs work tirelessly to develop unique flavor
          combinations that will satisfy even the most discerning pizza
          connoisseurs. Whether you prefer classic Margherita, meat lover's
          delight, or a vegetarian masterpiece, we have a pizza to suit every
          palate. But it's not just about the pizza; it's about the experience.
          Our warm and inviting ambiance, friendly staff, and excellent service
          aim to make your visit memorable. Whether you dine in, take out, or
          have your pizza delivered to your doorstep, we strive to provide
          exceptional customer service at every step. So, come and join us on a
          culinary journey of pizza perfection. We can't wait to serve you and
          make your pizza dreams come true!
        </p>
      </div>
    </div>
  );
}

export default About;
