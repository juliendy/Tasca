import "./MainFooter.css";

function MainFooter({ getYear }) {
    return (
        <footer className="footer">
            <p className="footer__text">
                Tasca.{" "}
                <a
                    className="link-transparent"
                    href="https://twitter.com/eggsandbread"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    juliendy
                </a>{" "}
                &#169; {getYear()}.
            </p>
        </footer>
    );
}

export default MainFooter;
