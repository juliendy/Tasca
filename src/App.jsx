import { useEffect, useState } from "react";
import "./App.css";
import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";
import IconButton from "./reusable/buttons/IconButton/IconButton";

function App() {
    // --- 📅 Dates 📅 ---
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
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
    const months_short = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    function getDay() {
        return days[new Date().getDay()];
    }
    function getDate() {
        return new Date().getDate();
    }
    function getMonth() {
        return months[new Date().getMonth()];
    }
    function getMonth_Short() {
        return months_short[new Date().getMonth()];
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

    function getShortDate() {
        const date = getDate();
        const month = getMonth_Short();
        const year = getYear();
        return `${date} ${month}, ${year}`;
    }

    // --- ⏰ Times ⏰ ---
    function getCurrentTime() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        if (hours < 10) {
            hours = `${0}${hours}`;
        }

        if (minutes < 10) {
            minutes = `${0}${minutes}`;
        }

        return `${hours}:${minutes}`;
    }

    // --- Aside ---
    const [asideIsOpen, setAsideIsOpen] = useState(true);
    // Toggle Aside
    function toggleAside() {
        setAsideIsOpen(!asideIsOpen);
    }
    // Open Aside
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

    const [projectPageIsOpen, setProjectPageIsOpen] = useState(false);
    const [taskPageIsOpen, setTaskPageIsOpen] = useState(false);

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
        setProjectPageIsOpen(false);
        setTaskPageIsOpen(false);
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
        setProjectPageIsOpen(false);
        setTaskPageIsOpen(false);
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
        setProjectPageIsOpen(false);
        setTaskPageIsOpen(false);
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
        setProjectPageIsOpen(false);
        setTaskPageIsOpen(false);
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
        setProjectPageIsOpen(false);
        setTaskPageIsOpen(false);
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
        setProjectPageIsOpen(false);
        setTaskPageIsOpen(false);
    }

    // OPEN PROJECT
    const [currentProjectId, setCurrentProjectId] = useState(null);

    function openProjectPage(id) {
        console.log("Project Page Opened!");
        updateCurrentPageName("Project Page");

        setDashboardIsOpen(false);
        setProjectsIsOpen(false);
        setReportsIsOpen(false);
        setMessagesIsOpen(false);
        setSettingsIsOpen(false);
        setLogoutIsOpen(false);
        setProjectPageIsOpen(true);
        setTaskPageIsOpen(false);

        userData.projects.map((project) => {
            if (project.id === id) {
                // console.log('ID is ' + project);
                console.log(project);
                setCurrentProjectId(project.id);
            }
            console.log(`Opening Project ID ${id}`);
        });
    }

    // OPEN TASK
    function openTaskPage() {
        console.log("Task Page Opened!");
        updateCurrentPageName("Task Page");

        setDashboardIsOpen(false);
        setProjectsIsOpen(false);
        setReportsIsOpen(false);
        setMessagesIsOpen(false);
        setSettingsIsOpen(false);
        setLogoutIsOpen(false);
        setProjectPageIsOpen(false);
        setTaskPageIsOpen(true);
    }

    function updateCurrentPageName(page) {
        setCurrentPageName(page);
    }
    // ----- 🔨 EDITING PROJECT VALUES 🔨 -----
    // Update Input Value:
    function updateInputValue(e, target) {
        target.title = e.target.value;
        // console.log(target);
        updateAll();
    }

    // --- USER DETAILS ---
    const [currentPageName, setCurrentPageName] = useState("Dashboard");
    // const [username, setUsername] = useState('Julien');
    const [userData, setUserData] = useState({
        username: "Julien",
        projects: [
            // --- START OF PROJECTS ---
            {
                id: 1,
                title: "Getting Started",
                author: "Botty",
                timeCreated: getCurrentTime(),
                dateCreated: getFullDate(),
                tasks: {
                    toDo: [
                        {
                            id: 1,
                            title: "Create Your Own Project!",
                            author: "Botty",
                            content:
                                "Use Tasca to plan and organise your own projects.",
                            tag: "Setup",
                            timeCreated: getCurrentTime(),
                            dateCreated: getFullDate(),
                            dateCreatedShort: getShortDate(),
                            comments: [
                                {
                                    id: 1,
                                    author: "Botty",
                                    content:
                                        "You can create your own project by navigating to the 'Projects' page and pressing the 'Create Project' button!",
                                    dateCreated: getFullDate(),
                                    timeCreated: getCurrentTime(),
                                    isPriority: false,
                                    isLiked: false,
                                    isDeleted: false,
                                },
                                {
                                    id: 2,
                                    author: "Botty",
                                    content:
                                        "You can change the status of your current task by pressing the icon next to 'Status'.",
                                    dateCreated: getFullDate(),
                                    timeCreated: getCurrentTime(),
                                    isPriority: false,
                                    isLiked: false,
                                    isDeleted: false,
                                },
                            ],
                            isDeleted: false,
                        },
                    ],
                    inProgress: [],
                    complete: [],
                },
                isDeleted: false,
                isComplete: false,
            },
            /*
        {
          "id": 1,
          "title": "Portfolio Website",
          "author": "Robert",
          "timeCreated": getCurrentTime(),
          "dateCreated": getFullDate(),
          "tasks": {
            "toDo": [
              {
                "id": 1,
                "title": "Create New Wireframe",
                "author": "Julien",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "tag": "UIDesign",
                "timeCreated": getCurrentTime(),
                "dateCreated": getFullDate(),
                "dateCreatedShort": getShortDate(),
                "comments": [
                  {
                    "id": 1,
                    "author": "Mike",
                    "content": "This is some content to check the comment box!",
                    "dateCreated": getFullDate(),
                    "timeCreated": getCurrentTime(),
                    "isPriority": true,
                    "isLiked": false,
                    "isDeleted": false
                  },
                  {
                    "id": 2,
                    "author": "Dan",
                    "content": "This is some content to check the comment box!",
                    "dateCreated": getFullDate(),
                    "timeCreated": getCurrentTime(),
                    "isPriority": false,
                    "isLiked": true,
                    "isDeleted": false
                  },
                  {
                    "id": 3,
                    "author": "Dan",
                    "content": "This is some content to check the comment box!",
                    "dateCreated": getFullDate(),
                    "timeCreated": getCurrentTime(),
                    "isPriority": false,
                    "isLiked": false,
                    "isDeleted": false
                  },
                ],
                "isDeleted": false
              },
              {
                "id": 2,
                "title": "Update Email Form",
                "author": "Robert",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "tag": "Frontend",
                "timeCreated": getCurrentTime(),
                "dateCreated": getFullDate(),
                "dateCreatedShort": getShortDate(),
                "comments": [
                  {
                    "id": 1,
                    "author": "Dan",
                    "content": "This is some content to check the comment box!",
                    "dateCreated": getFullDate(),
                    "timeCreated": getCurrentTime(),
                    "isPriority": false,
                    "isLiked": false,
                    "isDeleted": false
                  },
                ],
                "isDeleted": false
              }
            ],
            "inProgress": [
              {
                "id": 1,
                "title": "Add New Projects",
                "author": "Julien",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "tag": "Frontend",
                "timeCreated": getCurrentTime(),
                "dateCreated": getFullDate(),
                "dateCreatedShort": getShortDate(),
                "comments": [
                  {
                    "id": 1,
                    "author": "Dan",
                    "content": "This is some content to check the comment box!",
                    "dateCreated": getFullDate(),
                    "timeCreated": getCurrentTime(),
                    "isPriority": true,
                    "isLiked": true,
                    "isDeleted": false
                  },
                ],
                "isDeleted": false
              }
            ],
            "complete": [
              {
                "id": 1,
                "title": "Publish Website",
                "author": "Julien",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "tag": "Frontend",
                "timeCreated": getCurrentTime(),
                "dateCreated": getFullDate(),
                "dateCreatedShort": getShortDate(),
                "comments": [
                  {
                    "id": 1,
                    "author": "Irina",
                    "content": "This is some content to check the comment box!",
                    "dateCreated": getFullDate(),
                    "timeCreated": getCurrentTime(),
                    "isPriority": false,
                    "isLiked": false,
                    "isDeleted": false
                  },
                ],
                "isDeleted": false
              }
            ]
          },
          "isDeleted": false,
          "isComplete": false
        },
        {
          "id": 2,
          "title": "Tasca",
          "author": "User",
          "timeCreated": getCurrentTime(),
          "dateCreated": getFullDate(),
          "tasks": {
            "toDo": [],
            "inProgress": [],
            "complete": []
          },
          "isDeleted": false,
          "isComplete": false
        },
        {
          "id": 3,
          "title": "Wordle Clone",
          "author": "Robert",
          "timeCreated": getCurrentTime(),
          "dateCreated": getFullDate(),
          "tasks": {
            "toDo": [],
            "inProgress": [],
            "complete": []
          },
          "isDeleted": false,
          "isComplete": false
        },
        */
            // --- END OF PROJECTS ---
        ],
        reports: [
            {
                id: 1,
                title: "Tasca v1.0.0",
                content:
                    "Tasca is currently in Beta stage production. Current functions include creating your own projects, adding and updating tasks, and checking messages and reports.",
                timeCreated: getCurrentTime(),
                dateCreated: getFullDate(),
                reportType: "Update",
                isRead: false,
                isDeleted: false,
            },
            /*{
          "id": 1,
          "title": "Moved 'Update Header' from 'To-Do' to 'In Progress'.",
          "content": null,
          "timeCreated": "13:05",
          "dateCreated": "Wednesday 5 July, 2022",
          "reportType": "Status Change",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 2,
          "title": "Updated Dashboard UI",
          "content": "Hello User! First, thank you for using Tasca. We hope that you are having a pleasant experience organising your tasks. We have exciting news! The Tasca Dashbard has received a funky makeover from our frontend team to make it easier for you to reference your information more easily. Enjoy!",
          "timeCreated": "17:10",
          "dateCreated": "Friday 12 August, 2022",
          "reportType": "Update",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 3,
          "title": "Created a New Project: 'Portfolio'.",
          "content": null,
          "timeCreated": "10:30",
          "dateCreated": "Saturday 13 August, 2022",
          "reportType": "User Update",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 4,
          "title": "Project 'Portfolio' Deleted",
          "content": null,
          "timeCreated": "10:30",
          "dateCreated": "Saturday 13 August, 2022",
          "reportType": "Warning",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 5,
          "title": "Finished Ticket for 'Portfolio'.",
          "content": null,
          "timeCreated": "10:30",
          "dateCreated": "Saturday 13 August, 2022",
          "reportType": "Complete",
          "isRead": false,
          "isDeleted": false
        }*/
        ],
        messages: [
            {
                id: 1,
                title: "Welcome to Tasca!",
                content: `Hello! Welcome to Tasca - the place to break down your projects into smaller, manageable tasks! Navigate to the 'Projects' page and get started right away! We hope you have a pleasant experience organising your work!`,
                author: "Botty",
                timeCreated: getCurrentTime(),
                dateCreated: getFullDate(),
                isRead: false,
                isDeleted: false,
            },
            {
                id: 2,
                title: "Thank you for your support!",
                content: `Hi! I'm Julien, the creator of Tasca. I decided to create this project to get more organised with my own portfolio projects. It was also my way of learning React.js by effectively jumping in at the deep end and learning as I went. If you are here, then I would like to thank you for your support and for taking the time to check out my project! Feel free to connect with me over on Twitter @eggsandbread (link in the footer at the bottom of the page), as I intend to add more features and improve Tasca in the coming weeks and months.`,
                author: "Julien",
                timeCreated: getCurrentTime(),
                dateCreated: getFullDate(),
                isRead: false,
                isDeleted: false,
            },
            /*{
          "id": 1,
          "title": "Example Message",
          "content": "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
          "author": "Botty",
          "timeCreated": "11:15",
          "dateCreated": "Monday 12 August, 2022",
          "isRead": true,
          "isDeleted": false
        },
        {
          "id": 2,
          "title": "Example Message",
          "author": "Botty",
          "timeCreated": '18:30',
          "dateCreated": 'Tuesday 13 August, 2022',
          "content": "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
          "isRead": false,
          "isDeleted": false
        },
        {
          "id": 3,
          "title": "Example Message",
          "author": "Botty",
          "timeCreated": '18:30',
          "dateCreated": 'Tuesday 13 August, 2022',
          "content": "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
          "isRead": false,
          "isDeleted": false
        }*/
        ],
    });

    // Change Message isRead to true:
    function updateMessageIsRead(id) {
        userData.messages.filter((message) => {
            if (message.id === id) {
                message.isRead = true;
                console.log(message);
                updateAll();
            }
        });
    }

    // Change Report isRead to true:
    function updateReportIsRead(id) {
        userData.reports.filter((report) => {
            if (report.id === id) {
                report.isRead = true;
                console.log(report);
                updateAll();
            }
        });
    }

    // *Function to re-render userData once updated:
    function updateAll() {
        setUserData({ ...userData });
    }

    // Create New Message Function (currently inactive)
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
            author: "Botty",
            timeCreated: "18:30",
            dateCreated: "Tuesday 13 August, 2022",
            content:
                "Hello, this is some example message content just to check out how it looks once it is rendered in the broswer. Thanks!",
            isRead: false,
            isDeleted: false,
        });
        updateAll();
        console.log(userData.messages);
    }

    // Create New Report Function (current inactive)
    function createNewReport(
        title,
        content,
        timeCreated,
        dateCreated,
        reportType,
        isRead,
        isDeleted
    ) {
        userData.reports.push({
            id: userData.reports.length + 1,
            title: title,
            content: content,
            timeCreated: timeCreated,
            dateCreated: dateCreated,
            reportType: reportType,
            isRead: isRead,
            isDeleted: isDeleted,
        });
        updateAll();
        console.log(userData.reports);
    }

    // Create New Project
    function createNewProject(projectName) {
        userData.projects.push({
            id: userData.projects.length + 1,
            title: projectName,
            author: userData.username,
            timeCreated: getCurrentTime(),
            dateCreated: getFullDate(),
            tasks: {
                toDo: [],
                inProgress: [],
                complete: [],
            },
            isDeleted: false,
            isComplete: false,
        });
        updateAll();
        openProjectPage(userData.projects.length);
        console.log(userData.projects);
    }

    // Create New Project Task:
    function createNewTask(projectId, taskType) {
        // console.log(`This is a '${taskType}' for project ID ${projectId}`);
        userData.projects.filter((project) => {
            if (project.id === projectId) {
                if (taskType === "To Do") {
                    project.tasks.toDo.push({
                        id: project.tasks.toDo.length + 1,
                        title: "",
                        author: userData.username,
                        content: "",
                        tag: "",
                        timeCreated: getCurrentTime(),
                        dateCreated: getFullDate(),
                        dateCreatedShort: getShortDate(),
                        comments: [],
                        isDeleted: false,
                    });
                    openTaskPage(project.tasks.toDo.length, "To Do", projectId);
                } else if (taskType === "In Progress") {
                    project.tasks.inProgress.push({
                        id: project.tasks.inProgress.length + 1,
                        title: "",
                        author: userData.username,
                        content: "",
                        tag: "",
                        timeCreated: getCurrentTime(),
                        dateCreated: getFullDate(),
                        dateCreatedShort: getShortDate(),
                        comments: [],
                        isDeleted: false,
                    });
                    openTaskPage(
                        project.tasks.inProgress.length,
                        "In Progress",
                        projectId
                    );
                } else if (taskType === "Complete") {
                    project.tasks.complete.push({
                        id: project.tasks.complete.length + 1,
                        title: "",
                        author: userData.username,
                        content: "",
                        tag: "",
                        timeCreated: getCurrentTime(),
                        dateCreated: getFullDate(),
                        dateCreatedShort: getShortDate(),
                        comments: [],
                        isDeleted: false,
                    });
                    openTaskPage(
                        project.tasks.complete.length,
                        "Complete",
                        projectId
                    );
                }
                updateAll();
            }
        });
    }

    // Open Project Task Page
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const [currentTaskType, setCurrentTaskType] = useState(null);

    function openTaskPage(taskId, taskType, currentProjectId) {
        // console.log(`This is task ${taskId} of the ${taskType} category for project ${currentProjectId}`);
        setCurrentPageName("Task Page");
        setCurrentTaskId(taskId);
        setCurrentTaskType(taskType);
        setCurrentProjectId(currentProjectId);
        // Need to pass these 3 values into Main.js and into TaskPage.js
    }

    // Back Button from TaskPage to Project Page ---
    function updateCurrentProject(id) {
        setCurrentProjectId(id);
    }
    function taskBackButtonClicked() {
        openProjectPage(currentProjectId);
    }
    // ---

    // UPDATE INPUT VALUES OF TASK PAGE
    function updateTaskTitleValue(e, target) {
        // console.log(e.target.value)
        // console.log(target.title)
        target.title = e.target.value;
        updateAll();
    }
    function updateTaskTagValue(e, target) {
        target.tag = e.target.value;
        updateAll();
    }
    function updateTaskContentValue(e, target) {
        target.content = e.target.value;
        updateAll();
    }

    // Toggle Priority Button (Comment)
    function togglePriorityButton(
        currentProjectId,
        currentTaskType,
        currentTaskId,
        id
    ) {
        userData.projects.filter((project) => {
            if (project.id === currentProjectId) {
                if (currentTaskType === "To Do") {
                    // console.log(project.tasks.toDo);
                    project.tasks.toDo.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isPriority = !comment.isPriority;
                                    console.log(comment.isPriority);
                                }
                            });
                        }
                    });
                } else if (currentTaskType === "In Progress") {
                    // console.log(project.tasks.inProgress);
                    project.tasks.inProgress.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isPriority = !comment.isPriority;
                                }
                            });
                        }
                    });
                } else if (currentTaskType === "Complete") {
                    // console.log(project.tasks.complete);
                    project.tasks.complete.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isPriority = !comment.isPriority;
                                }
                            });
                        }
                    });
                }
            }
        });
        updateAll();
    }

    // Toggle Like Button (Comment)
    function toggleLikeButton(
        currentProjectId,
        currentTaskType,
        currentTaskId,
        id
    ) {
        userData.projects.filter((project) => {
            if (project.id === currentProjectId) {
                if (currentTaskType === "To Do") {
                    // console.log(project.tasks.toDo);
                    project.tasks.toDo.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isLiked = !comment.isLiked;
                                }
                            });
                        }
                    });
                } else if (currentTaskType === "In Progress") {
                    // console.log(project.tasks.inProgress);
                    project.tasks.inProgress.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isLiked = !comment.isLiked;
                                }
                            });
                        }
                    });
                } else if (currentTaskType === "Complete") {
                    // console.log(project.tasks.complete);
                    project.tasks.complete.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isLiked = !comment.isLiked;
                                }
                            });
                        }
                    });
                }
            }
        });
        updateAll();
    }

    // Delete Button (Comment)
    function deleteCommentButton(
        currentProjectId,
        currentTaskType,
        currentTaskId,
        id
    ) {
        userData.projects.filter((project) => {
            if (project.id === currentProjectId) {
                if (currentTaskType === "To Do") {
                    // console.log(project.tasks.toDo);
                    project.tasks.toDo.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isDeleted = true;
                                }
                            });
                        }
                    });
                } else if (currentTaskType === "In Progress") {
                    // console.log(project.tasks.inProgress);
                    project.tasks.inProgress.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isDeleted = true;
                                }
                            });
                        }
                    });
                } else if (currentTaskType === "Complete") {
                    // console.log(project.tasks.complete);
                    project.tasks.complete.filter((task) => {
                        if (task.id === currentTaskId) {
                            // console.log(task.comments);
                            task.comments.filter((comment) => {
                                if (comment.id === id) {
                                    comment.isDeleted = true;
                                }
                            });
                        }
                    });
                }
            }
        });
        updateAll();
    }

    // Create New Comment
    const [commentInputValue, setCommentInputValue] = useState("");
    function updateCommentInputValue(e) {
        setCommentInputValue(e.target.value);
        updateAll();
    }
    function createNewComment(
        currentProjectId,
        currentTaskId,
        currentTaskType
    ) {
        if (commentInputValue !== "") {
            userData.projects.filter((project) => {
                if (project.id === currentProjectId) {
                    if (currentTaskType === "To Do") {
                        // console.log(project.tasks.toDo);
                        project.tasks.toDo.filter((task) => {
                            if (task.id === currentTaskId) {
                                // console.log(task);
                                task.comments.push({
                                    id: task.comments.length + 1,
                                    author: userData.username,
                                    content: commentInputValue,
                                    dateCreated: getFullDate(),
                                    timeCreated: getCurrentTime(),
                                    isPriority: false,
                                    isLiked: false,
                                    isDeleted: false,
                                });
                            }
                        });
                    } else if (currentTaskType === "In Progress") {
                        // console.log(project.tasks.inProgress);
                        project.tasks.inProgress.filter((task) => {
                            if (task.id === currentTaskId) {
                                // console.log(task);
                                task.comments.push({
                                    id: task.comments.length + 1,
                                    author: userData.username,
                                    content: commentInputValue,
                                    dateCreated: getFullDate(),
                                    timeCreated: getCurrentTime(),
                                    isPriority: false,
                                    isLiked: false,
                                    isDeleted: false,
                                });
                            }
                        });
                    } else if (currentTaskType === "Complete") {
                        // console.log(project.tasks.complete);
                        project.tasks.complete.filter((task) => {
                            if (task.id === currentTaskId) {
                                // console.log(task);
                                task.comments.push({
                                    id: task.comments.length + 1,
                                    author: userData.username,
                                    content: commentInputValue,
                                    dateCreated: getFullDate(),
                                    timeCreated: getCurrentTime(),
                                    isPriority: false,
                                    isLiked: false,
                                    isDeleted: false,
                                });
                            }
                        });
                    }
                }
            });
            setCommentInputValue("");
            updateAll();
        }
    }

    function deleteProjectButton(currentProjectId) {
        // console.log(currentProjectId)
        userData.projects.filter((project) => {
            if (project.id === currentProjectId) {
                project.isDeleted = true;
                // console.log(project);
                createNewReport(
                    "Project Deleted",
                    `'${project.title}' was deleted by ${userData.username}.`,
                    getCurrentTime(),
                    getFullDate(),
                    "Warning",
                    false,
                    false
                );
            }
        });
        updateAll();
        setCurrentPageName("Projects");
    }

    function deleteTaskButton(
        currentProjectId,
        currentTaskId,
        currentTaskType
    ) {
        // console.log('Task deleted')
        userData.projects.filter((project) => {
            if (project.id === currentProjectId) {
                // console.log(project)
                if (currentTaskType === "To Do") {
                    project.tasks.toDo.filter((task) => {
                        if (task.id === currentTaskId) {
                            task.isDeleted = true;
                            // console.log(task)
                            createNewReport(
                                "Task Deleted",
                                `A task with the title of '${task.title}' was deleted from project '${project.title}' by ${userData.username}. This task was in the 'To Do' category at the time of deletion.`,
                                getCurrentTime(),
                                getFullDate(),
                                "Warning",
                                false,
                                false
                            );
                        }
                    });
                } else if (currentTaskType === "In Progress") {
                    project.tasks.inProgress.filter((task) => {
                        if (task.id === currentTaskId) {
                            task.isDeleted = true;
                            // console.log(task)
                            createNewReport(
                                "Task Deleted",
                                `A task with the title of '${task.title}' was deleted from project '${project.title}' by ${userData.username}. This task was in the 'In Progress' category at the time of deletion.`,
                                getCurrentTime(),
                                getFullDate(),
                                "Warning",
                                false,
                                false
                            );
                        }
                    });
                } else if (currentTaskType === "Complete") {
                    project.tasks.complete.filter((task) => {
                        if (task.id === currentTaskId) {
                            task.isDeleted = true;
                            // console.log(task)
                            createNewReport(
                                "Task Deleted",
                                `A task with the title of '${task.title}' was deleted from project '${project.title}' by ${userData.username}. This task was in the 'Complete' category at the time of deletion.`,
                                getCurrentTime(),
                                getFullDate(),
                                "Warning",
                                false,
                                false
                            );
                        }
                    });
                }
            }
        });
        updateAll();
        setCurrentPageName("Project Page");
    }

    // Change Task Status
    function changeTaskStatus(
        changeToStatus,
        currentProjectId,
        currentTaskType,
        currentTaskId
    ) {
        // console.log(changeToStatus);
        userData.projects.filter((project) => {
            if (project.id === currentProjectId) {
                // console.log(project);
                if (currentTaskType === "To Do") {
                    project.tasks.toDo.filter((task) => {
                        if (task.id === currentTaskId) {
                            const newTask = { ...task };
                            if (changeToStatus === "To Do") {
                                newTask.id = project.tasks.toDo.length + 1;
                                project.tasks.toDo.push(newTask);
                                openTaskPage(
                                    project.tasks.toDo.length,
                                    "To Do",
                                    newTask.id
                                );
                            } else if (changeToStatus === "In Progress") {
                                newTask.id =
                                    project.tasks.inProgress.length + 1;
                                project.tasks.inProgress.push(newTask);
                                openTaskPage(
                                    project.tasks.inProgress.length,
                                    "In Progress",
                                    newTask.id
                                );
                            } else if (changeToStatus === "Complete") {
                                newTask.id = project.tasks.complete.length + 1;
                                project.tasks.complete.push(newTask);
                                openTaskPage(
                                    project.tasks.complete.length,
                                    "Complete",
                                    newTask.id
                                );
                            }
                            task.isDeleted = true;
                            // console.log(project);
                        }
                    });
                } else if (currentTaskType === "In Progress") {
                    project.tasks.inProgress.filter((task) => {
                        if (task.id === currentTaskId) {
                            const newTask = { ...task };
                            if (changeToStatus === "To Do") {
                                newTask.id = project.tasks.toDo.length + 1;
                                project.tasks.toDo.push(newTask);
                                openTaskPage(
                                    project.tasks.toDo.length,
                                    "To Do",
                                    newTask.id
                                );
                            } else if (changeToStatus === "In Progress") {
                                newTask.id =
                                    project.tasks.inProgress.length + 1;
                                project.tasks.inProgress.push(newTask);
                                openTaskPage(
                                    project.tasks.inProgress.length,
                                    "In Progress",
                                    newTask.id
                                );
                            } else if (changeToStatus === "Complete") {
                                newTask.id = project.tasks.complete.length + 1;
                                project.tasks.complete.push(newTask);
                                openTaskPage(
                                    project.tasks.complete.length,
                                    "Complete",
                                    newTask.id
                                );
                            }
                            task.isDeleted = true;
                            // console.log(task);
                        }
                    });
                } else if (currentTaskType === "Complete") {
                    project.tasks.complete.filter((task) => {
                        if (task.id === currentTaskId) {
                            const newTask = { ...task };
                            if (changeToStatus === "To Do") {
                                newTask.id = project.tasks.toDo.length + 1;
                                project.tasks.toDo.push(newTask);
                                openTaskPage(
                                    project.tasks.toDo.length,
                                    "To Do",
                                    newTask.id
                                );
                            } else if (changeToStatus === "In Progress") {
                                newTask.id =
                                    project.tasks.inProgress.length + 1;
                                project.tasks.inProgress.push(newTask);
                                openTaskPage(
                                    project.tasks.inProgress.length,
                                    "In Progress",
                                    newTask.id
                                );
                            } else if (changeToStatus === "Complete") {
                                newTask.id = project.tasks.complete.length + 1;
                                project.tasks.complete.push(newTask);
                                openTaskPage(
                                    project.tasks.complete.length,
                                    "Complete",
                                    newTask.id
                                );
                            }
                            task.isDeleted = true;
                            // console.log(task);
                        }
                    });
                }
            }
        });
        setCurrentProjectId(currentProjectId);
        updateAll();
    }

    function deleteMessage(id) {
        // console.log(`Message ${id} is deleted`);
        userData.messages.filter((message) => {
            if (message.id === id) {
                message.isDeleted = true;
            }
        });
        updateAll();
    }

    function deleteReport(id) {
        // console.log(`Report ${id} is deleted`);
        userData.reports.filter((report) => {
            if (report.id === id) {
                report.isDeleted = true;
            }
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
                                : "fa-solid fa-angles-right"
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
                        createNewProject={(projectName) =>
                            createNewProject(projectName)
                        }
                        openProjectPage={(id) => openProjectPage(id)}
                    />
                </div>
                <div className="main-container">
                    <Main
                        currentPageName={currentPageName}
                        updateCurrentPageName={(page) =>
                            updateCurrentPageName(page)
                        }
                        getYear={() => getYear()}
                        userData={userData}
                        updateMessageIsRead={(id) => updateMessageIsRead(id)}
                        updateReportIsRead={(id) => updateReportIsRead(id)}
                        createNewProject={(projectName) =>
                            createNewProject(projectName)
                        }
                        openProjectPage={(id) => openProjectPage(id)}
                        currentProjectId={currentProjectId}
                        openProjects={() => openProjects()}
                        updateInputValue={(e, target) =>
                            updateInputValue(e, target)
                        }
                        asideIsOpen={asideIsOpen}
                        createNewTask={(projectId, taskType) =>
                            createNewTask(projectId, taskType)
                        }
                        openTaskPage={(taskId, taskType, currentProjectId) =>
                            openTaskPage(taskId, taskType, currentProjectId)
                        }
                        currentTaskId={currentTaskId}
                        currentTaskType={currentTaskType}
                        updateCurrentProject={(id) => updateCurrentProject(id)}
                        taskBackButtonClicked={() => taskBackButtonClicked()}
                        updateTaskTitleValue={(e, target) =>
                            updateTaskTitleValue(e, target)
                        }
                        updateTaskTagValue={(e, target) =>
                            updateTaskTagValue(e, target)
                        }
                        updateTaskContentValue={(e, target) =>
                            updateTaskContentValue(e, target)
                        }
                        togglePriorityButton={(
                            currentProjectId,
                            currentTaskType,
                            currentTaskId,
                            id
                        ) =>
                            togglePriorityButton(
                                currentProjectId,
                                currentTaskType,
                                currentTaskId,
                                id
                            )
                        }
                        toggleLikeButton={(
                            currentProjectId,
                            currentTaskType,
                            currentTaskId,
                            id
                        ) =>
                            toggleLikeButton(
                                currentProjectId,
                                currentTaskType,
                                currentTaskId,
                                id
                            )
                        }
                        deleteCommentButton={(
                            currentProjectId,
                            currentTaskType,
                            currentTaskId,
                            id
                        ) =>
                            deleteCommentButton(
                                currentProjectId,
                                currentTaskType,
                                currentTaskId,
                                id
                            )
                        }
                        createNewComment={(
                            currentProjectId,
                            currentTaskId,
                            currentTaskType
                        ) =>
                            createNewComment(
                                currentProjectId,
                                currentTaskId,
                                currentTaskType
                            )
                        }
                        updateCommentInputValue={(e) =>
                            updateCommentInputValue(e)
                        }
                        commentInputValue={commentInputValue}
                        deleteProjectButton={(currentProjectId) =>
                            deleteProjectButton(currentProjectId)
                        }
                        deleteTaskButton={(
                            currentProjectId,
                            currentTaskId,
                            currentTaskType
                        ) =>
                            deleteTaskButton(
                                currentProjectId,
                                currentTaskId,
                                currentTaskType
                            )
                        }
                        changeTaskStatus={(
                            changeToStatus,
                            currentProjectId,
                            currentTaskType,
                            currentTaskId
                        ) =>
                            changeTaskStatus(
                                changeToStatus,
                                currentProjectId,
                                currentTaskType,
                                currentTaskId
                            )
                        }
                        openReports={() => openReports()}
                        openMessages={() => openMessages()}
                        deleteMessage={(id) => deleteMessage(id)}
                        deleteReport={(id) => deleteReport(id)}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
