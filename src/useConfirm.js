const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof callback !== "function") {
    return;
  }
  if (onConfirm && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction;
}

function UseConfirm() {
  const deleteWorld = () => console.log("Delete the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default UseConfirm;
