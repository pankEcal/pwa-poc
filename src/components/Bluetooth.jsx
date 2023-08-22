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

  // UUID to get the battery level
  let myService = "0000180f-0000-1000-8000-00805f9b34fb";

  const myOwnConnection = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: [myService],
      });
      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(myService);
      const characteristics = await service.getCharacteristics();

      const { id, name } = await device;
      const { connected } = await server;

      setDeviceData({ id, name, connected });

      console.log("device: ", device);
      console.log("server: ", server);
      console.log("service: ", service);
      console.log("characteristics: ");
      characteristics.map((c) => console.log(c));
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
