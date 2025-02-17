"use client";
import React, { useEffect, useState } from "react";
import Table from "@/app/components/table";
import { patients } from "@/data";
import { updateQueryParam, getQueryParam } from "@/utils/queryParamUtils";
import Pagination from "@/app/components/pagination";
import Loader from "@/app/components/loader";
import CustomButton from "@/app/components/button";

// shadcn imports
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputComponent from "@/app/components/input";

export interface Patient {
  hospital_id: string;
  patient_name: string;
  phone_number: string;
  next_delivery_date: string;
  status: "completed" | "assigned" | "due&paid" | "due&unpaid";
  delivery_area: string;
  delivery_address: string;
  gender: "Male" | "Female";
  email: string;
}

function Patients() {
  const [data, setData] = useState<Patient[]>([]);
  const [page, setPage] = useState<number | null>(null);
  const [size, setSize] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>("hospital_id"); // Default sort by hospital_id
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    if (getQueryParam("page") === null || getQueryParam("size") === null) {
      updateQueryParam("page", "1");
      updateQueryParam("size", "10");
    }
    const initialPage = getQueryParam("page");
    setPage(Number(initialPage));
    setSize(Number(getQueryParam("size")));
    if (page !== null && size !== null) {
      // Sort the filtered data based on the selected criteria
      const sortedData = patients
        .filter(
          (patient) =>
            patient.patient_name.toLowerCase().includes(search.toLowerCase()) ||
            patient.hospital_id.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          if (!sortBy) return 0;

          const valueA = a[sortBy as keyof Patient];
          const valueB = b[sortBy as keyof Patient];

          if (typeof valueA === "string" && typeof valueB === "string") {
            return valueA.localeCompare(valueB);
          }

          return 0;
        })
        .map((patient) => ({
          ...patient,
          status: patient.status as
            | "completed"
            | "assigned"
            | "due&paid"
            | "due&unpaid",
          gender: patient.gender as "Male" | "Female",
        }));

      setData(sortedData.slice((page - 1) * size, page * size));

      setIsLoading(false);
    }
  }, [page, size, search, sortBy, sortOrder]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-gray-0 pb-8 pt-16">
          <div className="px-8 flex justify-between items-center pt-8 max-w-7xl mx-auto max-lg:w-full max-lg:px-8 max-lg:mx-0 max-sm:px-2">
            <p className="text-lg font-bold text-gray-2">Patients</p>
            <CustomButton
              type="button"
              text="+ Add Patient"
              customstyle="bg-blue-1 text-white text-lg hover:bg-opacity-80 transition-all duration-300 ease-in-out border-none"
              onClick={() => console.log("hello")}
            />
          </div>
          <div className="my-4 h-[1px] w-full bg-gray-4"></div>
          <div className="max-w-7xl mx-auto max-md:px-3 max-lg:w-full max-lg:px-8 max-lg:mx-0 max-sm:px-2">
            <div className=" flex justify-between items-center w-full  bg-transparent max-sm:flex-col max-sm:items-start max-sm:gap-2 ">
              <div className="flex gap-5 z-20 p-2 border rounded-lg max-sm:w-full">
                <p className="text-sm text-gray-3 font-semibold flex items-center border-r-2 pr-3 w-fit max-sm:w-[20vw] ">
                  Sort by:
                </p>
                <div className="max-sm:w-[80vw]">
                  <Select onValueChange={handleSortChange}>
                    <SelectTrigger className=" px-4 py-2 focus:outline-none">
                      <SelectValue placeholder="Hospital Id" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-md mt-1">
                      <SelectGroup>
                        <SelectItem value="hospital_id">Hospital Id</SelectItem>
                        <SelectItem value="phone_number">
                          Phone Number
                        </SelectItem>
                        <SelectItem value="patient_name">
                          Patient&apos;s Name
                        </SelectItem>
                        <SelectItem value="next_delivery_date">
                          Next Delivery Date
                        </SelectItem>
                        <SelectItem value="status">Status</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="max-sm:w-full">
                <InputComponent
                  type="text"
                  placeholder="Search by patient name, id"
                  name="search"
                  value={search}
                  onChange={setSearch}
                  customStyles="py-2 px-4 w-full bg-transparent border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-.5 focus:ring-blue-1"
                />
              </div>
            </div>

            <div className="bg-white mt-5 mb-8 ">
              <div className="py-5 bg-white">
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
              <div className=" flex justify-between text-gray-3 pb-5 px-4 mr-8 ">
                <div className="max-md:block" />
                <p className="max-md:hidden">
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
          </div>
        </div>
      )}
    </>
  );
}

export default Patients;
