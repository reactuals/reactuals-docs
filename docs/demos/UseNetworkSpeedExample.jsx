import React from "react";
import { useNetworkSpeed } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export function UseNetworkSpeedExample() {
  const { effectiveType, downlinkMbps } = useNetworkSpeed();

  return (
    <DemoWrapper>
      <div>
        <strong>Connection Type:</strong>{" "}
        {effectiveType ? effectiveType : "Unavailable"}
      </div>
      <div>
        <strong>Download Speed:</strong>{" "}
        {downlinkMbps !== null ? `${downlinkMbps} Mbps` : "Unavailable"}
      </div>
    </DemoWrapper>
  );
}
