import React, { useState } from 'react';
import Robot from './components/Robot';

import Style from './App.module.css';
import mock from './mockdata/robot.json';

interface RobotProps {
  name: string;
  id: string;
}

function App() {
  const [Rotbots, setRotbots] = useState<RobotProps[]>(mock);
  const generateNewRobot = () => {
    const array: RobotProps[] = [];
    new Array(12).fill('').forEach(() => {
      let seed = Math.floor(Math.random() * 999) + '';
      array.push({
        id: seed,
        name: seed,
      });
    });
    console.log(array);

    setRotbots(array);
  };

  return (
    <div className="App">
      <header>
        <h2 className={Style.title}>robot gallery</h2>
      </header>

      <div className={Style.container}>
        {Rotbots.map((robot, i) => (
          <Robot {...robot} key={i} />
        ))}
      </div>
      <div className={Style.x}>
        <button onClick={generateNewRobot}>generate</button>
      </div>
    </div>
  );
}

export default App;
