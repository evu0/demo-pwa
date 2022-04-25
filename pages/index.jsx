import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

const Home = () => {
  const [choice, setChoice] = useState()
  let random = Math.floor(Math.random() * 2)
  const handleChoice = ()=>{
    if(random === 0){
      setChoice('Yes')
    }else{
      setChoice('No')
    }
  }
  useEffect(()=>{
    handleChoice()
  },[])
  return (  
    <>
      <div className={styles.container}>
        <h1>{choice}</h1>
      </div>
    </>
  );
}
 
export default Home;