import React from 'react'
import {itemType} from "../store/testReducer";
import s from './Item.module.css'
import ModalBuyButton from './ModalBuyButton';

type propsType = {
    item: itemType,
}

const Item: React.FC<propsType> = props => {

    const {
        item
    } = props

    return (
        <div className={s.container}>
            <div className={s.category}>
                {item.category}
            </div>
            <div className={s.name}>
                {item.name}
            </div>
            <div className={s.symbol}>
                $
            </div>
            <div className={s.price}>
                {item.price}
            </div>
            <div className={s.buttonContainer}>
                <ModalBuyButton item = {item}/>
            </div>
        </div>
    )
}

export default Item