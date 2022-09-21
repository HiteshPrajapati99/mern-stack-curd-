import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Userdata from "./Components/Userdata";
import Userform from "./Components/Userform";
import UserEdit from "./Components/UserEdit";
import Heder from "./navbar/Heder";
function App() {
  return (
    <>
      <BrowserRouter>
        <Heder />
        <Routes>
          <Route path="/" element={<Userdata />} />
          <Route path="form" element={<Userform />} />
          <Route path="edit/:id" element={<UserEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
