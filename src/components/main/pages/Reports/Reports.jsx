import EmptyNotification from "../../../../reusable/notifications/EmptyNotification/EmptyNotification";
import NotificationBubble from "../../../../reusable/notifications/NotificationBubble/NotificationBubble";
import ReportBox from "./ReportBox";
import "./Reports.css";

function Reports({ userData }) {
    console.log(userData.reports);
    let unread_reportNotifications = userData.reports
        ? userData.reports.filter((report) => report.isRead === false)
        : 0;
    return (
        <div className="reports">
            {/* Notification Bubble (if not empty) */}
            {userData.reports.length !== 0 && (
                <NotificationBubble
                    notificationCount={unread_reportNotifications.length}
                    textSingular="report"
                    textPlural="reports"
                />
            )}
            {/* Has Reports: */}
            {userData.reports.length > 0 &&
                userData.reports.map((report) => {
                    return (
                        <ReportBox
                            key={report.id}
                            id={report.id}
                            title={report.title}
                            content={report.content}
                            timeCreated={report.timeCreated}
                            dateCreated={report.dateCreated}
                            reportType={report.reportType}
                            isRead={report.isRead}
                            isDeleted={report.isDeleted}
                        />
                    );
                })}
            {/* No Repors: */}
            {userData.reports.length === 0 && (
                <EmptyNotification
                    icon="fa-solid fa-box-open"
                    text="Looks like you have no reports!"
                />
            )}
        </div>
    );
}

export default Reports;