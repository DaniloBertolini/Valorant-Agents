import { useState } from 'react';
import Agent from './components/Agent';
import Cards from './components/Cards';
import Header from './components/Header';
import valorantTitle from './valorant-title.svg';

function App() {
  const [agentUseState, setAgentUseState] = useState<string>('');
  const arrayAgents = [
    'astra', 'breach', 'brimstone', 'chamber', 'cypher', 'fade',
    'jett', 'kayo', 'killjoy', 'neon', 'omen', 'phoenix', 'raze',
    'reyna', 'sage', 'skye', 'sova', 'viper', 'yoru',
  ];

  const alterAgent = (agent: string) => {
    setAgentUseState(agent);
  }

  return (
    <body className="h-screen overflow-hidden relative">
      <div className="bg-dark-blue h-screen" />
      <div className="bg-pink absolute w-screen h-screen -skew-y-30 top-[55.3%]" />
      <Header />
      <div className='top-44 left-32 absolute flex h-[43%] w-2/5 flex-wrap overflow-y-auto scroll-hide'>
        {
          arrayAgents.map((agent) => (
            <section className="relative" key={ agent }>
              <Cards agent={ agent } onClick={ alterAgent } />
            </section>
          ))
        }
      </div>
      <img
      src={ valorantTitle }
      alt="valorant title"
      className='absolute bottom-[145px] left-[16%] w-[350px] -rotate-[30deg]'
      />

      <Agent nameAgent={ agentUseState }/>
    </body>
  );
}

export default App;
