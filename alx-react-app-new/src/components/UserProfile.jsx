import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{user.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{user.age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;

