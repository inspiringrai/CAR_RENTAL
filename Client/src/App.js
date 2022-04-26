import SignUp from "./signup";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { AdminPage } from "./adminPage";
import { CustomerPage } from "./customerPage";
import { AgentPage } from "./agentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<SignUp registered={false}/>}/>
          <Route exact path="/signin" element={<SignUp registered={true}/>}/>
          <Route exact path="/admin" element={<AdminPage/>}/>
          <Route exact path="/customer" element={<CustomerPage/>}/>
          <Route exact path="/agent" element={<AgentPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
