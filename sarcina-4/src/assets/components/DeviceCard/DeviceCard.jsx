import { useState } from "react";
import styles from "./DeviceCard.module.css"

export function DeviceCard({name, type, load, status}) {
    const [loadData, setLoadData] = useState(load);
    const [statusData, setStatusdata] = useState(status);
    function flush() {
        setLoadData(loadData <= 0 ? 0 : loadData - 20);
        if(loadData >= 90){
            setStatusdata('Critical')
        }else if(loadData <= 89 && loadData >= 70){
            setStatusdata('Warning')
        }else{ setStatusdata('Active')};
    }
    function simulate() {;
        setLoadData(loadData >= 100 ? 100 : loadData + 10);
        if(loadData >= 90){
            setStatusdata('Critical')
        }else if(loadData <= 89 && loadData >= 70){
            setStatusdata('Warning')
        }else{ setStatusdata('Active')};
    }
    return (
        <div className={styles.border}>
            <p>{name}</p> <br />
            <p>{ type }</p> <br />
            <p className={styles[statusData]}>{ statusData }</p> <br />
            <p>{loadData}</p> <br />
            <button onClick={() => simulate()}>Simulate Traffic</button>
            <button onClick={() => flush()}>Flush Cache</button>
        </div>
    )
 }

 export default DeviceCard;