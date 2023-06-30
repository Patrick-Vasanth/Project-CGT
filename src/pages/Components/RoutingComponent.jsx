import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
// import AdminReferral from "./AdminReferral";
// import AdminStudent from "./AdminStudent";
import ReferralFullList from "./ReferralFullList";
import StudentFullList from "./StudentFullList";
import StudentProfile from "./StudentProfile";
import ReferralProfile from "./ReferralProfile";
import WithNavigation from "./WithNavigation";
import WithParam from "./WithParams";
import ReferralCreation from "./ReferralCreation";
import StudentCreation from "./StudentCreation";
import LoginPage from "./LoginPage";
import LoginCredentials from "./LoginCredentials";
import ForgetPassword from "./ForgetPassword";

export default function RoutingComponent() {
  const LoginWithNavigation = WithNavigation(LoginPage);
  const StudentCreationWithNaviagtion = WithNavigation(StudentCreation);
  const ReferralCreationWithNaviagtion = WithNavigation(ReferralCreation);
  const AdminReferralWithNaviagtion = WithNavigation(ReferralFullList);
  const AdminStudentWithNaviagtion = WithNavigation(StudentFullList);
  const ForgetPasswordWithNavigation = WithNavigation(ForgetPassword);
  const HomePageWithNaviagtion = WithNavigation(HomePage);
  const StudentProfileWithNaviagtion = WithNavigation(StudentProfile);
  const ReferralProfileWithNaviagtion = WithNavigation(ReferralProfile);

  const LoginCredentialsWithNavigation = WithNavigation(LoginCredentials);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginCredentials />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/adminreferral" element={<ReferralFullList />}></Route>
          <Route path="/adminstudent" element={<StudentFullList />}></Route>
          <Route
            path="/referralcreation"
            element={<ReferralCreation />}
          ></Route>
          <Route path="/studentcreation" element={<StudentCreation />}></Route>
          <Route path="/studentprofile" element={<StudentProfile />}></Route>
          <Route path="/referralprofile" element={<ReferralProfile />}></Route>
        </Routes>
      </Router>
    </>
  );
}
