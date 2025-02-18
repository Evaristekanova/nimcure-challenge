"use client";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/button";
import { deliveries } from "@/data";
import Loader from "@/app/components/loader";
import Table from "@/app/components/table";
import PatientInfo from "@/app/components/patientInfo";
import AlertPopupComponent from "@/app/components/alertPopup";

export interface DeliveryPackage {
  package_code: string;
  delivery_date: string;
  phone_number: string;
  patient_name: string;
  location: string;
  hospital_id: string;
}

function Deliveries() {
  const [deliveriesData, setDeliveriesData] = useState<DeliveryPackage[]>([]);
  const [success, setsuccess] = useState<boolean>(true);
  const [showAlert, setshowAlert] = useState<boolean>(true);

  useEffect(() => {
    setDeliveriesData(deliveries);
  }, [deliveries]);

  return !deliveries ? (
    <Loader />
  ) : (
    <div className="bg-gray-0 pb-8 min-h-screen pt-16">
      <div className=" flex justify-between items-center pt-8 max-w-7xl mx-auto max-lg:w-full max-lg:px-8 max-lg:mx-0 max-sm:px-2 relative">
        <AlertPopupComponent
          isSuccess={success}
          onClick={() => setshowAlert(!showAlert)}
          showPopup={showAlert}
        />
        <div className="max-sm:hidden"></div>
        <Button
          type="button"
          text="Add Devilery"
          customstyle="bg-blue-1 text-white text-lg hover:bg-opacity-80 transition-all duration-300 ease-in-out border-none py-3"
          onClick={() => console.log("d")}
        />
      </div>
      <div className="my-4 h-[1px] w-full bg-gray-4"></div>

      <div className="flex max-lg:flex-col gap-5 max-w-7xl mx-auto mt-5 max-lg:w-full max-lg:px-8 max-sm:px-3 max-lg:mx-0">
        {/* sidebar */}
        <div className="w-1/4 max-lg:w-full grid gap-7 h-fit mt-5">
          <div className=" min-h-40 max-lg:grid max-lg:grid-cols-1 max-lg:min-h-32  max-lg:h-fit max-sm:grid-cols-1 bg-white">
            <div className="h-14 flex items-center border-b-2 px-8">
              <p className="text-gray-2 font-bold">Unassigned Deliveries</p>
            </div>
            <div className="mt-3 grid gap-4 max-lg:gap-2 px-3 bg-white p-4">
              <DeliveryReportCard infoField="Paid" value="12" />
              <DeliveryReportCard infoField="Unpaid" value="8" />
            </div>
          </div>
          <div className="w-full max-lg:w-full grid  bg-white h-fit">
            <div className="h-60 max-lg:grid max-lg:grid-cols-3  max-lg:h-fit max-sm:h-44 max-sm:grid-cols-1 bg-white">
              <p className="cursor-pointer  flex items-center px-9 text-lg text-gray-1 h-20 max-sm:h-14">
                Pending
              </p>
              <p className="cursor-pointer h-20 flex items-center px-9 text-lg  bg-blue-2 text-blue-1 font-extrabold border-r-4 border-r-blue-1 max-sm:h-14">
                Successful
              </p>
              <p className="cursor-pointer flex items-center justify-between px-9 text-lg text-gray-1 h-20 max-sm:h-14">
                <span>Failed</span>
                <span className="w-5 h-5 rounded-full bg-red-1 text-white grid place-content-center p-3 text-[15px]">
                  12
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white mt-5 mb-8 w-3/4 max-lg:w-full">
          <div className="py-5 bg-white">
            <Table
              columns={[
                { key: "package_code", header: "Package Code" },
                { key: "delivery_date", header: "Delivery Date" },
                { key: "patient_name", header: "Patient's Name" },
                { key: "phone_number", header: "Phone Number" },
                { key: "location", header: "Location" },
                { key: "actions", header: "Actions" },
              ]}
              data={deliveries}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const DeliveryReportCard = ({
  infoField,
  value,
}: {
  infoField: string;
  value: string;
}) => {
  return (
    <div className="flex justify-between items-center px-2 w-full mb-3">
      <p className="font-light text-gray-2 text-[15px]">{infoField}</p>
      <p className="w-5 h-5 rounded-full bg-red-1 text-white grid place-content-center p-3 text-[15px]">
        {value}
      </p>
    </div>
  );
};

export default Deliveries;
