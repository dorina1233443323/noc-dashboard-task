import dataArr from "@data/devices.json";
import { DeviceCard } from "@components/DeviceCard";
import { SummaryPanel } from "@components/SummaryPanel";
// import { useState } from "react";
// import { useState } from "react";

export function Main() {
    // const data = dataArr;
    // const[id, setId] = useState(data[id])

    return(
        <>
        <SummaryPanel ></SummaryPanel>
        {dataArr.map((device) => (
            <DeviceCard key={device.id} name={device.name} type={device.type} status={device.status} load={device.load}></DeviceCard>
        ))}
        </>
     )
  
}

export default Main;