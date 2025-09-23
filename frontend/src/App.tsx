import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import BooksList from "./pages/BooksList";
import Navbar from "./components/Navbar";
import AddBookComponent from "./pages/AddBook";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/add-book" element={<AddBookComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
