const GITHUB_API_URL = "https://api.github.com";

// Basic user fetch (Task 1)
export async function fetchUserData(username) {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return await response.json();
}

// Advanced search (Task 2)
export async function fetchAdvancedUserData(username, location, minRepos) {
  let query = "";

  if (username) query += `user:${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await fetch(`${GITHUB_API_URL}/search/users?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error("Search failed");
  }
  return await response.json();
}
