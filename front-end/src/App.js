import logo from "./logo.svg";
import "./App.css";
import { MyNav } from "./components/MyNav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import "./assets/js/script.js";
import { SignupPage } from "./components/Signup";
import { LoginPage } from "./components/Login";
import { DeleteItem } from "./components/DeleteItem";
import { Topics } from "./components/Topics";
import { ProfileSettings } from "./components/ProfileSettings";

import { Activity } from "./components/Activity";
import { CreatePost } from "./components/CreatePost";
import { Post } from "./components/Post";
import { Mypost } from "./components/Mypost";
import { AddPost } from "./components/AddPost";
import { EditPost } from "./components/EditPost";
import { Profile } from "./components/Profile";
import privateRoute from "./utils/privateRoute";
import PrivateRoute from "./utils/privateRoute";
import EditProfile from "./components/EditProfile";
import { AuthProvider } from "./context/AuthContext";

import Chat from './Chat';

function App() {
  return (
    <div>
      <AuthProvider>
        <MyNav />
        <Routes>
          <Route path="" element={<PrivateRoute component={Home} />} />
          <Route path="home" element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="mypost" element={<Mypost />} />
          <Route path="signup" element={<SignupPage />} />

          <Route path="Login" element={<LoginPage />} />

          <Route path="Delete" element={<DeleteItem />} />
          <Route path="Topics" element={<Topics />} />
          <Route path="profile-settings" element={<ProfileSettings />} />

          <Route path="activity" element={<Activity />} />

          <Route path="addpost" element={<AddPost />} />
          <Route path="editpost/:id" element={<EditPost />} />
          <Route path="post" element={<Post />} />
          <Route
            path="profile"
            element={<PrivateRoute component={Profile} />}
          />
          <Route
            path="editprofile"
            element={<PrivateRoute component={EditProfile} />}
          />
          



          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
