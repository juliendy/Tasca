import { useState } from "react";
import Aside from "./components/aside/Aside";
import IconButton from "./reusable/buttons/IconButton/IconButton";
import "./App.css";
import Main from "./components/main/Main";

function App() {
    // --- Dates ---
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    function getDay() {
        return days[new Date().getDay() - 1];
    }
    function getDate() {
        return new Date().getDate();
    }
    function getMonth() {
        return months[new Date().getMonth()];
    }
    function getYear() {
        return new Date().getFullYear();
    }
    function getFullDate() {
        const day = getDay();
        const date = getDate();
        const month = getMonth();
        const year = getYear();
        return `${day} ${date} ${month}, ${year}`;
    }
    console.log(getFullDate());

    const [asideIsOpen, setAsideIsOpen] = useState();
    function toggleAside() {
        setAsideIsOpen(!setAsideIsOpen);
        console.log(asideIsOpen);
    }

    function openAside() {
        setAsideIsOpen(true);
    }

    // --- PAGES ---
    const [dashboardIsOpen, setDashboardIsOpen] = useState(true);
    const [projectsIsOpen, setProjectsIsOpen] = useState(false);
    const [reportsIsOpen, setReportsIsOpen] = useState(false);
    const [messagesIsOpen, setMessagesIsOpen] = useState(false);
    const [settingsIsOpen, setSettingsIsOpen] = useState(false);
    const [logoutIsOpen, setLogoutIsOpen] = useState(false);

    // Aside Button Clicked:
    function asideButtonClicked(title) {
        if (title === "Dashboard") {
            openDashboard();
        } else if (title === "Projects") {
            openProjects();
        } else if (title === "Reports") {
            openReports();
        } else if (title === "Messages") {
            openMessages();
        } else if (title === "Settings") {
            openSettings();
        } else if (title === "Logout") {
            openLogout();
        }
    }

    // Aside Function (depending on button clicked):
    function openDashboard() {
        console.log("Dashboard Opened!");
        updateCurrentPageName("Dashboard");
        setDashboardIsOpen(true);
        setProjectsIsOpen(false);
        setReportsIsOpen(false);
        setMessagesIsOpen(false);
        setSettingsIsOpen(false);
        setLogoutIsOpen(false);
    }

    function openProjects() {
        console.log("Projects Opened!");
        // setAsideIsOpen(true);
        updateCurrentPageName("Projects");
        setDashboardIsOpen(false);
        setProjectsIsOpen(true);
        setReportsIsOpen(false);
        setMessagesIsOpen(false);
        setSettingsIsOpen(false);
        setLogoutIsOpen(false);
    }

    function openReports() {
        console.log("Reports Opened!");
        updateCurrentPageName("Reports");
        setDashboardIsOpen(false);
        setProjectsIsOpen(false);
        setReportsIsOpen(true);
        setMessagesIsOpen(false);
        setSettingsIsOpen(false);
        setLogoutIsOpen(false);
    }

    function openMessages() {
        console.log("Messages Opened!");
        updateCurrentPageName("Messages");
        setDashboardIsOpen(false);
        setProjectsIsOpen(false);
        setReportsIsOpen(false);
        setMessagesIsOpen(true);
        setSettingsIsOpen(false);
        setLogoutIsOpen(false);
    }

    function openSettings() {
        console.log("Settings Opened!");
        updateCurrentPageName("Settings");
        setDashboardIsOpen(false);
        setProjectsIsOpen(false);
        setReportsIsOpen(false);
        setMessagesIsOpen(false);
        setSettingsIsOpen(true);
        setLogoutIsOpen(false);
    }

    function openLogout() {
        console.log("Logout Opened!");
        updateCurrentPageName("Logout");
        setDashboardIsOpen(false);
        setProjectsIsOpen(false);
        setReportsIsOpen(false);
        setMessagesIsOpen(false);
        setSettingsIsOpen(false);
        setLogoutIsOpen(true);
    }

    function updateCurrentPageName(page) {
        setCurrentPageName(page);
    }

    // --- USER DETAILS ---
    const [currentPageName, setCurrentPageName] = useState("Dashboard");
    const [username, setUsername] = useState("Julien");

    return (
        <div className="App">
            <div className="container">
                <div
                    className={
                        asideIsOpen
                            ? "aside-container"
                            : "aside-container aside-container-disabled"
                    }
                >
                    <IconButton
                        iconClass={`aside-container__button ${
                            asideIsOpen
                                ? "fa-solid fa-angles-left"
                                : "fa-angles-right"
                        }`}
                        handleClick={() => toggleAside()}
                    />
                    <Aside
                        asideIsOpen={asideIsOpen}
                        handleClick={(title) => asideButtonClicked(title)}
                        updateCurrentPageName={() =>
                            updateCurrentPageName("Projects")
                        }
                    />
                </div>
                <div className="main-container">
                    <Main
                        currentPageName={currentPageName}
                        username={username}
                        updateCurrentPageName={(page) =>
                            updateCurrentPageName(page)
                        }
                        getYear={() => getYear()}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
