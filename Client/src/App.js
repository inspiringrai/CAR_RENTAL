import SignUp from "./signup";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
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
          <Route path="/" element={<Navigate to='signin'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
