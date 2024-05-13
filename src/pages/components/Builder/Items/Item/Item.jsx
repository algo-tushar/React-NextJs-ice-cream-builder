import classes from './Item.module.css';

const Item = ({name, add, remove, quantity = 0}) => {
  return (
    <li className={classes.item}>
        <span>{name}</span>
        <span className={classes.quantity}>{quantity}</span>
        <div className="right">
          <button onClick={() => add(name)} className={[classes.plus, 'rounded'].join(' ')} type="button">+</button>
          <button onClick={() => remove(name)} className={[classes.minus, 'rounded'].join(' ')} type="button">-</button>
        </div>
    </li>
  )
}

export default Item;
