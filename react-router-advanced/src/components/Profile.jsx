import { Routes, Route, Link } from "react-router-dom";

function ProfileDetails() {
  return <p>Profile Details</p>;
}

function ProfileSettings() {
  return <p>Profile Settings</p>;
}

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
