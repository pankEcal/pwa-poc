import { useEffect, useState } from "react";
import BluetoothData from "./ResponseData";

let options = {
  filters: [
    {
      namePrefix: "Android",
    },
  ],
  // acceptAllDevices: true,
};

const BluetoothComponent = () => {
  const [deviceData, setDeviceData] = useState();
  const [serverData, setServerData] = useState({
    name: "server data",
  });

  useEffect(() => {}, [serverData, deviceData]);

  const myOwnConnection = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      const server = await device.gatt.connect();

      const { id, name } = await device;
      const { connected } = await server;

      setDeviceData({ id, name, connected });
      console.log(deviceData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={myOwnConnection}>Search Bluetooth</button>
      <BluetoothData title="Device Data" data={deviceData} />
    </div>
  );
};

export default BluetoothComponent;
