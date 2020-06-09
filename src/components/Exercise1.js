import React, { useEffect, useState } from 'react';
import Header from './Header';
import dataLocal from '../services/fetchData';
import { Panel, PanelHeader, PanelContent, Metric } from '@marketgoo/ola';

const Exercise1 = (props) => {
  const [dataGlobal, setDataGlobal] = useState({});

  useEffect(() => {
    dataLocal.getDataLocal().then((data) => {
      setDataGlobal(data);
    });
  }, []);

  // console.log(dataGlobal);

  const dataArr = Object.keys(dataGlobal).map(key => [key, dataGlobal[key]])
  console.log(dataArr);
  
  const metrics = dataArr.map((item, index) => {
  
    return (
      <figure key={index}>
        <Metric busy={false} className={null} footer={null} title={item[0]} value={item[1].toString()} valueIcon={false} variant={null}  />
      </figure>
    );
  });

  return (
    <>
      <Header title="Exercise 1" />
      <Panel>
        <PanelHeader className={null} intro="Aquí mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19" title="Datos globales Covid-19"></PanelHeader>
        <PanelContent>{metrics}</PanelContent>
      </Panel>
    </>
  );
};

export default Exercise1;
