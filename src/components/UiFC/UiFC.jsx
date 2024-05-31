import clases from "./UiFC.module.css";

export const UiFC = (props) => {
  const { brand, title, description, descriptionFull, price, currency } = props.item;
  
  return (
    <div className={clases["main-content"]}>
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className={clases["description"]}>{descriptionFull}</div>
      <div className={clases["highlight-window mobile"]}>
        <div className={clases["highlight-overlay"]}></div></div>
      <div className={clases["divider"]}></div>
      <div className={clases["purchase-info"]}>
        <div className={clases["price"]}>{currency}{price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}
