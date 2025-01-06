import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Profile = () => {
    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <div className="profile-details">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
            </div>
        </div>
    );
};

export default Profile;