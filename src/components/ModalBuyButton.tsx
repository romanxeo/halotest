import React, {useState} from "react";
import {itemType} from "../store/testReducer";
import s from './ModalBuyButton.module.css'
import is from './Item.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

type propsType = {
    item?: itemType,
    title?: string
}

const ModalBuyButton: React.FC<propsType> = props => {

    const {
        item,
        title
    } = props

    let minPriceItem = useSelector<AppRootStateType, itemType>(state => state.test.minPriceItem)
    let targetItem = {
        name: '',
        category: '',
        price: 0,
    }
    if (item === undefined) {
        targetItem = minPriceItem
    } else {
        targetItem = item
    }

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<number>(NaN)

    const showModal = () => {
        setShow(true);
    }

    const onClickOrder = () => {
        alert('order completed')
        setShow(false);
        setName('');
        setNumber(NaN);
    }
    const onClickMiss = () => {
        setShow(false);
    }

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };


    return (
        <>
            <button className={title === undefined ? s.buttonBuy : s.buttonOrder} onClick={showModal}>
                {title === undefined ? 'BUY' : title}
            </button>
            {show &&
            <>
                <div className={s.backgroundModal} onClick={onClickMiss}></div>
                <div className={s.modalContainer}>
                    <div className={is.category}>
                        {targetItem.category}
                    </div>
                    <div className={is.name}>
                        {targetItem.name}
                    </div>
                    <div className={is.symbol}>
                        $
                    </div>
                    <div className={is.price}>
                        {targetItem.price}
                    </div>
                    <div className={s.inputContainer}>
                        <input className={s.input} type="text" placeholder=" "/>
                        <div className={s.cut}></div>
                        <label className={s.placeholder}>Name</label>
                    </div>
                    <div className={s.inputContainer}>
                        <input className={s.input} type="text" placeholder=" "/>
                        <div className={s.cut}></div>
                        <label className={s.placeholder}>Number</label>
                    </div>
                    <button className={s.buttonOrder} onClick={onClickOrder}>
                        ORDER
                    </button>
                </div>
            </>
            }
        </>

    )
}


export default ModalBuyButton