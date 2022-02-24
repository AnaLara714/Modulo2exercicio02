import React, { useEffect, useState } from 'react';
import Header from '../containers/header/Header';
import Footer from '../containers/footer/Footer';
import Section from '../containers/section/Seaction';
import Input from '../components/input/Input';
import List from '../components/list/List';
import api from '../_cofing/api';
import './Welcome.css';


const Welcome = (props) => {

  const {title, footer_desc} = props;

  const [sectionData, setSectionData] = useState(props.sectionData);

  const filterList = (value) => {
    fetchData(value);
  }

  const fetchData = async (value) => {
    const response = await api.get(value)

    setSectionData(response?.data.hits)
  }

  useEffect(
    () => {
      fetchData('');
    },
    []
  );

  const inputLabel = 'Barra de Pesquisa: ';

  return (
    <div className="welcome">
      <Header title={title}/>
      <Section>
          <Input label={inputLabel} callback={filterList}/>
      </Section>
      <Section>
          <List data={sectionData}/>
      </Section>
      <Footer description={footer_desc}/>
    </div>
  );

  
}

export default Welcome;
