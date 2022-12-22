import './header.scss';

export const Header = () => {
    return <header className="Header">
        <div className="container">
          <div className="row">
            <div className="col">👋</div>
            <div className="col">
                <nav className="nav">
                    <ul role="menu">
                        <li role="menuitem">
                            <a href="#footer">Home</a>
                        </li>
                        <li role="menuitem">
                            <a href="#footer">Footer</a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
    </header>
}