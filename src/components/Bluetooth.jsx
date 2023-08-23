import { useState } from "react";
import BluetoothData from "./ResponseData";

let myService = [
  // generic_access
  "00001800-0000-1000-8000-00805f9b34fb",
];

let options = {
  acceptAllDevices: true,
  optionalServices: myService,
  // services: [myService],
  // filters: [],
  // exclusionFilters: [],
};

const BluetoothComponent = () => {
  const [deviceData, setDeviceData] = useState();

  const myOwnConnection = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice(options);
      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(myService[0]);
      const characteristics = await service.getCharacteristics();

      const { id, name } = await device;
      const { connected } = await server;

      setDeviceData({ id, name, connected });

      console.log("device: ", device);
      console.log("server: ", server);
      console.log("service: ", service);
      console.log("characteristics: ", characteristics);
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
