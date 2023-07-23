import React from "react";
import ShoppingList from "./ShoppingList";
import MainCarousel from "./MainCarousel";
import Subscribe from "./Subscribe";

export default function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}
