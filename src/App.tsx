import React, {useEffect} from 'react';
import s from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getTC, itemType} from "./store/testReducer";
import { AppRootStateType } from './store/store';
import Item from './components/Item';
import ModalBuyButton from "./components/ModalBuyButton";

function App() {

  let items = useSelector<AppRootStateType, Array<itemType>>(state => state.test.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTC())
  }, [])

  let resultItems = items.map(i => {
    return(<Item item={i}/>)
  })

  return (
    <div className={s.container}>
      <div className={s.itemContainer}>
        {resultItems}
      </div>
      <div className={s.footer}>
          <div className={s.buttonContainer}>
              <ModalBuyButton title={'Buy cheapest'}/>
          </div>
      </div>
    </div>
  );
}

export default App;
