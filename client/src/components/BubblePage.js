import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update] = useState(false)
  useEffect(() => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => console.log('error dashboard', err))
  }, [update])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
