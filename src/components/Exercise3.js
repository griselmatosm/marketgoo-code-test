import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Loader from './Loader';
import Panel from './Panel';
import Button from './Button';
import { Metric, Input } from '@marketgoo/ola';
import { fetchDataApi } from '../actions';
import { newTitlesAndTags } from '../services/newTitlesAndTags';
import humanFormat from 'human-format';
import '../styles/Exercises.css';

const Exercise3 = (props) => {
  const [term, setTerm] = useState('');
  const handleTerm = (ev) => setTerm(ev.target.value);

  const { fetchDataApi } = props;
  useEffect(() => {
    fetchDataApi();
  }, [fetchDataApi]);

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  const { data } = props;
  const { error } = props;

  const renderContent = () => {
    if (data && !error) {
      const dataCountries = props.data.Countries;
      const result = dataCountries.filter((item) => item.Country === term || item.Slug === term || item.CountryCode === term);

      const Arr = result.map((item) => Object.entries(item));
      Arr.map((item) => item.splice(0, 3));
      Arr.map((item) => item.pop());

      if (Arr.length > 0) {
        const metrics = Arr[0].map((item, index) => {
          return (
            <Metric 
              key={index} 
              title={newTitlesAndTags[item[0]].title} 
              value={humanFormat(item[1])} 
              variant={newTitlesAndTags[item[0]].tag} 
            />
          ) 
        });
        return <> {metrics} </>;
      }
    }
    if (!data && error) {
      return <div> {error} </div>;
    }
    return <Loader />;
  };

  return (
    <>
      <Header title="Exercise 3" />
      <form onSubmit={handleSubmit}>
        <Input onChange={handleTerm} placeholder="Enter a country" type="text" />
      </form>
      <Panel 
        intro={`Aquí mostramos información sobre los datos globales en ${term} del impacto de la enfermedad Covid-19`} title="Datos globales Covid-19" 
        renderContent={renderContent} 
      />
      <Link to="/exercise1">
        <Button title="Exercise 1" />
      </Link>
      <Link to="/exercise2">
        <Button title="Exercise 2" />
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data, error: state.error };
};

export default connect(mapStateToProps, { fetchDataApi })(Exercise3);
