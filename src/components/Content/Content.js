import React, { useContext } from 'react'
import classes from './Content.module.css'
import Product from './Product'
import CartContext from '../../store/cart-context'

const Content = (props) => {
  const cartCtx = useContext(CartContext)
  return (
    <div className={classes.content}>
      <button
        className={classes.btn2}
        onClick={() => {
          props.onClick()
        }}
      >
        cart ({cartCtx.items.length})
      </button>
      <h1 className={classes.h1}>MUSIC</h1>
      <div className={classes.products}>
        {cartCtx.products.map((each) => (
          <Product key={each.title} item={each} />
        ))}
      </div>
      <button
        className={classes.btn}
        onClick={() => {
          props.onClick()
        }}
      >
        See the cart
      </button>
    </div>
  )
}

export default Content