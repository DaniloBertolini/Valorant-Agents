function Header() {
  return (
    <header className="flex justify-between absolute top-7 w-screen">
      <img className="w-12 ml-40" src="./valorant-logo-white.svg" alt="valorant logo" />
      <img className="w-28" src="./riot-games-logo.svg" alt="riot games logo" />
      <a href="https://github.com/DaniloBertolini/Valorant-Agents" target="_blank">
        <img className="w-12 mr-40 my-" src="./github-logo.svg" alt="github logo" />
      </a>
    </header>
  );
}

export default Header;
