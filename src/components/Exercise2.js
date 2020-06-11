import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import Panel from './Panel';
import { Metric } from '@marketgoo/ola';
import { connect } from 'react-redux';
import { fetchDataApi } from '../actions';
import { newTitlesAndTags } from '../services/newTitlesAndTags';
import humanFormat from 'human-format';
import '../styles/Exercises.css';
import Button from './Button';

const Exercise2 = (props) => {

  const { fetchDataApi } = props

  useEffect(() => {
    fetchDataApi();
  }, [fetchDataApi]);

  const { data } = props;
  const { error } = props;

  const renderContent = () => {
    if (data && !error) {
      const dataArr = Object.keys(data).map((key) => [key, data[key]]);

      const metrics = dataArr.map((item, index) => {
        return (
            <Metric 
              key={index} 
              title={newTitlesAndTags[item[0]].title} 
              value={humanFormat(item[1])} 
              variant={newTitlesAndTags[item[0]].tag} 
            />
        );
      });
      return <> {metrics} </>
    } if(!data && error ) {
      return <div> {error} </div>
    }
    return <Loader />
  };

  return (
    <>
      <Header title="Exercise 2" />
      <Panel 
        intro="Aquí mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19" 
        title="Datos globales Covid-19" 
        data={data}
        error={error}
        renderContent={renderContent}
      />
      <Link to="/exercise1">
        <Button title="Exercise 1"/>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data, error: state.error };
};

export default connect(mapStateToProps, { fetchDataApi })(Exercise2);
