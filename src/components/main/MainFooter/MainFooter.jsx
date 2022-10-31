import "./MainFooter.css";

function MainFooter({ getYear }) {
    return (
        <footer className="footer">
            <p className="footer__text">
                Tasca was created by{" "}
                <a
                    className="link-transparent"
                    href="https://twitter.com/eggsandbread"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Julien Liam Yasar
                </a>{" "}
                Copyright &copy; {getYear()}. All rights reserved.
            </p>
        </footer>
    );
}

export default MainFooter;
