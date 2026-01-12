import React, { useEffect, useState } from 'react';

// ProfileProps is no longer needed for this mock data demo

const mockData = {
    id: 1,
    firstName: 'Emily',
    lastName: 'Johnson',
    maidenName: 'Smith',
    age: 29,
    gender: 'female',
    email: 'emily.johnson@x.dummyjson.com',
    phone: '+81 965-431-3024',
    username: 'emilys',
    password: 'emilyspass',
    birthDate: '1996-5-30',
    image: 'https://dummyjson.com/icon/emilys/128',
};

const Profile: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="d-flex flex-column align-items-center mt-4">
                <div
                    className="spinner-border text-primary"
                    style={{ width: 48, height: 48 }}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading profile...</p>
            </div>
        );
    }
    return (
        <div
            className="container-fluid px-4 py-4"
            style={{
                maxWidth: '1200px',
                margin: '2rem auto',
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                border: '1px solid #eee',
            }}
        >
            <div className="row align-items-center">
                {/* Left column: Avatar and Name */}
                <div className="col-md-3 d-flex flex-column align-items-center mb-3 mb-md-0">
                    <img
                        src={mockData.image}
                        alt={mockData.firstName}
                        className="rounded-circle mb-3 shadow"
                        style={{ width: 128, height: 128, objectFit: 'cover' }}
                    />
                    <h2
                        className="mb-0"
                        style={{ fontSize: 24, fontWeight: 600 }}
                    >
                        {mockData.firstName} {mockData.lastName}
                    </h2>
                </div>
                {/* Right column: Details */}
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3">
                            <strong>Username:</strong> {mockData.username}
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <strong>Email:</strong> {mockData.email}
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <strong>Phone:</strong> {mockData.phone}
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <strong>Gender:</strong> {mockData.gender}
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <strong>Age:</strong> {mockData.age}
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <strong>Birth Date:</strong> {mockData.birthDate}
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <strong>Maiden Name:</strong> {mockData.maidenName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
