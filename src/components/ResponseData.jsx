import "./Bluetooth.css";

const BluetoothData = (props) => {
  const { title, data } = props;

  return (
    <div className="dataContainer">
      <p> {title} </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default BluetoothData;
