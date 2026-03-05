// import { useState } from "react";

export function SummaryPanel({ activeDevices, criticalDevices, onReboot }) {
    return(
        <>
        <p>
            Active: { activeDevices } Critical: { criticalDevices }
        </p>
        <button onClick={onReboot}>Emergency Reboot All</button>
        </>
    )
}

export default SummaryPanel;