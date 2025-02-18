import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

function Scan() {
  const [data, setData] = useState("No result");
  const [scanningStatus, setScanningStatus] = useState("Ready to scan");

  const handleResult = (result: any, error: any) => {
    if (result) {
      const scannedValue = result?.text;

      // Validate scanned value (you can enhance this based on your validation rules)
      if (scannedValue && scannedValue.length > 0) {
        setData(scannedValue);
        setScanningStatus("QR code scanned successfully!");
      } else {
        setScanningStatus("Invalid QR code");
      }
    } else if (error) {
      setScanningStatus("Scanning error. Please try again.");
    }
  };

  return (
    <div>
      <h2>Scan QR</h2>
      <div style={{ width: "40%", height: "40%" }}>
        <QrReader
          onResult={handleResult}
          constraints={{ facingMode: "environment" }}
        />
      </div>
      <p>{scanningStatus}</p>
      <p>Scanned Data: {data}</p>
    </div>
  );
}

export default Scan;
