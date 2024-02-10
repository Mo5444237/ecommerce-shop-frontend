import classes from "./Notification.module.css";

import { useSelector } from "react-redux";

import Notification from "./Notification";

const NotificationsList = () => {
  const notification = useSelector((state) => state.ui.notification);
  const uiChanged = useSelector((state) => state.ui.changed);

  return (
    <div className={classes["notifications-list"]}>
      {uiChanged &&
        notification.map((notification) => (
          <Notification notification={notification} />
        ))}
    </div>
  );
};

export default NotificationsList;
