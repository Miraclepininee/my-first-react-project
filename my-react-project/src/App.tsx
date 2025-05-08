//import reference to my CoursesList components:

import { CoursesListComponent } from "./Components/Courses/CoursesList.component";

//mock data
const items: any[] = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
];

//component:
function App() {
  return (
  <div>
    <CoursesListComponent items={items}/>
  </div>
  );
}

export default App;
