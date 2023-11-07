function Header() {
  return (
    <header className="flex justify-between absolute top-7 w-screen">
      <img className="lg:w-12 w-8 md:ml-40 ml-20" src="./valorant-logo-white.svg" alt="valorant logo" />
      <img className="lg:w-28 w-20" src="./riot-games-logo.svg" alt="riot games logo" />
      <a href="https://github.com/DaniloBertolini/Valorant-Agents" target="_blank">
        <img className="lg:w-12 w-8 md:mr-40 mr-20" src="./github-logo.svg" alt="github logo" />
      </a>
    </header>
  );
}

export default Header;
