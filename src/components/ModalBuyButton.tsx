import React, {useEffect, useState} from "react";
import {itemType} from "../store/testReducer";
import s from './ModalBuyButton.module.css'
import is from './Item.module.css'
import {useSelector} from "react-redux";
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

    const [show, setShow] = useState(false);
    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [nameError, setNameError] = useState<string>('')
    const [numberError, setNumberError] = useState<string>('')
    const [formValid, setFormValid] =  useState<boolean>(false)

    useEffect(() => {
        if (nameError || numberError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [nameError, numberError])

    const showModal = () => {
        setShow(true);
    }

    const onClickOrder = () => {
        console.log(name)
        console.log(number)
        console.log(targetItem.name)
        console.log(targetItem.category)
        console.log(targetItem.price)

        setShow(false);
        setName('');
        setNumber('');

    }
    const onClickMiss = () => {
        setShow(false);
        setName('')
        setNumber('')
        setNameError('')
        setNumberError('')
        setFormValid(false)
    }

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
        if (!nameRegex.test(String(event.target.value).toLowerCase()) && event.target.value.length > 0) {
            setNameError('Only letters allowed')
        } else {
            setNameError('')
        }
    };

    const numberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
        const numberRegex = /^[0-9]+$/;
        if (!numberRegex.test(String(event.target.value).toLowerCase()) && event.target.value.length > 0) {
            setNumberError('Only numbers allowed')
        }
        else if (event.target.value.length > 12) {
            setNumberError('Should contain 12 characters')
        }
        else {
            setNumberError('')
        }
    };

    const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'name': {
                if (name === '') {
                    return(setNameError('This field in required'))
                }
                break
            }
            case 'number': {
                if (number === '') {
                    return(setNumberError('This field in required'))
                }
                if (number.length < 12) {
                    return(setNumberError('Should contain 12 characters'))
                }
                break
            }
        }
    }

    return (
        <>
            <button className={title === undefined ? s.buttonBuy : s.buttonOrder} onClick={showModal}>
                {title === undefined ? 'BUY' : title}
            </button>
            {show &&
            <>
                <div className={s.backgroundModal} onClick={onClickMiss}></div>
                <form className={s.modalContainer}>
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
                        <input
                            onChange = {e => nameHandler(e)}
                            value={name}
                            onBlur={e => blurHandler(e)}
                            name = 'name'
                            className={s.input}
                            type="text"
                            placeholder=" "
                        />
                        <div className={s.cut}></div>
                        <label className={s.placeholder}>Name</label>
                    </div>

                    <div className={s.error}>{nameError && nameError}</div>

                    <div className={s.inputContainer}>
                        <input
                            onChange = {e => numberHandler(e)}
                            value={number}
                            onBlur={e => blurHandler(e)}
                            name = 'number'
                            className={s.input}
                            type="text" placeholder=" "
                        />
                        <div className={s.cut}></div>
                        <label className={s.placeholder}>Number</label>
                    </div>

                    <div className={s.error}>{numberError && numberError}</div>

                    <button
                        disabled={!formValid}
                        type='submit'
                        className={s.buttonOrder}
                        onClick={onClickOrder}
                    >
                        ORDER
                    </button>
                </form>
            </>
            }
        </>

    )
}

export default ModalBuyButton