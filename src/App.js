import './App.scss';
import { Canvas } from '@react-three/fiber';
import Lights from './Components/Lights';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import Loaders from './Components/Loaders';
import Button from './Components/Button';
import Robo from './Components/Robo';

function App() {
  const [isRhino, setRhino] = useState("");
  const [isOne, setOne] = useState("");
  const [isTwo, setTwo] = useState("");
  const [isThree, setThree] = useState("");
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Changed!");
  },[count]);
  console.log(count)

  return (
    <>
      <div className='btn-container'>
        <Button setRhino={setRhino} isRhino={isRhino} setCount={setCount} name = "Rhino"/>
        <Button setOne={setOne} isOne={isOne} setCount={setCount} name = "One"/>
        <Button setTwo={setTwo} isTwo={isTwo} setCount={setCount} name = "Two"/>
        <Button setThree={setThree} isThree={isThree} setCount={setCount} name = "Three"/>
      </div>
      <Canvas className='canva-container'>
        <OrbitControls/>
        <Lights/>
        <Suspense fallback={null}>
          <Robo isRhino={isRhino} isOne={isOne} isTwo={isTwo} isThree={isThree}/>
        </Suspense>        
      </Canvas>
      <Loaders/>
    </>
  );
}

export default App;
