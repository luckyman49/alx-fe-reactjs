import axios from "axios";

export async function fetchUserData(username) {
  // Call the GitHub API endpoint for user data
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}
