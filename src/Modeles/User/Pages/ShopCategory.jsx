import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Component/Items/Item'

const ShopCategory = (props) => {
  const all_product = useContext(ShopContext)
  console.log(all_product,"products")
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            showing 1-12
          </span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          sort by <img src='' />
        </div>
      </div>

<div className="shopcategory-products">
  {all_product.map((item , i)=>{
    if(props.category===item.category){
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    }else{
      return null;
    }
  })}
</div>

    </div>
  )
}

export default ShopCategory
