type TypeCard = {
  agent: string,
  onClick: (agent: string) => void,
}

function Cards({ agent, onClick: alterAgent }: TypeCard) {
  return (
    <>
      <div
        className="
        relative
        z-10
        bg-pink
        my-4
        mx-6
        w-32
        h-32
        border
        rounded-tl-2xl
        overflow-hidden
        "
      >
        <img
        src={`./faces/agent-${agent}.png`}
        alt={`Agente ${agent}`}
        onClick={ () => alterAgent(agent)}
        />
      </div>
      <div
        className="
        absolute
        top-2
        left-4
        p-16
        border
        rounded-tl-2xl
        "
      />
      <p className="text-white text-center mb-5 capitalize font-[Valorant]">
        { agent }
      </p>
    </ >
  );
}

export default Cards;
