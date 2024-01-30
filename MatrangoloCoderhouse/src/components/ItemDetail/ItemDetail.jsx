import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
      <article className="DetailCardItem">
        <header className="DetailHeader">
          <h2 className="DetailItemHeader">{name}</h2>
        </header>
        <img src={img} alt={name} className="DetailItemImg" />
        <section className="DetailInfo">
          <p>Categoría: {category}</p>
          <p>Descripción: {description}</p>
          <p>Precio: ${price}</p>
        </section>
        <footer className="DetailItemFooter">
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        </footer>
      </article>
    );
  };
  
  export default ItemDetail;
