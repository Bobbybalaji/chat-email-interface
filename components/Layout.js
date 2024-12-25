import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ width: '25%', borderRight: '1px solid #ccc', padding: '10px' }}>
        {/* Sidebar for email threads */}
      </div>
      <div style={{ width: '75%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
