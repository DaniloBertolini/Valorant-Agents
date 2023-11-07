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
        xl:left-2/3
        md:left-[50%]
        left-1/3
        w-[200px]
        md:w-[400px]
        lg:w-[500px]
        "
        />
      )
  )
}

export default Agent