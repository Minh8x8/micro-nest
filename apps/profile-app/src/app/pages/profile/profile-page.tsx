import React from 'react';
import Profile from '../../components/profile/profile.component';

const ProfilePage: React.FC = () => {
    // Replace with real user data as needed
    const username = 'John Doe';
    return (
        <div>
            <Profile username={username} />
        </div>
    );
};

export default ProfilePage;
