import "antd/dist/antd.min.css";
import "./resourses/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import AdminHome from "./pages/Admin/AdminHome";
import AdminBuses from "./pages/Admin/AdminBuses";
import AdminUsers from "./pages/Admin/AdminUsers";
import BookNow from "./pages/BookNow";
import Bookings from "./pages/Bookings";
import AdminBookings from "./pages/Admin/AdminBookings";
import UserHome from "./pages/UserHome";
import SuccessPage from "./components/Success";
import ContactForm from "./pages/ContactUs";
import TicketBlog from "./pages/Blog";
import AboutPage from "./pages/About";
import ResetPassword from "./components/ResetPassword";
import Profile from "./pages/Profile";
import AdminFeedback from "./pages/Admin/AdminFeedback";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
               <UserHome />
            }
          />
          <Route
            path="/buy"
            element={
              <Home />
            }
          />
          <Route
            path="/contact-us"
            element={
              <ContactForm />
            }
          />
           <Route
            path="/blog"
            element={
              <TicketBlog />
            }
          />
           <Route
            path="/about"
            element={
              <AboutPage />
            }
          />
          <Route
            path="/book-now/:id"
            element={
              <ProtectedRoute>
                <BookNow />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />

           <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/order/success"
            element={
              <ProtectedRoute>
                <SuccessPage />
              </ProtectedRoute>
            }
          />


          <Route
            path="/admin/buses"
            element={
              <ProtectedRoute>
                <AdminBuses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/feedback"
            element={
              <ProtectedRoute>
                <AdminFeedback />
              </ProtectedRoute>
            }
          />

           <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute>
                <AdminBookings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
                <Register />
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
           <Route
            path="/reset-password"
            element={
              <ResetPassword />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
