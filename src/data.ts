import { DeliveryPackage } from "./app/(pages)/deliveries/page";
import { Patient } from "./app/(pages)/patients/page";
import { DispatchRiderCardProps } from "./app/components/dispatchRiderCard";

export const deliveries: DeliveryPackage[] = [
  {
    package_code: "PKG1",
    delivery_date: "2025-02-18",
    phone_number: "+12345678901",
    location: "Location 1",
    hospital_id: "",
    patient_name: "John Doe",
  },
  {
    package_code: "PKG2",
    delivery_date: "2025-02-19",
    phone_number: "+12345678902",
    location: "Location 2",
    hospital_id: "",
    patient_name: "Jane Smith",
  },
  {
    package_code: "PKG3",
    delivery_date: "2025-02-20",
    phone_number: "+12345678903",
    location: "Location 3",
    hospital_id: "",
    patient_name: "Mark Johnson",
  },
  {
    package_code: "PKG4",
    delivery_date: "2025-02-21",
    phone_number: "+12345678904",
    location: "Location 4",
    hospital_id: "",
    patient_name: "Sarah Lee",
  },
  {
    package_code: "PKG5",
    delivery_date: "2025-02-22",
    phone_number: "+12345678905",
    location: "Location 5",
    hospital_id: "",
    patient_name: "David Brown",
  },
  {
    package_code: "PKG6",
    delivery_date: "2025-02-23",
    phone_number: "+12345678906",
    location: "Location 6",
    hospital_id: "",
    patient_name: "Emily Clark",
  },
  {
    package_code: "PKG7",
    delivery_date: "2025-02-24",
    phone_number: "+12345678907",
    location: "Location 7",
    hospital_id: "",
    patient_name: "Michael Scott",
  },
  {
    package_code: "PKG8",
    delivery_date: "2025-02-25",
    phone_number: "+12345678908",
    location: "Location 8",
    hospital_id: "",
    patient_name: "Sophia Turner",
  },
];

export const dispatchRiderData: DispatchRiderCardProps[] = [
  {
    dispatch_rider_name: "John Doe",
    delivery_area: "Downtown",
    number_of_delivery: "25",
  },
  {
    dispatch_rider_name: "Jane Smith",
    delivery_area: "Uptown",
    number_of_delivery: "18",
  },
  {
    dispatch_rider_name: "Mike Johnson",
    delivery_area: "Eastside",
    number_of_delivery: "32",
  },
  {
    dispatch_rider_name: "Emily Davis",
    delivery_area: "Westside",
    number_of_delivery: "27",
  },
  {
    dispatch_rider_name: "Chris Lee",
    delivery_area: "Suburb",
    number_of_delivery: "22",
  },
  {
    dispatch_rider_name: "Sarah Brown",
    delivery_area: "Central Park",
    number_of_delivery: "20",
  },
  {
    dispatch_rider_name: "David Wilson",
    delivery_area: "Midtown",
    number_of_delivery: "15",
  },
  {
    dispatch_rider_name: "Olivia Turner",
    delivery_area: "Lakeside",
    number_of_delivery: "10",
  },
  {
    dispatch_rider_name: "Liam White",
    delivery_area: "Mountain View",
    number_of_delivery: "35",
  },
  {
    dispatch_rider_name: "Sophia Miller",
    delivery_area: "Riverside",
    number_of_delivery: "28",
  },
];

