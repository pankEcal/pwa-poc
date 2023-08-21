let options = {
  filters: [
    {
      namePrefix: "OnePlus",
    },
  ],
  // acceptAllDevices: true,
};
const myOwnConnection = async () => {
  try {
    const device = await navigator.bluetooth.requestDevice(options);

    console.log(device);

    const server = await device.gatt.connect();

    console.log(server);
  } catch (err) {
    console.log(err);
  }
};

const BluetoothComponent = () => {
  return (
    <div>
      <button onClick={myOwnConnection}>Search Bluetooth</button>
    </div>
  );
};

export default BluetoothComponent;
