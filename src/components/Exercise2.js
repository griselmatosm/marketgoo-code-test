import React, { useEffect, useState } from 'react';
import Header from './Header';
import Loader from './Loader';
import { Panel, PanelHeader, PanelContent, Metric } from '@marketgoo/ola';
import { connect } from 'react-redux';
import { fetchDataApi } from '../actions';

const Exercise2 = (props) => {
  const [errorMessage, setErrorMessage] = useState('');

  console.log(props.data);

  useEffect(() => {
    props.fetchDataApi();
  }, []);

  const { data } = props;

  const dataArr = Object.keys(data).map((key) => [key, data[key]]);

  const metrics = dataArr.map((item, index) => {
    return (
      <figure key={index}>
        <Metric busy={false} className={null} footer={null} title={item[0]} value={item[1].toString()} valueIcon={false} variant={null} />
      </figure>
    );
  });

  const renderContent = () => {
    if (props.data) {
      
      return <> {metrics} </>;
    } else {
      return <Loader />;
    }
  };

  return (
    <>
      <Header title="Exercise 2" />
      <Panel className="">
        <PanelHeader className={null} intro="Aquí mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19" title="Datos globales Covid-19"></PanelHeader>
        <PanelContent> {renderContent()} </PanelContent>
      </Panel>
    </>
  );
};

const mapStateToProps = ({ data }) => {
  return { data };
};

export default connect(mapStateToProps, { fetchDataApi })(Exercise2);
