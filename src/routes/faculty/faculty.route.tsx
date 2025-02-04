import FacultyDashboard from "../../pages/faculty/FacultyDashboard";
import MyCourses from "../../pages/faculty/MyCourses";
import MyStudents from "../../pages/faculty/MyStudents";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "",
    index: true,
    element: <FacultyDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "My Courses",
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        name: "My Students",
        path: "my-students",
        element: <MyStudents />,
      },
    ],
  },
];
