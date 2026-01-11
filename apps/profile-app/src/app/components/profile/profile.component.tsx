import React from 'react';

export interface ProfileProps {
    username?: string;
}

export const Profile: React.FC<ProfileProps> = ({ username }) => {
    return (
        <div style={{ padding: 24, textAlign: 'center' }}>
            <h2>Profile</h2>
            <p>Hi, {username || 'Guest'}!</p>
        </div>
    );
};
export default Profile;
