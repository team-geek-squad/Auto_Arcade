import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Listings from "./pages/Listings";
import AddListing from "./pages/AddListing";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./context/protectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="listings" element={<Listings />} />
        <Route path="add-listing" element={<ProtectedRoute><AddListing /></ProtectedRoute>} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
