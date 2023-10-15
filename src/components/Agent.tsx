type TypeAgent = {
  nameAgent: string;
}

function Agent({ nameAgent }: TypeAgent) {
  return (
      (nameAgent !== '') && (
        <img
        src={`./agents/agent-${nameAgent}.png`}
        alt={`Agent ${nameAgent}`}
        className="absolute
        bottom-0 
        left-2/3
        w-[500px]
        "
        />
      )
  )
}

export default Agent