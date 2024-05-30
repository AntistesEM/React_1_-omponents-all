import { Component } from "react";
import clases from "./ShopItemClass.module.css";

export class ShopItemClass extends Component {
  render() {
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;

    return (
      <div className={clases["main-content"]}>
        <h2 className={clases["h2"]}>{brand}</h2>
        <h1 className={clases["h1"]}>{title}</h1>
        <h3 className={clases["h3"]}>{description}</h3>
        <div className={clases["description"]}>{descriptionFull}</div>
        <div className={clases["highlight-window mobile"]}><div className={clases["highlight-overlay"]}></div></div>
        <div className={clases["divider"]}></div>
        <div className={clases["purchase-info"]}>
          <div className={clases["price"]}>{currency}{price.toFixed(2)}</div>
          <button className={clases["button"]}>Добавить в корзину</button>
        </div>
      </div>
    )
  }  
}