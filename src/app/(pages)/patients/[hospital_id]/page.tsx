"use client";
import React from "react";
import { useParams } from "next/navigation";

function SinglePatient() {
  const { hospital_id } = useParams();

  return (
    <div>
      <h1>Patients</h1>
      <p>hospital_id: {hospital_id}</p>
    </div>
  );
}

export default SinglePatient;
