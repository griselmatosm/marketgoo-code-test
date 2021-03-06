import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Panel from './Panel';
import Button from './Button';
import { Metric } from '@marketgoo/ola';
import dataLocal from '../services/fetchData';
import { newTitlesAndTags } from '../services/newTitlesAndTags';
import humanFormat from 'human-format';
import '../styles/Exercises.css';


const Exercise1 = () => {
  const [dataGlobal, setDataGlobal] = useState({});

  useEffect(() => {
    dataLocal.getDataLocal().then((data) => {
      setDataGlobal(data);
    });
  }, []);

  const renderContent = () => {
    const dataArr = Object.keys(dataGlobal).map((key) => [key, dataGlobal[key]]);

    const metrics = dataArr.map((item, index) => {
      return (
        <Metric 
          key={index} 
          title={newTitlesAndTags[item[0]].title} 
          value={humanFormat(item[1])} 
          variant={newTitlesAndTags[item[0]].tag} 
        />
      ) 
    });
    return metrics
  }

  return (
    <>
      <Header title="Exercise 1" />
      <Panel 
        intro="Aquí mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19" 
        title="Datos globales Covid-19" 
        renderContent={renderContent}
      />
      <Link to="/exercise2">
        <Button title="Exercise 2" />
      </Link>
      <Link to="/exercise3">
        <Button title="Exercise 3" />
      </Link>
    </>
  );
};

export default Exercise1;
