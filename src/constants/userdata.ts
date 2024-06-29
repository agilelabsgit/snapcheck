export type User = {
  _id: string;
  name: string;
  email: string;
  company: string;
  createdAt: string;
  report_access: string;
  plan: string[];
  password: string;
  role: string;
};

export const users: User[] = [
  {
    _id: "1",
    name: "User 1",
    email: "user1@example.com",
    company: "Internal",
    createdAt: "2023-01-15",
    report_access: "view",
    plan: ["Plan A", "Plan B"],
    password: "password1",
    role: "admin",
  },
  {
    _id: "2",
    name: "User 2",
    email: "user2@example.com",
    company: "External",
    createdAt: "2023-02-20",
    report_access: "view and download",
    plan: ["Plan C"],
    password: "password2",
    role: "user",
  },
  {
    _id: "3",
    name: "User 3",
    email: "user3@example.com",
    company: "Internal",
    createdAt: "2023-03-10",
    report_access: "view",
    plan: ["Plan B", "Plan D"],
    password: "password3",
    role: "user",
  },
  {
    _id: "4",
    name: "User 4",
    email: "user4@example.com",
    company: "External",
    createdAt: "2023-04-05",
    report_access: "view and download",
    plan: ["Plan A"],
    password: "password4",
    role: "admin",
  },
  {
    _id: "5",
    name: "User 5",
    email: "user5@example.com",
    company: "Internal",
    createdAt: "2023-05-12",
    report_access: "view",
    plan: ["Plan C", "Plan D"],
    password: "password5",
    role: "user",
  },
  {
    _id: "6",
    name: "User 6",
    email: "user6@example.com",
    company: "External",
    createdAt: "2023-06-18",
    report_access: "view and download",
    plan: ["Plan B"],
    password: "password6",
    role: "user",
  },
  {
    _id: "7",
    name: "User 7",
    email: "user7@example.com",
    company: "Internal",
    createdAt: "2023-07-25",
    report_access: "view",
    plan: ["Plan A", "Plan D"],
    password: "password7",
    role: "admin",
  },
  {
    _id: "8",
    name: "User 8",
    email: "user8@example.com",
    company: "External",
    createdAt: "2023-08-30",
    report_access: "view and download",
    plan: ["Plan B"],
    password: "password8",
    role: "user",
  },
  {
    _id: "9",
    name: "User 9",
    email: "user9@example.com",
    company: "Internal",
    createdAt: "2023-09-14",
    report_access: "view",
    plan: ["Plan C"],
    password: "password9",
    role: "user",
  },
  {
    _id: "10",
    name: "User 10",
    email: "user10@example.com",
    company: "External",
    createdAt: "2023-10-22",
    report_access: "view and download",
    plan: ["Plan A", "Plan B", "Plan D"],
    password: "password10",
    role: "admin",
  },
  {
    _id: "11",
    name: "User 11",
    email: "user11@example.com",
    company: "Internal",
    createdAt: "2023-11-05",
    report_access: "view",
    plan: ["Plan C"],
    password: "password11",
    role: "user",
  },
  {
    _id: "12",
    name: "User 12",
    email: "user12@example.com",
    company: "External",
    createdAt: "2023-12-08",
    report_access: "view and download",
    plan: ["Plan A", "Plan D"],
    password: "password12",
    role: "user",
  },
  {
    _id: "13",
    name: "User 13",
    email: "user13@example.com",
    company: "Internal",
    createdAt: "2024-01-17",
    report_access: "view",
    plan: ["Plan B", "Plan C"],
    password: "password13",
    role: "admin",
  },
  {
    _id: "14",
    name: "User 14",
    email: "user14@example.com",
    company: "External",
    createdAt: "2024-02-25",
    report_access: "view and download",
    plan: ["Plan D"],
    password: "password14",
    role: "user",
  },
  {
    _id: "15",
    name: "User 15",
    email: "user15@example.com",
    company: "Internal",
    createdAt: "2024-03-30",
    report_access: "view",
    plan: ["Plan A", "Plan B", "Plan C"],
    password: "password15",
    role: "user",
  },
];
