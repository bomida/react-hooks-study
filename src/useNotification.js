const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
}


function UseNotification() {
  const triggerNotif = useNotification(
    "Can I steal your money?",
    { body: "No, You can't :(" }
  );

  return (
    <div>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
}

export default UseNotification;
