import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';
import Container from './styles';
import Button from '../../components/Button';
import { motion } from "framer-motion"
import Footer from '../../components/Footer';


const Home = () => {
  const history = useHistory();
  const handleClick = (route) => {
    localStorage.setItem('Forms', JSON.stringify([]));
    history.push(route);
  }
  return (
    <>
      <Header title="CNT"/>
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{  
           opacity: 1,     
           y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Button title="Formulário" value="/identification" clickFunction={handleClick}/>
        </motion.div>
      </Container>
      <Footer buttons={[{ title: 'Sinalizar agente', link: '/' }, { title: 'Ajude-me', link: '/' }]}/>
    </>
  );
};

export default Home;