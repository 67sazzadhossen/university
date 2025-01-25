import MySchedule from "../../pages/student/MySchedule";
import OfferedCourse from "../../pages/student/OfferedCourse";
import StudentDashboard from "../../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    index: true,
    element: <StudentDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "My Schedule",
        path: "shedule",
        element: <MySchedule />,
      },
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />,
      },
    ],
  },
];
