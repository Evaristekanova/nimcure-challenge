"use client";
import React, { useEffect, useState } from "react";
import Table from "@/app/components/table";
import { patients } from "@/data";
import { updateQueryParam, getQueryParam } from "@/utils/queryParamUtils";
import Pagination from "@/app/components/pagination";
import Loader from "@/app/components/loader";
import Button from "@/app/components/button";

interface Patient {
  hospital_id: string;
  patient_name: string;
  phone_number: string;
  next_delivery_date: string;
  status: "completed" | "assigned" | "due&paid" | "due&unpaid";
}

function Patients() {
  const [data, setData] = useState<Patient[]>([]);
  const [page, setPage] = useState<number | null>(null);
  const [size, setSize] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (getQueryParam("page") === null || getQueryParam("size") === null) {
      updateQueryParam("page", "1");
      updateQueryParam("size", "10");
    }
    const initialPage = getQueryParam("page");
    setPage(Number(initialPage));
    setSize(Number(getQueryParam("size")));
    if (page !== null && size !== null) {
      setData(patients.slice((page - 1) * size, page * size) as Patient[]);
      setIsLoading(false);
    }
  }, [page, size]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="px-8 flex justify-between items-center mt-20">
            <p className="text-lg font-bold text-gray-2">Patients</p>
            <Button
              type="button"
              text="+ Add Patient"
              customstyle="bg-blue-1 text-white text-lg hover:bg-opacity-80 transition-all duration-300 ease-in-out border-none"
              onClick={() => console.log("hello")}
            />
          </div>
          <div className="mt-7 h-[1px] w-full   bg-gray-4"></div>
          <div className="px-8 py-5">
            <Table
              columns={[
                { key: "hospital_id", header: "Hospital Id" },
                { key: "patient_name", header: "Patient's Name" },
                { key: "phone_number", header: "Phone Number" },
                { key: "next_delivery_date", header: "Next Delivery Date" },
                { key: "status", header: "Status" },
                { key: "actions", header: "Actions" },
              ]}
              data={data}
            />
          </div>
          <div className="p-8 flex justify-between text-gray-3">
            <p>
              You&apos;re viewing {size! ?? "10"} out of {patients.length}{" "}
              Deliveries
            </p>
            <Pagination
              currentPage={page! ?? "1"}
              totalItems={patients.length}
              itemsPerPage={size! ?? "10"}
              onPageChange={(page) => {
                updateQueryParam("page", page.toString());
                setPage(page);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Patients;
