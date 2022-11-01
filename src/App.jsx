import { useEffect, useState, useDeferredValue } from "react";
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
    // const [username, setUsername] = useState('Julien');
    const [userData, setUserData] = useState({
        username: "Julien",
        projects: [],
        reports: [
            /* REPORT TYPES: 
            - "User Action" (activity by user - creating new projects, adding/deleting/editing tickets)
            - "Status Change" (user changes status of ticket)
            - "Update" (app update - changelog)
        */
            {
                id: 1,
                title: "Moved '' from To-Do status to 'In Progress' status.",
                content: null,
                timeCreated: "14:50",
                dateCreated: "Tuesday 1 November, 2022",
                reportType: "Status Change",
                isRead: false,
                isDeleted: false,
            },
            {
                id: 2,
                title: "Updated Dashboard UI",
                content:
                    "Hello User! First, thank you for using Taskr. We hope that you are having a pleasant experience organising your tasks. We have exciting news! The Tasca Dashbard has received a funky makeover from our frontend team to make it easier for you to reference your information more easily. Enjoy!",
                timeCreated: "14:50",
                dateCreated: "Tuesday 1 November, 2022",
                reportType: "Update",
                isRead: true,
                isDeleted: false,
            },
            {
                id: 3,
                title: "Created a New Project: 'Portfolio Site",
                content: null,
                timeCreated: "10:30",
                dateCreated: "Saturday 13 August, 2022",
                reportType: "User Action",
                isRead: false,
                isDeleted: false,
            },
        ],
        messages: [
            {
                id: 1,
                title: "Example Message",
                content:
                    "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. ",
                author: "Botty Bot",
                timeCreated: "14:15",
                dateCreated: "Monday 31 October, 2022",
                isRead: false,
                isDeleted: false,
            },
            {
                id: 2,
                title: "Example Message",
                author: "Botty Bot",
                timeCreated: "14:30",
                dateCreated: "Monday 31 October, 2022",
                content:
                    "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. ",
                isRead: false,
                isDeleted: false,
            },
            {
                id: 3,
                title: "Example Message",
                author: "Botty Bot",
                timeCreated: "16:40",
                dateCreated: "Monday 31 October, 2022",
                content:
                    "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. ",
                isRead: true,
                isDeleted: false,
            },
        ],
    });

    function updateMessageIsRead(id) {
        userData.messages.filter((message) => {
            if (message.id === id) {
                message.isRead = true;
                setUserData({ ...userData });
                console.log(message);
                updateAll();
            }
        });
    }

    // *Function to re-render userData once updated:
    function updateAll() {
        setUserData({ ...userData });
    }

    function createNewMessage(
        title,
        author,
        timeCreated,
        dateCreated,
        content,
        isRead,
        isDeleted
    ) {
        userData.messages.push({
            id: userData.messages.length + 1,
            title: "New One",
            author: "Botty Bot",
            timeCreated: "18:30",
            dateCreated: "Tuesday 13 August, 2022",
            content:
                "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
            isRead: false,
            isDeleted: false,
        });
        updateAll();
    }

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
                        userData={userData}
                    />
                </div>
                <div className="main-container">
                    <Main
                        currentPageName={currentPageName}
                        // username={username}
                        updateCurrentPageName={(page) =>
                            updateCurrentPageName(page)
                        }
                        getYear={() => getYear()}
                        userData={userData}
                        updateMessageIsRead={(id) => updateMessageIsRead(id)}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