export const patients: Patient[] = [
  {
    hospital_id: "7HDRF7MN",
    patient_name: "Martha Harvey",
    phone_number: "285.295.2051x741",
    next_delivery_date: "2025-12-25",
    status: "assigned",
    delivery_area: "Area A",
    delivery_address: "123 Main Street",
    gender: "Female",
    email: "martha.harvey@example.com",
  },
  {
    hospital_id: "SPK3IA7Z",
    patient_name: "Jessica Young",
    phone_number: "264.232.2018",
    next_delivery_date: "2025-10-11",
    status: "due&unpaid",
    delivery_area: "Area B",
    delivery_address: "456 Oak Street",
    gender: "Female",
    email: "jessica.young@example.com",
  },
  {
    hospital_id: "WRJLY3RT",
    patient_name: "Nicole Williams",
    phone_number: "+1-168-852-2475x492",
    next_delivery_date: "2025-12-17",
    status: "completed",
    delivery_area: "Area C",
    delivery_address: "789 Pine Street",
    gender: "Female",
    email: "nicole.williams@example.com",
  },
  {
    hospital_id: "NDA9O8V3",
    patient_name: "Ann Brown",
    phone_number: "009.738.9130x028",
    next_delivery_date: "2025-12-11",
    status: "due&paid",
    delivery_area: "Area D",
    delivery_address: "101 Maple Avenue",
    gender: "Female",
    email: "ann.brown@example.com",
  },
  {
    hospital_id: "Z71YT44M",
    patient_name: "Brian Lopez",
    phone_number: "149.812.1707x203",
    next_delivery_date: "2025-06-07",
    status: "completed",
    delivery_area: "Area E",
    delivery_address: "202 Birch Lane",
    gender: "Male",
    email: "brian.lopez@example.com",
  },
  {
    hospital_id: "D0L8LLRE",
    patient_name: "Charles Johnson",
    phone_number: "781.512.9080x16658",
    next_delivery_date: "2026-01-09",
    status: "due&paid",
    delivery_area: "Area F",
    delivery_address: "303 Cedar Street",
    gender: "Male",
    email: "charles.johnson@example.com",
  },
  {
    hospital_id: "XJB8JNI8",
    patient_name: "Melissa Ray",
    phone_number: "607-382-7342",
    next_delivery_date: "2025-05-31",
    status: "due&paid",
    delivery_area: "Area G",
    delivery_address: "404 Elm Street",
    gender: "Female",
    email: "melissa.ray@example.com",
  },
  {
    hospital_id: "R1RHED06",
    patient_name: "Victor Hughes",
    phone_number: "+1-315-290-2035x41711",
    next_delivery_date: "2025-06-26",
    status: "due&paid",
    delivery_area: "Area H",
    delivery_address: "505 Willow Avenue",
    gender: "Male",
    email: "victor.hughes@example.com",
  },
  {
    hospital_id: "9DFTH88Q",
    patient_name: "Douglas Ramos",
    phone_number: "882.017.7496x69375",
    next_delivery_date: "2025-03-27",
    status: "completed",
    delivery_area: "Area I",
    delivery_address: "606 Poplar Street",
    gender: "Male",
    email: "douglas.ramos@example.com",
  },
  {
    hospital_id: "NX14TJ1J",
    patient_name: "Adam Mora",
    phone_number: "+1-677-261-4123x349",
    next_delivery_date: "2025-11-10",
    status: "due&paid",
    delivery_area: "Area J",
    delivery_address: "707 Magnolia Street",
    gender: "Male",
    email: "adam.mora@example.com",
  },
  {
    hospital_id: "7858MDUU",
    patient_name: "Edward Dawson",
    phone_number: "+1-348-010-2296",
    next_delivery_date: "2025-04-13",
    status: "completed",
    delivery_area: "Area K",
    delivery_address: "808 Redwood Drive",
    gender: "Male",
    email: "edward.dawson@example.com",
  },
  {
    hospital_id: "7MRRZ1T6",
    patient_name: "Barbara Smith",
    phone_number: "001-698-778-8371x72686",
    next_delivery_date: "2025-12-08",
    status: "completed",
    delivery_area: "Area L",
    delivery_address: "909 Spruce Avenue",
    gender: "Female",
    email: "barbara.smith@example.com",
  },
  {
    hospital_id: "SQ0P1ITQ",
    patient_name: "Debra Williams",
    phone_number: "1131579363",
    next_delivery_date: "2025-09-09",
    status: "completed",
    delivery_area: "Area M",
    delivery_address: "1010 Cypress Street",
    gender: "Female",
    email: "debra.williams@example.com",
  },
  {
    hospital_id: "6SN7GNFF",
    patient_name: "Annette Vasquez",
    phone_number: "(775)449-4682x10320",
    next_delivery_date: "2025-04-17",
    status: "due&paid",
    delivery_area: "Area N",
    delivery_address: "1111 Dogwood Lane",
    gender: "Female",
    email: "annette.vasquez@example.com",
  },
  {
    hospital_id: "8IWATQGO",
    patient_name: "Danielle Lee",
    phone_number: "+1-336-655-7098x7786",
    next_delivery_date: "2025-06-27",
    status: "completed",
    delivery_area: "Area O",
    delivery_address: "1212 Hickory Street",
    gender: "Female",
    email: "danielle.lee@example.com",
  },
  {
    hospital_id: "7AA78LQ5",
    patient_name: "Christopher Benson",
    phone_number: "+1-722-464-0673x8991",
    next_delivery_date: "2025-07-25",
    status: "completed",
    delivery_area: "Area P",
    delivery_address: "1313 Ash Lane",
    gender: "Male",
    email: "christopher.benson@example.com",
  },
  {
    hospital_id: "A9HPCYWK",
    patient_name: "Lauren Stephens",
    phone_number: "001-802-414-1059x05830",
    next_delivery_date: "2025-06-02",
    status: "completed",
    delivery_area: "Area Q",
    delivery_address: "1414 Chestnut Drive",
    gender: "Female",
    email: "lauren.stephens@example.com",
  },
  {
    hospital_id: "ZNLI5S1Q",
    patient_name: "Melissa Whitney",
    phone_number: "197-185-4534",
    next_delivery_date: "2025-03-05",
    status: "due&unpaid",
    delivery_area: "Area R",
    delivery_address: "1515 Locust Avenue",
    gender: "Female",
    email: "melissa.whitney@example.com",
  },
  {
    hospital_id: "7SPPF9KV",
    patient_name: "Megan Hughes",
    phone_number: "(626)160-1319x2847",
    next_delivery_date: "2025-04-19",
    status: "assigned",
    delivery_area: "Area S",
    delivery_address: "1616 Hawthorne Street",
    gender: "Female",
    email: "megan.hughes@example.com",
  },
  {
    hospital_id: "K1RYJTKQ",
    patient_name: "Nicole Caldwell",
    phone_number: "141-351-5867",
    next_delivery_date: "2025-09-14",
    status: "assigned",
    delivery_area: "Area T",
    delivery_address: "1717 Sycamore Lane",
    gender: "Female",
    email: "nicole.caldwell@example.com",
  },
  {
    hospital_id: "W7ARA3N0",
    patient_name: "Stacy Klein",
    phone_number: "507-910-8795",
    next_delivery_date: "2025-11-17",
    status: "assigned",
    delivery_area: "Area U",
    delivery_address: "1818 Walnut Street",
    gender: "Female",
    email: "stacy.klein@example.com",
  },
  {
    hospital_id: "CSEOVR5L",
    patient_name: "William Williamson",
    phone_number: "(363)732-8861x4194",
    next_delivery_date: "2025-03-28",
    status: "assigned",
    delivery_area: "Area V",
    delivery_address: "1919 Beechwood Drive",
    gender: "Male",
    email: "william.williamson@example.com",
  },
  {
    hospital_id: "T3XYJ1Q9",
    patient_name: "Stephanie Adams",
    phone_number: "+1-542-123-4567",
    next_delivery_date: "2025-07-22",
    status: "completed",
    delivery_area: "Area W",
    delivery_address: "2020 Willow Creek Road",
    gender: "Female",
    email: "stephanie.adams@example.com",
  },
  {
    hospital_id: "J95ZYAVN",
    patient_name: "Thomas Brown",
    phone_number: "+1-201-123-9876",
    next_delivery_date: "2025-02-16",
    status: "due&paid",
    delivery_area: "Area X",
    delivery_address: "3031 Oak Street",
    gender: "Male",
    email: "thomas.brown@example.com",
  },
  {
    hospital_id: "LVQ4QFI7",
    patient_name: "Janet Black",
    phone_number: "+1-123-456-7890",
    next_delivery_date: "2025-03-08",
    status: "assigned",
    delivery_area: "Area Y",
    delivery_address: "4042 Birch Lane",
    gender: "Female",
    email: "janet.black@example.com",
  },
  {
    hospital_id: "WJAZ7BTT",
    patient_name: "Alex White",
    phone_number: "+1-789-123-5678",
    next_delivery_date: "2025-04-20",
    status: "due&unpaid",
    delivery_area: "Area Z",
    delivery_address: "5053 Redwood Street",
    gender: "Male",
    email: "alex.white@example.com",
  },
];
