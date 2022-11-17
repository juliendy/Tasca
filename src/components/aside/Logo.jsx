import "./Logo.css";

function Logo({ asideIsShown }) {
    return (
        <div className="aside__logo">
            {/* Logo Icon */}
            <div className="logo-container__logo">
                <i className="fa-solid fa-layer-group"></i>
            </div>
            {/* Logo Text */}
            {asideIsShown && <p className="logo-container__text">Tasca</p>}
        </div>
    );
}

export default Logo;
