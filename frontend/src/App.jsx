import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="users/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
